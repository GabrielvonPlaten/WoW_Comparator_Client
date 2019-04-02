import * as types from '../mutation-types';

export const playerOneMutations = {
  // PLAYER ONE
  [types.PLAYERONE_STATS] (state, data) {
    state.playerOneStats = data;
  },
  
  [types.PLAYERONE_MOUNTS] (state, data) {
    state.playerOneMounts = data;
  },
  
  [types.PLAYERONE_PETS] (state, data) {
    state.playerOnePets = data;
  },
  
  [types.PLAYERONE_GEAR] (state, data) {
    state.playerOneGear = data;
  },

  [types.PLAYERONE_PROG] (state, data) {
    state.playerOneProg = data;
  },

  [types.PLAYERONE_TALENTS] (state, data) {
    state.playerOneTalents = data;
  },

  [types.PLAYERONE_REGION] (state, data) {
    state.playerOneRegion = data;
  },

  [types.PLAYERONE_MYTHICS] (state, data) {
    state.playerOneMythics = data.best_runs
  },

  [types.PLAYERONE_ERROR] (state, err) {
    state.playerOneError.message = err.errData;
    state.playerOneError.color = err.errColor;
  },
};