import * as types from '../mutation-types';

export const adminLogin = ({ commit }, payload) => {
  commit(types.ADMIN_LOGIN, { adminData: payload });
};

export const adminLogout = ({ commit }) => {
  commit(types.ADMIN_LOGOUT, false)
}