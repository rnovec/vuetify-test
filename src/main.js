import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import MultiFormatBarcode from 'vue-multi-format-barcode'
import './registerServiceWorker'

Vue.component('MultiFormatBarcode', MultiFormatBarcode)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
