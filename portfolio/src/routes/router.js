import Vue from 'vue';
import VueRouter from 'vue-router';

import logoView from '../views/logoView.vue';
import contentView from '../views/contentView.vue';

import aboutView from '../views/aboutView.vue';
import contactView from '../views/contactView.vue';

import u from '../utils/utilMethod.js';

import { checkIsPaging } from './moveView.js';

Vue.use(VueRouter);


export const router = new VueRouter({

  mode: 'history',

  routes: [

    {
      path: '/',
      component: logoView,
      beforeEnter(to,from,next){checkIsPaging(to,from,next)},
    },
    {
      path: '/about',
      component: aboutView,
      beforeEnter(to,from,next){checkIsPaging(to,from,next)},
    },
    {
      path: '/contact',
      component: contactView,
      beforeEnter(to,from,next){checkIsPaging(to,from,next)},
    },
    {
      path: '/work/:name',
      component: contentView,
      beforeEnter(to,from,next){checkIsPaging(to,from,next)},
    },

    // {
    //   path: '/post/:id',
    //   component: postView,
    // },

  ],

});
