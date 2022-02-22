<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light" class="border-bottom border-info">
      <b-navbar-brand :to="{ name: 'home' }">
        <img src="@/assets/logo.svg" class="d-inline-block align-top navbar-logo" alt="Humbug">
        Humbug
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <BIconFlag /><span> {{ $t('menuLocale') }}</span>
            </template>
            <b-dropdown-item v-for="language in languages" :key="`locale-${language.locale}`" @click="onLocaleChanged(language)">
              <span class="mr-2">{{ language.icon }}</span>
              <span>{{ language.name }}</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#" @click="onImportClicked"><BIconFolderPlus /> {{ $t('menuImport') }}</b-nav-item>
          <b-nav-item href="#" @click="onClearClicked"><BIconTrash /> {{ $t('menuClear') }}</b-nav-item>
          <b-nav-item href="#" @click="print"><BIconPrinter /> {{ $t('menuPrint') }}</b-nav-item>
          <b-nav-item :to="{ name: 'about' }"><BIconInfoCircle /> {{ $t('menuAbout') }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { VuePlausible } from 'vue-plausible'
import EventBus from '@/plugins/event-bus.js'
import { mapGetters } from 'vuex'
import { loadLanguageAsync } from '@/plugins/i18n'
import { BIconFolderPlus, BIconTrash, BIconPrinter, BIconInfoCircle, BIconFlag } from 'bootstrap-vue'
import { Detector } from '@/plugins/browser-detect.js'

export default {
  components: {
    BIconFolderPlus,
    BIconTrash,
    BIconPrinter,
    BIconInfoCircle,
    BIconFlag
  },
  data: function () {
    return {
      languages: [{
        locale: 'en_GB',
        name: 'British English',
        icon: '🇬🇧'
      }, {
        locale: 'de_DE',
        name: 'Deutsch - Deutschland',
        icon: '🇩🇪'
      }]
    }
  },
  computed: {
    /** Mapgetters exposing the store configuration */
    ...mapGetters([
      'storeLocale',
      'storePlausibleApiHost',
      'storePlausibleDomain',
      'storeUniqueClientId',
      'storeDnDDisabled',
      'storeRunCount'
    ])
  },
  methods: {
    isLocalhost: function () {
      return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === ''
    },
    /**
     * When the locale is changed, update the i18n settings
     * @param language The newly selected locale
     */
    onLocaleChanged: function (language) {
      loadLanguageAsync(language.locale).then(() => {
        this.$i18n.locale = language.locale
        this.$store.dispatch('setLocale', language.locale)
      })
    },
    onImportClicked: function () {
      EventBus.emit('show-import')
    },
    onClearClicked: function () {
      EventBus.emit('clear-barcodes')
    },
    print: function () {
      window.print()
    }
  },
  mounted: function () {
    loadLanguageAsync(this.storeLocale)

    // Log the run
    if (!this.isLocalhost()) {
      let id = this.storeUniqueClientId
      if (!id) {
        id = this.uuidv4()

        this.$store.dispatch('setUniqueClientId', id)
      }

      const config = new Detector().detect()
      if (config.os !== undefined && config.os !== null && config.os !== 'Search Bot') {
        const data = {
          application: 'Humbug',
          runCount: this.storeRunCount + 1,
          id: id,
          version: `${this.humbugVersion}`,
          locale: this.storeLocale,
          os: `${config.os} ${config.osVersion}`
        }

        const url = new URL('https://ics.hutton.ac.uk/app-logger/log')
        url.search = new URLSearchParams(data).toString()

        fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(() => {
            // If the call succeeds, reset the run count
            this.$store.dispatch('setRunCount', 0)
          })
          .catch(e => {
            console.error(e)
            // If this call fails (e.g. no internet), remember the run
            this.$store.dispatch('setRunCount', this.storeRunCount + 1)
          })
      }
    }

    Vue.use(VuePlausible, {
      domain: this.storePlausibleDomain,
      hashMode: true,
      apiHost: this.storePlausibleApiHost,
      trackLocalhost: false
    })

    this.$nextTick(() => {
      this.$plausible.enableAutoPageviews()
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/light-mode.scss';
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';
// @import '~bootswatch/dist/sandstone/bootswatch';

@import './assets/css/dark-mode';

.navbar-logo {
  width: 30px;
  height: 30px;
}

.print {
  display: none !important;
}

@media print {
  .no-print {
    display: none !important;
  }
  .print {
    display: initial !important;
  }
  .row, .card {
    break-inside: avoid;
  }
  .card {
    border: 0;
  }
}
</style>
