import * as types from './mutation-types';

export default {
  [types.UPDATE_FOO](state, payload) {
    state.foo = payload;
  },

  [types.REQUEST_ADD](state, payload) {
    if (Array.isArray(items) && items.length) {
      items.push(payload)
      state.items = items
    } else {
      state.items = [payload];
    }
  },
};
