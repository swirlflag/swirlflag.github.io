import Vue from 'vue';
import Vuex from 'vuex';

import states from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {...states,},
  getters : {...getters,},
  mutations: {...mutations,},
  actions : {...actions,},
});