import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comparator from './views/Comparator.vue'
import Blog from './views/Blog.vue';

import Feed from './views/Comparator/Feed.vue';
import Mounts from './views/Comparator/Mounts.vue';
import Stats from './views/Comparator/Stats.vue';
import Progress from './views/Comparator/Progress.vue';
import Gear from './views/Comparator/Gear.vue';
import Pets from './views/Comparator/Pets.vue';


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
      children: [
        {
          path: '/comparator/feed',
          name: 'feed',
          component: Feed
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
          path: '/comparator/progress',
          name: 'progress',
          component: Progress
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
    }
  ]
})
