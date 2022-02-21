<template>
  <b-container class="mt-3">
    <h1>{{ $t('pageTitleImport') }}</h1>
    <h4>{{ $t('pageHeadingBarcodeType') }}</h4>
    <b-form-select :options="barcodeTypes" v-model="barcodeType" />
    <h4>{{ $t('pageHeadingBarcodes') }}</h4>
    <b-form-textarea v-model="barcodeString" :rows="barcodes.length" debounce="500" />

    <p>{{ $t('pageTextImport') }}</p>
    <b-button @click="addBarcodes"><BIconJournalPlus /> {{ $t('buttonAdd') }}</b-button> <b-button @click="replaceBarcodes"><BIconJournalX /> {{ $t('buttonReplace') }} </b-button>
  </b-container>
</template>

<script>
import { BIconJournalPlus, BIconJournalX } from 'bootstrap-vue'

export default {
  components: {
    BIconJournalPlus,
    BIconJournalX
  },
  data: function () {
    return {
      barcodes: [],
      barcodeType: 'CODE128',
      barcodeString: null
    }
  },
  watch: {
    barcodeString: function (newValue) {
      this.barcodes = newValue.split('\n').map(s => s.trim()).filter(s => s !== null && s !== '')
    }
  },
  methods: {
    addBarcodes: function () {
      this.$store.dispatch('addBarcodes', this.barcodes.map(b => {
        return {
          text: b,
          type: this.barcodeType,
          uuid: this.uuidv4()
        }
      }))

      this.$router.push({ name: 'home' })
    },
    replaceBarcodes: function () {
      this.$store.dispatch('setBarcodes', this.barcodes.map(b => {
        return {
          text: b,
          type: this.barcodeType,
          uuid: this.uuidv4()
        }
      }))

      this.$router.push({ name: 'home' })
    }
  },
  mounted: function () {
    if (this.$route.query.barcodeType) {
      const type = this.$route.query.barcodeType.trim()

      if (this.barcodeTypes.includes(type)) {
        this.barcodeType = type
      }
    }
    if (this.$route.query.barcodes) {
      if (typeof this.$route.query.barcodes === 'string') {
        this.barcodeString = this.$route.query.barcodes.split(',').map(s => s.trim()).filter(s => s !== null && s !== '').join('\n')
      } else if (Array.isArray(this.$route.query.barcodes)) {
        this.barcodeString = this.$route.query.barcodes.join('\n')
      }
    }
  }
}
</script>

<style>

</style>
