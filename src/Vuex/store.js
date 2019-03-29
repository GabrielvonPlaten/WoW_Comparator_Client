import Vue from 'vue'
import Vuex from 'vuex'
import * as playerOneActions from './Actions/playerOne_actions';
import * as playerTwoActions from './Actions/playerTwo_actions';
import { playerOneMutations } from './Mutations/playerOne_mutations';
import { playerTwoMutations } from './Mutations/playerTwo_mutations';

const actions = {...actions, ...playerOneActions, ...playerTwoActions};
const mutations = {...mutations, ...playerOneMutations, ...playerTwoMutations};
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

  mutations,
  actions,
  getters: {
    getGearOne: state => {
      let obj = {...obj, ...state.playerOneGear.items};

      delete obj["averageItemLevel"]; // App crashes if this is allowed through
      delete obj["averageItemLevelEquipped"]; // App crashes if this is allowed through
      delete obj["shirt"]; // Not needed
      delete obj["tabard"]; // Not needed
      // The first two items are also not needed for the app

      return obj
    },

    getGearTwo: state => {
      let obj = {...obj, ...state.playerTwoGear.items}

      delete obj["averageItemLevel"];
      delete obj["averageItemLevelEquipped"];
      delete obj["shirt"];
      delete obj["tabard"];

      return obj
    }
  }
})
