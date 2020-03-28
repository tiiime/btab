import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'bar',
    items: [
      { "id": 1, "url": "", "name":"name 1"},
      { "id": 2, "url": "", "name":"name 2"},
      { "id": 3, "url": "", "name":"name 3"},
    ],
  },
  getters,
  mutations,
  actions,
});
