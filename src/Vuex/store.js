import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerOneStats: null,
    playerOneMounts: null,
    playerOnePets: null,
    playerOneGear: null,
    playerOneProg: null,
    playerOneFeed: null,
    playerOneError: {
      message: "",
      color: "",
    },

    playerTwoStats: null,
    playerTwoMounts: null,
    playerTwoPets: null,
    playerTwoGear: null,
    playerTwoProg: null,
    playerTwoFeed: null,
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
      state.playerOneLoading = false;
    },

    PLAYERONE_PROG(state, data) {
      state.playerOneProg = data;
    },

    PLAYERONE_FEED(state, data) {
      state.playerOneFeed = data;
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
      state.playerTwoLoading = false;
    },

    PLAYERTWO_PROG(state, data) {
      state.playerTwoProg = data;
    },

    PLAYERTWO_FEED(state, data) {
      state.playerTwoFeed = data;
    },

    PLAYERTWO_ERROR(state, err) {
      state.playerTwoError.message = err.errData;
      state.playerTwoError.color = err.errColor;
    },
  },

  actions: {
    playerOneData(context, info) {
      context.commit('PLAYERONE_ERROR', "", "");

      // Stats
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERONE_STATS', res.data);

          // Get pets
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERONE_PETS', res.data);
          
          // Get Mounts
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERONE_MOUNTS', res.data);

          // Items
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERONE_GEAR', res.data);

          // Progression
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERONE_PROG', res.data)

          // Feed
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=feed&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERONE_FEED', res.data);
        })
        // Error
        .catch(err => context.commit('PLAYERONE_ERROR', {errData: "Character not found", errColor: "red"} ))
    },

    playerTwoData(context, info) {
      context.commit('PLAYERTWO_ERROR', "", "");

      // Stats
      axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
        .then(res => {
          context.commit('PLAYERTWO_STATS', res.data);

          // Get pets
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERTWO_PETS', res.data);
          
          // Get Mounts
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERTWO_MOUNTS', res.data);

          // Items
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERTWO_GEAR', res.data);

          // Progression
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERTWO_PROG', res.data)

          // Feed
          return axios.get(`https://eu.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=feed&locale=en_EU&access_token=${info.token}`)
        })
        .then(res => {
          context.commit('PLAYERTWO_FEED', res.data);
        })
        // Error
        .catch(err => context.commit('PLAYERTWO_ERROR', {errData: "Character not found", errColor: "red"} ))
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
