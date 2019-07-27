import * as types from '../mutation-types';

export const playerTwoMutations = {
  // PLAYER TWO
  [types.PLAYERTWO_STATS](state, data) {
    state.playerTwoStats = data;
  },

  [types.PLAYERTWO_MOUNTS](state, data) {
    state.playerTwoMounts = data;
  },

  [types.PLAYERTWO_PETS](state, data) {
    state.playerTwoPets = data;
  },

  [types.PLAYERTWO_GEAR](state, data) {
    state.playerTwoGear = data;
  },

  [types.PLAYERTWO_PROG](state, data) {
    state.playerTwoProg = data;
  },

  [types.PLAYERTWO_TALENTS](state, data) {
    state.playerTwoTalents = data;
  },

  [types.PLAYERTWO_REGION](state, data) {
    state.playerTwoRegion = data;
  },

  [types.PLAYERTWO_MYTHICS](state, data) {
    state.playerTwoMythics = data.best_runs;
  },

  [types.PLAYERTWO_MYTHIC_SCORE](state, data) {
    state.playerTwoMythicScore = data;
  },

  [types.PLAYERTWO_NO_MYTHICS](state, data) {
    state.playerTwoMythicError = data;
  },

  [types.PLAYERTWO_ERROR](state, err) {
    state.playerTwoError.message = err.errData;
    state.playerTwoError.color = err.errColor;
  }
};
