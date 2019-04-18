import * as types from '../mutation-types';

export const adminMutations = {
  [types.ADMIN_LOGIN] (state, data) {
    state.adminData = data;
  },

  [types.ADMIN_LOGOUT] (state, data) {
    state.adminData = data;
  }
};