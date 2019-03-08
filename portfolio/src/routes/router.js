import Vue from 'vue';
import VueRouter from 'vue-router';

import contentView from '../views/contentView.vue';
import logoView from '../views/logoView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({

  mode: 'history',

  routes: [

    {
      path: '/',
      redirect: '/logo',
    },
    {
      path: '/logo',
      component: logoView,
    },
    {
      path: '/work/:name',
      component: contentView,
    },

  ],

});
