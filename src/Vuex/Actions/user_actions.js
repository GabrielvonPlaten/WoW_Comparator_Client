import * as types from '../mutation-types';

export const userLogin = ({ commit }, payload) => {
  commit(types.USER_LOGIN, payload);
};

export const userLogout = ({ commit }) => {
  commit(types.USER_LOGOUT, false);
};
