import * as types from './mutation-types';

export default {
  [types.UPDATE_FOO](state, payload) {
    state.foo = payload;
  },

  [types.REQUEST_ADD](state, item) {
    if (Array.isArray(state.items) && state.items.length) {
      state.items.push(item)
    } else {
      state.items = [item];
    }
  },
};
