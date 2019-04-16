import Vue from 'vue';
import Router from 'vue-router';
import store from '@/Vuex/store';

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
import AdminLogin from './views/Admin/Login.vue';
import Dashboard from './views/Admin/Dashboard.vue';


Vue.use(Router)

const router = new Router({
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
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLogin,
      meta: {
        requiresGuest: true,
      }
    },
  ]
});

// Nav Guards
router.beforeEach((to, from, next) => {
  // Check for required Auth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is NOT logged in
    if (!store.state.adminData) {
      // Go to login page
      next({
        path: '/admin/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to the dashboard
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if (store.state.adminData) {
      // Go to login page
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to the dashboard
      next();
    }
  } else {
    // Proceed to the route
    next();
  }
});

export default router;
