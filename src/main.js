import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './Vuex/store';
import adminService from '@/apis/adminService';
import userService from '@/apis/userService';

Vue.config.productionTip = false;

let app;

// I'm sorry
if (!localStorage.getItem('userToken')) {
  adminService
    .adminProfile(localStorage.getItem('adminToken'))
    .then(async res => {
      await store.dispatch('adminLogin', res.data);
      if (!app) {
        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app');
      }
    })
    .catch(() => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('adminToken');
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app');
    });
} else if (localStorage.getItem('userToken')) {
  userService
    .profile(localStorage.getItem('userToken'))
    .then(async res => {
      await store.dispatch('userLogin', res.data);
      if (!app) {
        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app');
      }
    })
    .catch(() => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('adminToken');
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app');
    });
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}
