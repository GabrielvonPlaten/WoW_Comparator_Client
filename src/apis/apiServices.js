import axios from 'axios';

export default {
  async getAffixImg(val, access_token) {
    return await axios
      .get(`${val}&access_token=${access_token}`)
      .then(res => {
        return axios.get(
          `${res.data.media.key.href}&access_token=${access_token}`
        );
      })
      .then(res => {
        return res.data.assets[0].value;
      })
      .catch(err => err);
  },

  async getMemberInfo(val, access_token) {
    return axios.get(`${val}&access_token=${access_token}`).then(res => {
      return res.data.role.type;
    });
  }
};
