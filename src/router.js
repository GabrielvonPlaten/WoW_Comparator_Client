import Vue from 'vue';
import Router from 'vue-router';
import store from '@/Vuex/store';

import Home from './views/Home.vue'
import Compare from './views/Compare.vue'
import Post from './views/Post/Post.vue';

import Talents from './views/Compare/Talents.vue';
import Mounts from './views/Compare/Mounts.vue';
import Stats from './views/Compare/Stats.vue';
import Raids from './views/Compare/Raids.vue';
import Mythics from './views/Compare/Mythics.vue';
import Gear from './views/Compare/Gear.vue';
import Pets from './views/Compare/Pets.vue';

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
      path: '/post/:id/:slug',
      name: 'post',
      component: Post,
    },
    {
      path: '/compare',
      name: 'compare',
      component: Compare,
      children: [
        {
          path: '/compare/Talents',
          name: 'talents',
          component: Talents
        },
        {
          path: '/compare/mounts',
          name: 'mounts',
          component: Mounts
        },
        {
          path: '/compare/stats',
          name: 'stats',
          component: Stats
        },
        {
          path: '/compare/raids',
          name: 'raids',
          component: Raids
        },
        {
          path: '/compare/mythics',
          name: 'mythics',
          component: Mythics
        },
        {
          path: '/compare/gear',
          name: 'gear',
          component: Gear
        },
        {
          path: '/compare/pets',
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
    if (store.state.adminData === false) {
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
