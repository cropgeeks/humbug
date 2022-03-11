import { openDB } from 'idb'

let db

export default {
  getDb: async function () {
    return new Promise((resolve, reject) => {
      if (db) {
        return resolve(db)
      } else {
        openDB('humbug-' + window.location.pathname, 1, {
          upgrade: function (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) {
              const images = db.createObjectStore('images', { keyPath: 'uuid' })
              images.createIndex('uuid', 'uuid', { unique: true })
              images.createIndex('imageData', 'imageData', { unique: false })
            }
          }
        }).then(db => resolve(db))
      }
    })
  },
  getAllImages: async function () {
    const db = await this.getDb()

    return db.getAll('images')
  },
  getImage: async function (uuid) {
    const db = await this.getDb()

    return db.get('images', uuid)
  },
  setBarcodeImages: async function (barcodes) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const tx = db.transaction('images', 'readwrite')

      Promise.all(barcodes.filter(b => b.image).map(b => tx.store.put({ uuid: b.uuid, imageData: b.image })))
        .then(() => {
          resolve()
          return tx.done
        })
    })
  },
  addImage: async function (uuid, imageData) {
    const db = await this.getDb()

    return db.add('images', {
      uuid: uuid,
      imageData: imageData
    })
  },
  deleteImage: async function (uuid) {
    const db = await this.getDb()

    return db.delete('images', uuid)
  },
  clearImages: async function () {
    const db = await this.getDb()

    return db.clear('images')
  }
}
