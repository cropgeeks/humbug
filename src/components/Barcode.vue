<template>
  <b-card :class="`barcode-card ${style}`" v-if="barcode" no-body ref="card">
    <img :src="image ? image : null" class="card-img" :style="imageStyle">

    <b-row>
      <b-col xs=12 class="card-actions">
        <b-button-group class="float-right flex-wrap">
          <b-btn size=sm :title="$t('buttonTitleSelectImage')" @click="selectImage"><BIconImage /></b-btn>
          <b-btn size=sm :title="$t('buttonTitleRemoveImage')" v-if="image" @click="deleteImage"><BIconXSquare /></b-btn>
          <b-btn size=sm :title="$t('buttonTitleDeleteBarcode')" @click="$emit('delete-barcode')" variant="danger"><BIconTrash /></b-btn>
        </b-button-group>
      </b-col>
    </b-row>

    <b-card-body class="d-flex flex-column">
      <div class="mt-auto">
        <template v-if="show && text">
          <div class="text-center">
            <VueQrcode class="barcode" :value="text" :options="{ scale: storeBarcodeWidth + 1 }" @click.native="onBarcodeClicked" v-if="type === 'QR'" />
            <VueBarcode :value="text"
                        :format="type"
                        :width="storeBarcodeWidth"
                        :height="storeBarcodeHeight"
                        class="barcode text-center"
                        :displayValue="false"
                        @click.native="onBarcodeClicked"
                        v-else />
            <span class="qr-label d-block">{{ text }}</span>
          </div>
        </template>
        <b-form @submit.prevent class="barcode-form" v-else>
          <b-input v-model="text" ref="barcodeText" autofocus @focus="show = false" @blur="onFocusLost($event)" v-on:keyup.enter="onFocusLost($event)" v-b-tooltip.focus :title="$t('tooltipBarcodeEnter')"/>
          <b-form-select :options="barcodeTypes" v-model="type" @change="forceFocus()"/>
        </b-form>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import VueBarcode from 'vue-barcode'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { BIconImage, BIconTrash, BIconXSquare } from 'bootstrap-vue'

import Compressor from 'compressorjs'

export default {
  components: {
    BIconImage,
    BIconTrash,
    BIconXSquare,
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
      barcode: null,
      show: false,
      text: null,
      type: 'CODE128',
      image: null
    }
  },
  watch: {
    index: function () {
      this.updateBarcode()
    },
    type: function () {
      this.storeUpdate()
    },
    image: function () {
      this.storeUpdate()
    }
  },
  computed: {
    ...mapGetters([
      'storeBarcodes',
      'storeBarcodeHeight',
      'storeBarcodeWidth',
      'storeMaxImageHeight'
    ]),
    style: function () {
      return ''
    },
    imageStyle: function () {
      return this.storeMaxImageHeight ? `max-height: ${this.storeMaxImageHeight}px` : null
    }
  },
  methods: {
    updateBarcode: function () {
      if (this.storeBarcodes && this.storeBarcodes.length > this.index) {
        this.barcode = this.storeBarcodes[this.index]
      } else {
        this.barcode = null
      }

      if (this.barcode && this.barcode.text) {
        this.show = true
        this.text = this.barcode.text
        this.type = this.barcode.type
        this.image = this.barcode.image
      }
    },
    onFocusLost: function (event) {
      this.storeUpdate()
      if (!event.relatedTarget || event.relatedTarget.parentNode !== event.target.parentNode) {
        this.show = true
      }
    },
    onBarcodeClicked: function () {
      this.show = false
      this.$nextTick(() => this.forceFocus())
    },
    forceFocus: function () {
      var ref = this.$refs.barcodeText
      ref.focus()
      if (ref.value) {
        ref.setSelectionRange(0, ref.value.length)
      }
    },
    deleteImage: function () {
      this.image = null
    },
    storeUpdate: function () {
      this.$store.dispatch('updateBarcode', {
        index: this.index,
        value: {
          text: this.text,
          type: this.type,
          uuid: this.barcode.uuid,
          image: this.image
        }
      })
    },
    selectImage: function () {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'

      input.onchange = e => {
        const file = e.target.files[0]

        /* eslint-disable no-new */
        new Compressor(file, {
          quality: 0.6,
          maxWidth: 600,
          maxHeight: 600,

          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.
          success: result => {
            const reader = new FileReader()
            reader.onload = () => {
              this.image = reader.result
              input.remove()
            }
            reader.readAsDataURL(result)
          },
          error: () => {
            this.image = null
          }
        })
      }

      input.click()
    }
  },
  mounted: function () {
    this.updateBarcode()
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
}
.barcode-form *:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.barcode-form *:last-child {
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
