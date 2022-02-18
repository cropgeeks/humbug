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
          <b-nav-item href="#" @click="onImportClicked"><BIconFolderPlus /> Import</b-nav-item>
          <b-nav-item href="#" @click="onClearClicked"><BIconTrash /> Clear</b-nav-item>
          <b-nav-item href="#" @click="print"><BIconDownload /> Print</b-nav-item>
          <b-nav-item :to="{ name: 'about' }"><BIconInfoCircle /> About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
import EventBus from '@/plugins/event-bus.js'
import { BIconFolderPlus, BIconTrash, BIconDownload, BIconInfoCircle } from 'bootstrap-vue'

export default {
  components: {
    BIconFolderPlus,
    BIconTrash,
    BIconDownload,
    BIconInfoCircle
  },
  methods: {
    onImportClicked: function () {
      EventBus.emit('show-import')
    },
    onClearClicked: function () {
      EventBus.emit('clear-barcodes')
    },
    print: function () {
      window.print()
    }
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
