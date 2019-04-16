import * as types from '../mutation-types';

export const adminLogin = ({ commit }, adminData) => {
  commit(types.ADMIN_LOGIN, adminData);
};