<template>
  <b-modal :title="$t('modalTitleImportClipboard')"
           :ok-title="$t('buttonOk')"
           :cancel-title="$t('buttonCancel')"
           @ok.prevent="onSubmit"
           ref="importModal">
    <b-textarea v-model="clipboard" />
  </b-modal>
</template>

<script>
export default {
  data: function () {
    return {
      clipboard: null
    }
  },
  methods: {
    show: function () {
      this.clipboard = null
      this.$nextTick(() => this.$refs.importModal.show())
    },
    hide: function () {
      this.$nextTick(() => this.$refs.importModal.hide())
    },
    onSubmit: function () {
      if (this.clipboard) {
        const barcodes = this.clipboard.split('\n').map(r => r.trim()).filter(r => r !== null && r.length > 0)

        this.$emit('clipboard-loaded', barcodes)

        this.hide()
      }
    }
  }
}
</script>

<style>

</style>
