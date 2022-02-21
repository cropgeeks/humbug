export default {
  data: function () {
    return {
      humbugVersion: '1.0.0',
      barcodeTypes: [
        'CODE128', 'CODE39', 'QR'
      ]
    }
  },
  methods: {
    /**
     * Generates a v4 UUID
     */
    uuidv4: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
  }
}
