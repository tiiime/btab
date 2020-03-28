import * as types from './mutation-types';

export const setFoo = ({ commit }, payload) => {
  commit(types.UPDATE_FOO, payload);
};

export const addMenu = ({ commit }, payload) => {
  commit(types.REQUEST_ADD_MENU, payload)
};
