import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

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

    PLAYERTWO_ERROR(state, err) {
      state.playerTwoError.message = err.errData;
      state.playerTwoError.color = err.errColor;
    },
  },
  
  actions: {
    playerOneData(context, info) {
      context.commit('PLAYERONE_ERROR', "", "");
      
      // Reset the states
      context.commit('PLAYERONE_STATS', false);
      context.commit('PLAYERONE_PETS', false);
      context.commit('PLAYERONE_MOUNTS', false);
      context.commit('PLAYERONE_GEAR', false);
      context.commit('PLAYERONE_PROG', false);
      context.commit('PLAYERONE_TALENTS', false);
      
      // Plyaer Stats
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
      .then(res => {
        context.commit('PLAYERONE_STATS', res.data);    
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Plyaer Pets
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_PETS', res.data); 
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Plyaer Mounts
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_MOUNTS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})
      
      // Plyaer Items
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_GEAR', res.data);
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Plyaer Progression
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_PROG', res.data)
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Plyaer OneTalents
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=talents&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_TALENTS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} )})
    },

    // Player Two Fetches
    playerTwoData(context, info) {
      context.commit('PLAYERTWO_ERROR', "", "");

      // Reset the states
      context.commit('PLAYERTWO_STATS', false);
      context.commit('PLAYERTWO_PETS', false);
      context.commit('PLAYERTWO_MOUNTS', false);
      context.commit('PLAYERTWO_GEAR', false);
      context.commit('PLAYERTWO_PROG', false);
      context.commit('PLAYERTWO_TALENTS', false);

      // Player Two Stats
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_STATS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Player Two Pets
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_PETS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})

    // Player Two Mounts
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_MOUNTS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Player Two Items
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_GEAR', res.data);
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})

      // Player Two Progression
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_PROG', res.data)
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})
      
      // Player Two Talents
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=talents&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_TALENTS', res.data);
        })
        .catch(() => {
          context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} )})
    },

    playerOneEmptyForm(context, payload) {
      context.commit('PLAYERONE_ERROR', { errData: payload.errData, errColor: payload.errColor });
    },

    playerTwoEmptyForm(context, payload) {
      context.commit('PLAYERTWO_ERROR', { errData: payload.errData, errColor: payload.errColor });
    }
  },
  getters: {
    
  }
})
