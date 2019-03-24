import axios from 'axios';
import * as types from './mutation-types';

export const playerOneData = ({ commit }, info) => {
  commit(types.PLAYERONE_ERROR, "", "");

  // Reset the states
  commit(types.PLAYERONE_STATS, false);
  commit(types.PLAYERONE_PETS, false);
  commit(types.PLAYERONE_MOUNTS, false);
  commit(types.PLAYERONE_GEAR, false);
  commit(types.PLAYERONE_PROG, false);
  commit(types.PLAYERONE_TALENTS, false);
  commit(types.PLAYERONE_REGION, false);

  // Plyaer Stats
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=stats&locale=en_EU&access_token=${info.token}`)
  .then(res => {
    commit(types.PLAYERONE_STATS, res.data);   
    commit(types.PLAYERONE_REGION, info.region); 
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Plyaer Pets
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=pets&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERONE_PETS, res.data); 
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Plyaer Mounts
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=mounts&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERONE_MOUNTS, res.data);
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})
  
  // Plyaer Items
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=items&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERONE_GEAR, res.data);
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Plyaer Progression
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=progression&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERONE_PROG, res.data)
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})

  // Plyaer OneTalents
  axios.get(`https://${info.region}.api.blizzard.com/wow/character/${info.realm}/${info.name}?fields=talents&locale=en_EU&access_token=${info.token}`)
    .then(res => {
      commit(types.PLAYERONE_TALENTS, res.data);
    })
    .catch(() => {
      commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"} )})
}

export const playerOneEmptyForm = ({ commit }, payload) => {
  commit(types.PLAYERONE_ERROR, { errData: payload.errData, errColor: payload.errColor });
};