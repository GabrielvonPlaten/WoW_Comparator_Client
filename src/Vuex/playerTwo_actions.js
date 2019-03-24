import axios from 'axios';
import * as types from './mutation-types';

export const playerTwoData = ({ commit }, info) => {
  commit(types.PLAYERTWO_ERROR, "", "");

  // Reset the states
  commit(types.PLAYERTWO_STATS, false);
  commit(types.PLAYERTWO_PETS, false);
  commit(types.PLAYERTWO_MOUNTS, false);
  commit(types.PLAYERTWO_GEAR, false);
  commit(types.PLAYERTWO_PROG, false);
  commit(types.PLAYERTWO_TALENTS, false);
  commit(types.PLAYERTWO_REGION, false);

  // Player Two Stats
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_STATS, res.data);
      commit(types.PLAYERTWO_REGION, info.region);
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Player Two Pets
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_PETS, res.data);
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})

// Player Two Mounts
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_MOUNTS, res.data);
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Player Two Items
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_GEAR, res.data);
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Player Two Progression
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_PROG, res.data)
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})
  
  // Player Two Talents
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=talents&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERTWO_TALENTS, res.data);
    })
    .catch(() => {
      commit(types.PLAYERTWO_ERROR, {errData: "Character not found", errColor: "red"} )})
};

export const playerTwoEmptyForm = ({ commit }, payload) => {
  commit(types.PLAYERTWO_ERROR, { errData: payload.errData, errColor: payload.errColor });
};