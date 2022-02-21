<template>
  <b-container class="mt-3">
    <div class="settings">
      <b-row>
        <b-col cols=12 sm=3>
          <b-form-group :label="$t('formLabelNumberColumns')" label-for="column-number">
            <b-form-input type="number" :min="1" :max="4" v-model.number="barcodeColumns" id="column-number" />
          </b-form-group>
        </b-col>
        <b-col cols=12 sm=3>
          <b-form-group :label="$t('formLabelBarcodeWidth')" label-for="barcode-width">
            <b-form-input type="number" :min="1" :max="5" v-model.number="barcodeWidth" id="barcode-width" />
          </b-form-group>
        </b-col>
        <b-col cols=12 sm=3>
          <b-form-group :label="$t('formLabelBarcodeHeight')" label-for="barcode-height">
            <b-form-input type="number" :min="50" :max="100" v-model.number="barcodeHeight" id="barcode-height" />
          </b-form-group>
        </b-col>
        <b-col cols=12 sm=3>
          <b-form-group :label="$t('formLabelBarcodeDefaultType')" label-for="barcode-type">
            <b-form-select :options="barcodeTypes" v-model="barcodeType" id="barcode-type" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols=12 sm=3>
          <b-form-group :label="$t('formLabelImageMaxHeight')" label-for="image-height">
            <b-form-input type="number" :min="100" :max="800" v-model.number="imageHeight" id="image-height" />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <div class="print">
      <b-row v-for="i in Math.ceil(barcodeList.length / barcodeColumns)" :key="`row-${i}`" class="print-row">
        <b-col v-for="(barcode, index) in getBarcodeChunk(i - 1)" :key="`barcode-static-${barcode.uuid}`" :cols="12 / barcodeColumns" class="mb-4">
          <PrintBarcode :index="(i - 1) * barcodeColumns + index" />
        </b-col>
      </b-row>
    </div>
    <draggable v-model="barcodeList" tag="b-row" class="no-print">
      <b-col :cols="12 / storeBarcodeColumns" v-for="(barcode, index) in barcodeList" :key="`barcode-${barcode.uuid}`" class="mb-4 barcode-cell">
        <Barcode :index="index" @delete-barcode="deleteBarcode(index)" />
      </b-col>
    </draggable>
    <b-row class="no-print">
      <b-col :cols="12 / storeBarcodeColumns" class="mb-4">
        <b-card class="h-100 add-barcode" no-body>
          <b-card-body class="d-flex align-items-center justify-content-center">
            <h1><BIconPlusCircle /></h1>
            <a href="#" @click.prevent="addBarcode" class="stretched-link"></a>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <ImportModal @clipboard-loaded="addBarcodes" ref="importModal" />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Barcode from '@/components/Barcode'
import PrintBarcode from '@/components/PrintBarcode'
import ImportModal from '@/components/modals/ImportModal'
import draggable from 'vuedraggable'
import { BIconPlusCircle } from 'bootstrap-vue'
import EventBus from '@/plugins/event-bus.js'

export default {
  name: 'Home',
  components: {
    draggable,
    Barcode,
    BIconPlusCircle,
    ImportModal,
    PrintBarcode
  },
  computed: {
    ...mapGetters([
      'storeBarcodes',
      'storeMaxImageHeight',
      'storeBarcodeHeight',
      'storeBarcodeWidth',
      'storeBarcodeColumns',
      'storeDefaultBarcodeType'
    ]),
    barcodeList: {
      get () {
        return this.storeBarcodes
      },
      set (value) {
        this.$store.commit('ON_BARCODES_CHANGED_MUTATION', value)
      }
    }
  },
  watch: {
    barcodeHeight: function (newValue) {
      this.$store.dispatch('setBarcodeHeight', newValue)
    },
    barcodeWidth: function (newValue) {
      this.$store.dispatch('setBarcodeWidth', newValue)
    },
    barcodeColumns: function (newValue) {
      this.$store.dispatch('setBarcodeColumns', newValue)
    },
    barcodeType: function (newValue) {
      this.$store.dispatch('setDefaultBarcodeType', newValue)
    },
    imageHeight: function (newValue) {
      this.$store.dispatch('setMaxImageHeight', newValue)
    }
  },
  data: function () {
    return {
      barcodeHeight: null,
      barcodeWidth: null,
      barcodeColumns: null,
      barcodeType: null,
      imageHeight: null
    }
  },
  methods: {
    getBarcodeChunk: function (index) {
      return this.barcodeList.slice(index * this.barcodeColumns, (index + 1) * this.barcodeColumns)
    },
    addBarcode: function () {
      this.$store.dispatch('addBarcodes', [{ text: null, type: this.storeDefaultBarcodeType, uuid: this.uuidv4() }])
    },
    addBarcodes: function (newBarcodes) {
      this.$store.dispatch('addBarcodes', newBarcodes.map(b => {
        return {
          text: b,
          type: this.storeDefaultBarcodeType,
          uuid: this.uuidv4()
        }
      }))
    },
    deleteBarcode: function (index) {
      this.$store.dispatch('deleteBarcode', index)
    },
    showImportModal: function () {
      this.$refs.importModal.show()
    },
    clearBarcodes: function () {
      this.$bvModal.msgBoxConfirm(this.$t('modalTextClearBarcodes'), {
          title: this.$t('modalTitleClearBarcodes'),
          okTitle: this.$t('buttonYes'),
          okVariant: 'danger',
          cancelTitle: this.$t('buttonNo')
        })
          .then(value => {
            if (value) {
              this.$store.dispatch('setBarcodes', [])
            }
          })
    }
  },
  created: function () {
    this.barcodeHeight = this.storeBarcodeHeight
    this.barcodeWidth = this.storeBarcodeWidth
    this.barcodeColumns = this.storeBarcodeColumns
    this.barcodeType = this.storeDefaultBarcodeType
    this.imageHeight = this.storeMaxImageHeight

    EventBus.on('show-import', this.showImportModal)
    EventBus.on('clear-barcodes', this.clearBarcodes)
  },
  beforeDestroy: function () {
    EventBus.off('show-import', this.showImportModal)
    EventBus.off('clear-barcodes', this.clearBarcodes)
  }
}
</script>

<style scoped>
.add-barcode:hover {
  border: 1px solid #007bff;
}
</style>
<style>
@media print {
  .settings,
  button {
    display: none !important;
  }
}
</style>
