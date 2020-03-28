import * as types from './mutation-types';

export default {
  [types.UPDATE_FOO](state, payload) {
    state.foo = payload;
  },

  [types.REQUEST_ADD_MENU](state, menu) {
    if (Array.isArray(state.menus) && state.menus.length) {
      state.menus.push(menu)
    } else {
      state.menus = [menu];
    }
  },
};
