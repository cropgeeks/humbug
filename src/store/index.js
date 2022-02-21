import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import EventBus from '@/plugins/event-bus.js'

Vue.use(Vuex)

let name = process.env.VUE_APP_INSTANCE_NAME

if (!name) {
  name = 'humbug-' + window.location.pathname
}

export default new Vuex.Store({
  state: {
    maxImageHeight: 300,
    barcodeColumns: 3,
    barcodeHeight: 50,
    barcodeWidth: 2,
    defaultBarcodeType: 'CODE128',
    barcodes: [],
    locale: 'en_GB',
    plausibleApiHost: 'https://plausible.hutton.ac.uk',
    plausibleDomain: 'cropgeeks.github.io/humbug'
  },
  getters: {
    storeMaxImageHeight: (state) => state.maxImageHeight,
    storeBarcodeHeight: (state) => state.barcodeHeight,
    storeBarcodeWidth: (state) => state.barcodeWidth,
    storeBarcodeColumns: (state) => state.barcodeColumns,
    storeDefaultBarcodeType: (state) => state.defaultBarcodeType,
    storeBarcodes: (state) => state.barcodes,
    storeLocale: (state) => state.locale,
    storePlausibleApiHost: (state) => state.plausibleApiHost,
    storePlausibleDomain: (state) => state.plausibleDomain
  },
  mutations: {
    ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION: function (state, newMaxImageHeight) {
      state.maxImageHeight = newMaxImageHeight
    },
    ON_BARCODE_COLUMNS_CHANGED_MUTATION: function (state, newBarcodeColumns) {
      state.barcodeColumns = newBarcodeColumns
    },
    ON_BARCODE_HEIGHT_CHANGED_MUTATION: function (state, newBarcodeHeight) {
      state.barcodeHeight = newBarcodeHeight
    },
    ON_BARCODE_WIDTH_CHANGED_MUTATION: function (state, newBarcodeWidth) {
      state.barcodeWidth = newBarcodeWidth
    },
    ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION: function (state, newDefaultBarcodeType) {
      state.defaultBarcodeType = newDefaultBarcodeType
    },
    ON_BARCODES_CHANGED_MUTATION: function (state, newBarcodes) {
      state.barcodes = newBarcodes
    },
    ON_BARCODES_ADDED_MUTATION: function (state, newBarcodes) {
      state.barcodes = state.barcodes.concat(newBarcodes)
    },
    ON_BARCODE_DELETED_MUTATION: function (state, index) {
      state.barcodes.splice(index, 1)
    },
    ON_BARCODE_UPDATED_MUTATION: function (state, update) {
      Vue.set(state.barcodes, update.index, update.value)

      EventBus.emit('barcode-updated', update.index)
    },
    ON_LOCALE_CHANGED_MUTATION: function (state, newLocale) {
      state.locale = newLocale
    }
  },
  actions: {
    setMaxImageHeight: function ({ commit }, maxImageHeight) {
      commit('ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION', maxImageHeight)
    },
    setBarcodeColumns: function ({ commit }, barcodeColumns) {
      commit('ON_BARCODE_COLUMNS_CHANGED_MUTATION', barcodeColumns)
    },
    setBarcodeHeight: function ({ commit }, barcodeHeight) {
      commit('ON_BARCODE_HEIGHT_CHANGED_MUTATION', barcodeHeight)
    },
    setBarcodeWidth: function ({ commit }, barcodeWidth) {
      commit('ON_BARCODE_WIDTH_CHANGED_MUTATION', barcodeWidth)
    },
    setDefaultBarcodeType: function ({ commit }, defaultBarcodeType) {
      commit('ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION', defaultBarcodeType)
    },
    setBarcodes: function ({ commit }, barcodes) {
      commit('ON_BARCODES_CHANGED_MUTATION', barcodes)
    },
    addBarcodes: function ({ commit }, barcodes) {
      commit('ON_BARCODES_ADDED_MUTATION', barcodes)
    },
    deleteBarcode: function ({ commit }, index) {
      commit('ON_BARCODE_DELETED_MUTATION', index)
    },
    updateBarcode: function ({ commit }, update) {
      commit('ON_BARCODE_UPDATED_MUTATION', update)
    },
    setLocale: function ({ commit }, locale) {
      commit('ON_LOCALE_CHANGED_MUTATION', locale)
    }
  },
  plugins: [createPersistedState({
    key: name,
    reducer: (state) => {
      let result = {}
      try {
        result = JSON.parse(JSON.stringify(state))
      } catch {
        return state
      }

      if (result.barcodes) {
        result.barcodes.forEach(b => {
          delete b.image
        })
      }

      return result
    }
  })]
})
