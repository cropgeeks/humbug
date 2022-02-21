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
          <b-nav-item href="#" @click="print"><BIconDownload /> {{ $t('menuPrint') }}</b-nav-item>
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
import { BIconFolderPlus, BIconTrash, BIconDownload, BIconInfoCircle, BIconFlag } from 'bootstrap-vue'

export default {
  components: {
    BIconFolderPlus,
    BIconTrash,
    BIconDownload,
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
      'storePlausibleDomain'
    ])
  },
  methods: {
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
  @page { margin: 0; }
  body { margin: 1.6cm; }

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
