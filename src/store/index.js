import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'bar',
    menus: [
      { "id": 1, "name": "name 1" },
      { "id": 2, "name": "name 2" },
      { "id": 3, "name": "name 3" },
    ],
    content: [
      { "menuId": 1, "name": "hello", "url": "https://google.com" },
      { "menuId": 2, "name": "hello", "url": "https://google.com" }
    ]
  },
  getters,
  mutations,
  actions,
});
