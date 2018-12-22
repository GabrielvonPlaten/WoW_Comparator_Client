import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comparator from './views/Comparator.vue'
import Blog from './views/Blog.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/comparator',
      name: 'comparator',
      component: Comparator,
    }
  ]
})
