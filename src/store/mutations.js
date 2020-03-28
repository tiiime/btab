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
  [types.REQUEST_ADD_CONTENT](state, { index, payload }) {
    if (state.content[index]) {
      state.content[index][url] = payload.url
      state.content[index][name] = payload.name
    } else {
      state.content.splice(index, 0, payload)
    }
  },
};
