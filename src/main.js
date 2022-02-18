import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import mixin from '@/mixin/mixin.js'
import { i18n } from '@/plugins/i18n.js'

import {
  LayoutPlugin,
  ModalPlugin,
  DropdownPlugin,
  BVModalPlugin,
  NavbarPlugin,
  ImagePlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  FormGroupPlugin,
  FormFilePlugin,
  FormSelectPlugin,
  CardPlugin,
  FormTextareaPlugin,
  InputGroupPlugin,
  TooltipPlugin,
  SpinnerPlugin
} from 'bootstrap-vue'

require('es6-promise/auto')

Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(DropdownPlugin)
Vue.use(BVModalPlugin)
Vue.use(NavbarPlugin)
Vue.use(ImagePlugin)
Vue.use(ButtonPlugin)
Vue.use(ButtonGroupPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormFilePlugin)
Vue.use(FormSelectPlugin)
Vue.use(CardPlugin)
Vue.use(InputGroupPlugin)
Vue.use(TooltipPlugin)
Vue.use(SpinnerPlugin)

Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
