import Vue from 'vue';
import VueRouter from 'vue-router';

import logoView from '../views/logoView.vue';
import workView from '../views/workView.vue';
// import createWorkView from '../views/createWorkView.js';

import aboutView from '../views/aboutView.vue';
import contactView from '../views/contactView.vue';

// import { store } from '../store/store.js';


// import u from '../utils/utilMethod.js';

Vue.use(VueRouter);


export const router = new VueRouter({

  mode: 'history',

  routes: [

    {
      path: '/',
      component: logoView,
    },
    {
      path: '/about',
      component: aboutView,
    },
    {
      path: '/contact',
      component: contactView,
    },
    {
      path: '/work/:name',
      component: workView,

    },

    // {
    //   path: '/post/:id',
    //   component: postView,
    // },

  ],

});
