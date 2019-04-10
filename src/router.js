import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comparator from './views/Comparator.vue'
import Post from './views/Post.vue';

import Talents from './views/Comparator/Talents.vue';
import Mounts from './views/Comparator/Mounts.vue';
import Stats from './views/Comparator/Stats.vue';
import Raids from './views/Comparator/Raids.vue';
import Mythics from './views/Comparator/Mythics.vue';
import Gear from './views/Comparator/Gear.vue';
import Pets from './views/Comparator/Pets.vue';

// Admin
import Dashboard from './views/Admin/Dashboard.vue';


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
      path: '/Post',
      name: 'post',
      component: Post,
    },
    {
      path: '/comparator',
      name: 'comparator',
      component: Comparator,
      children: [
        {
          path: '/comparator/Talents',
          name: 'talents',
          component: Talents
        },
        {
          path: '/comparator/mounts',
          name: 'mounts',
          component: Mounts
        },
        {
          path: '/comparator/stats',
          name: 'stats',
          component: Stats
        },
        {
          path: '/comparator/raids',
          name: 'raids',
          component: Raids
        },
        {
          path: '/comparator/mythics',
          name: 'mythics',
          component: Mythics
        },
        {
          path: '/comparator/gear',
          name: 'gear',
          component: Gear
        },
        {
          path: '/comparator/pets',
          name: 'pets',
          component: Pets
        },
      ]
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
