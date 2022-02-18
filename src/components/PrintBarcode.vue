<template>
  <b-card class="barcode-card" v-if="barcode" no-body ref="card">
    <img :src="barcode.image ? barcode.image : null" class="card-img" :style="imageStyle">

    <b-card-body class="d-flex flex-column">
      <div class="mt-auto">
        <div class="text-center" v-if="barcode.text">
          <VueQrcode class="barcode" :value="barcode.text" :options="{ scale: storeBarcodeWidth + 1 }" v-if="barcode.type === 'QR'" />
          <VueBarcode :value="barcode.text"
                      :format="barcode.type"
                      :width="storeBarcodeWidth"
                      :height="storeBarcodeHeight"
                      class="barcode text-center"
                      :displayValue="false"
                      v-else />
          <span class="qr-label d-block">{{ barcode.text }}</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import VueBarcode from 'vue-barcode'
import VueQrcode from '@chenfengyuan/vue-qrcode'

import EventBus from '@/plugins/event-bus.js'

export default {
  components: {
    VueBarcode,
    VueQrcode
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      barcode: null
    }
  },
  watch: {
    index: function () {
      this.updateBarcode()
    }
  },
  computed: {
    ...mapGetters([
      'storeBarcodes',
      'storeBarcodeHeight',
      'storeBarcodeWidth',
      'storeMaxImageHeight'
    ]),
    imageStyle: function () {
      return this.storeMaxImageHeight ? `max-height: ${this.storeMaxImageHeight}px` : null
    }
  },
  methods: {
    updateBarcode: function () {
      if (this.storeBarcodes && this.storeBarcodes.length > this.index) {
        // Take a copy
        const temp = JSON.parse(JSON.stringify(this.storeBarcodes[this.index]))
        // Freeze it
        Object.freeze(temp)
        this.barcode = temp
      } else {
        this.barcode = null
      }
    },
    handleUpdate: function (index) {
      if (this.index === index) {
        this.updateBarcode()
      }
    }
  },
  mounted: function () {
    this.updateBarcode()

    EventBus.on('barcode-updated', this.handleUpdate)
  },
  beforeDestroy: function () {
    EventBus.off('barcode-updated', this.handleUpdate)
  }
}
</script>

<style scoped>
.barcode-card {
  page-break-inside: avoid;
}
.card-actions .btn-group:last-child button:first-child {
  border-top-left-radius: 0;
}
.card-actions .btn-group:last-child button:last-child,
.card-actions .btn-group:first-child button:last-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.card-actions .btn-group:first-child button:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.card-img {
  object-fit: contain;
  width: 100%;
  -webkit-print-color-adjust: exact !important;   /* Chrome, Safari, Edge */
  color-adjust: exact !important;                 /*Firefox*/
}
.qr-label {
  font: 16px Segoe UI;
}
</style>

<style>
@media print {
  .barcode-card {
    break-inside: avoid;
  }
}
.barcode svg {
  max-width: 100%;
}
canvas.barcode {
  max-width: 100%;
  height: auto !important;
}
</style>
