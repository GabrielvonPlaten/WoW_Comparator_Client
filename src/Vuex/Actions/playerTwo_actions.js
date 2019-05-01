import axios from 'axios';
import * as types from '../mutation-types';

export const playerTwoData = ({ commit }, info) => {
  let { token, realm, name, region, season_number} = info;
  
  // Clear the Error Message
  commit(types.PLAYERTWO_ERROR, "", "");

  // Reset the states
  commit(types.PLAYERTWO_STATS, false);
  commit(types.PLAYERTWO_PETS, false);
  commit(types.PLAYERTWO_MOUNTS, false);
  commit(types.PLAYERTWO_GEAR, false);
  commit(types.PLAYERTWO_PROG, false);
  commit(types.PLAYERTWO_TALENTS, false);
  commit(types.PLAYERTWO_MYTHICS, false);
  commit(types.PLAYERTWO_MYTHIC_SCORE, false)
  commit(types.PLAYERTWO_NO_MYTHICS, false);
  commit(types.PLAYERTWO_REGION, false);

  // Player Two Stats
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=stats&locale=en_EU&access_token=${token}`)
    .then(res => {
      commit(types.PLAYERTWO_STATS, res.data);
      commit(types.PLAYERTWO_REGION, region) 
      
      let url = '/api/queries-made';
      axios.patch(url)
    })
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))

  // Player Two Pets
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=pets&locale=en_EU&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_PETS, res.data))
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))

// Player Two Mounts
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=mounts&locale=en_EU&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_MOUNTS, res.data))
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))

  // Player Two Items
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=items&locale=en_EU&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_GEAR, res.data))
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))

  // Player Two Progression
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=progression&locale=en_EU&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_PROG, res.data))
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))
  
  // Player Two Talents
  axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?fields=talents&locale=en_EU&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_TALENTS, res.data))
    .catch(() => commit(types.PLAYERTWO_ERROR, {errMessage: "Character not found", errColor: "red"} ))
};

// Mythic Data
export const playerTwoMythicData = ({commit}, info) => {
  let { token, realm, name, region, season_number} = info;

  commit(types.PLAYERTWO_MYTHICS, false);
  commit(types.PLAYERTWO_MYTHIC_SCORE, false)
  commit(types.PLAYERTWO_NO_MYTHICS, false);

  // Player Two Mythics
  axios.get(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/${season_number}?namespace=profile-${region}&locale=en_US&access_token=${token}`)
    .then(res => commit(types.PLAYERTWO_MYTHICS, res.data))
    .catch(() => commit(types.PLAYERTWO_NO_MYTHICS, {errMessage: "This player does not have a recorded M+ run this season.", errColor: "#2e72ba"}))

  axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season%3Acurrent`)
    .then(res => commit(types.PLAYERTWO_MYTHIC_SCORE, res.data))
}

export const playerTwoEmptyForm = ({ commit }, payload) => {
  commit(types.PLAYERTWO_ERROR, { errMessage: payload.errMessage, errColor: payload.errColor });
};
