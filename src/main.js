import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Vuex/store'
import adminService from '@/apis/adminService';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faHome, faCogs, faStar, faCrown, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBook, faHome, faCogs, faStar, faCrown, faExclamationCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app;

if (localStorage.getItem('token')) {
  adminService.adminProfile(localStorage.getItem('token'))
    .then(async res => {
      await store.dispatch('adminLogin', res.data)
      if (!app) {
        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
      }
    })
    .catch(() => {
      localStorage.removeItem('token')
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    })
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
