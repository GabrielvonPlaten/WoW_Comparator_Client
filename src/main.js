import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Vuex/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faHome, faCogs, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faHome, faCogs, faStar);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import adminService from '@/apis/adminService';

let app;
if (localStorage.getItem('token')) {
  adminService.adminProfile(localStorage.getItem('token'))
    .then(async res => {
      await store.dispatch('adminLogin', res)
      if (!app) {
        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
      }
    })
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
