import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store'
import vuetify from './plugins/vuetify'
import FirebaseController from './lib/firebase_controller'
import VueCompositionApi from '@vue/composition-api'

import './assets/styles/global.less'

Vue.config.productionTip = false

Vue.prototype.$firebase = new FirebaseController()

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  vuetify,
  render : h => h(App)
}).$mount('#app')
