import axios from 'axios';

export default {
  login(email, password) {
    const url = '/api/login';
    return axios.post(url, { email, password });
  },

  profile(token) {
    const url = '/api/profile';
    return axios.get(url, {
      headers: {
        authorization: 'Bearer ' + token
      }
    });
  },

  register(name, email, password) {
    const url = '/api/register';
    return axios.post(url, { name, email, password });
  },

  addCharacter(name, realm, region, token) {
    const url = '/api/addFavoriteChar';

    return axios.patch(
      url,
      { name, realm, region },
      {
        headers: { authorization: 'Bearer ' + token }
      }
    );
  },

  async removeCharacter(id) {
    const url = '/api/getFavoriteChar/' + id;

    return await axios.delete(url, {
      headers: { authorization: 'Bearer ' + localStorage.getItem('userToken') }
    });
  },

  logout(token) {
    const url = '/api/logout';
    return axios
      .post(
        url,
        {},
        {
          headers: { authorization: 'Bearer ' + token }
        }
      )
      .then(res => res.data)
      .catch(err => err);
  }
};
