import axios from 'axios';
import * as types from '../mutation-types';

export const playerOneData = ({ commit }, info) => {
  let { token, realm, name, region } = info;

  // Clear the Error Message
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
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=stats&locale=en_EU&access_token=${token}`)
  .then(res => {
    commit(types.PLAYERONE_STATS, res.data);   
    commit(types.PLAYERONE_REGION, region); })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})

  // Plyaer Pets
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=pets&locale=en_EU&access_token=${token}`)
    .then(res => {commit(types.PLAYERONE_PETS, res.data);  })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})

  // Plyaer Mounts
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=mounts&locale=en_EU&access_token=${token}`)
    .then(res => {commit(types.PLAYERONE_MOUNTS, res.data); })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})
  
  // Plyaer Items
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=items&locale=en_EU&access_token=${token}`)
    .then(res => {commit(types.PLAYERONE_GEAR, res.data); })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})

  // Plyaer Progression
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=progression&locale=en_EU&access_token=${token}`)
    .then(res => {commit(types.PLAYERONE_PROG, res.data) })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})

  // Plyaer OneTalents
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=talents&locale=en_EU&access_token=${token}`)
    .then(res => {commit(types.PLAYERONE_TALENTS, res.data); })
    .catch(() => { commit(types.PLAYERONE_ERROR, {errData: "Character not found", errColor: "red"})})
}

export const playerOneEmptyForm = ({ commit }, payload) => {
  commit(types.PLAYERONE_ERROR, { errData: payload.errData, errColor: payload.errColor });
};