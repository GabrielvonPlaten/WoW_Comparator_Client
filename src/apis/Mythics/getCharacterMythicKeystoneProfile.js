import axios from 'axios';

export default {
  async getCharMythicKeyProfileSeason(info) {
    let { realm, name, region, season_number, token } = info;

    return axios.get(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/${season_number}?namespace=profile-${region}&locale=en_US&access_token=${token}`)
      .then(res => res.data)
      .catch(err => err);
  }
}
