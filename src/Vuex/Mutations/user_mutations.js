import * as types from '../mutation-types';

export const userMutations = {
  [types.USER_LOGIN](state, data) {
    state.userData = data;
  },

  [types.USER_LOGOUT](state, data) {
    state.userData = data;
  }
};
