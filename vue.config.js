module.exports = {
  publicPath: '/vuetify-test/',
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'public/service-worker.js'
      // ...other Workbox options...
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}