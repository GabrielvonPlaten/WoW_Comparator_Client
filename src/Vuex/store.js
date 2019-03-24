import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import * as playerOneActions from './playerOne_actions';
import * as playerTwoActions from './playerTwo_actions';

const actions = Object.assign({}, playerOneActions, playerTwoActions)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Each state is initially set to null so that it returns false for the
    // components and so no errors are outputed.
    // This happens only on the first visit to the website.
    // Then, when the user makes a search, every null will be replaced by false.
    // Then the loading spinners will appear because each spinner have tripple equals for false.
    // Then each false will be replaced by the fetched data. Making them no longer
    // false and therefore the spinners will dissappear.
    playerOneStats: null,
    playerOneMounts: null,
    playerOnePets: null,
    playerOneGear: null,
    playerOneProg: null,
    playerOneTalents: null,
    playerOneRegion: null,
    playerOneError: {
      message: "",
      color: "",
    },

    playerTwoStats: null,
    playerTwoMounts: null,
    playerTwoPets: null,
    playerTwoGear: null,
    playerTwoProg: null,
    playerTwoTalents: null,
    playerTwoRegion: null,
    playerTwoError: {
      message: "",
      color: "",
    },
  },

  mutations: {
    PLAYERONE_STATS(state, data) {
      state.playerOneStats = data;
    },
    
    PLAYERONE_MOUNTS(state, data) {
      state.playerOneMounts = data;
    },
    
    PLAYERONE_PETS(state, data) {
      state.playerOnePets = data;
    },
    
    PLAYERONE_GEAR(state, data) {
      state.playerOneGear = data;
    },

    PLAYERONE_PROG(state, data) {
      state.playerOneProg = data;
    },

    PLAYERONE_TALENTS(state, data) {
      state.playerOneTalents = data;
    },

    PLAYERONE_REGION(state, data) {
      state.playerOneRegion = data;
    },

    PLAYERONE_ERROR(state, err) {
      state.playerOneError.message = err.errData;
      state.playerOneError.color = err.errColor;
    },

    // PLAYER TWO
    PLAYERTWO_STATS(state, data) {
      state.playerTwoStats = data;
    },
    
    PLAYERTWO_MOUNTS(state, data) {
      state.playerTwoMounts = data;
    },
    
    PLAYERTWO_PETS(state, data) {
      state.playerTwoPets = data;
    },
    
    PLAYERTWO_GEAR(state, data) {
      state.playerTwoGear = data;
    },

    PLAYERTWO_PROG(state, data) {
      state.playerTwoProg = data;
    },

    PLAYERTWO_TALENTS(state, data) {
      state.playerTwoTalents = data;
    },

    PLAYERTWO_REGION(state, data) {
      state.playerTwoRegion = data;
    },

    PLAYERTWO_ERROR(state, err) {
      state.playerTwoError.message = err.errData;
      state.playerTwoError.color = err.errColor;
    },
  },

  actions,
  
  getters: {
    
  }
})
