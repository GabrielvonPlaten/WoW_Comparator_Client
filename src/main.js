import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Vuex/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faHome, faCogs);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
