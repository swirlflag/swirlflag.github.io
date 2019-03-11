import Vue from 'vue';
import Vuex from 'vuex';

import appStates from './states/appStates.js';
import navStates from './states/navStates.js';

import appGetters from './getters/appGetters.js';
import navGetters from './getters/navGetters.js';

import appMethods from './mutations/appMethods.js'
import appMutations from './mutations/appMutations.js'
import navMutations from './mutations/navMutations.js';

import appActions from './actions/appActions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    ...appStates,
    ...navStates,
  },
  getters : {
    ...appGetters,
    ...navGetters,
  },
  mutations: {
    ...appMethods,
    ...appMutations, 
    ...navMutations,
  },
  actions : {
    ...appActions,
  },
});