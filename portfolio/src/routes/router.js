import Vue from 'vue';
import VueRouter from 'vue-router';

import contentView from '../views/contentView.vue';
import logoView from '../views/logoView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({

  mode: 'history',

  routes: [

    // {
    //   path: '/',
    //   redirect: '/index',
    // },
    {
      path: '/logo',
      component: logoView,
    },
    {
      path: '/cont',
      component: contentView,
    },

  ],

});
