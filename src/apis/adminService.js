import axios from 'axios';

export default {
  login(email, password) {
    const url = '/api/admin/login';
    return axios.post(url, { email, password });
  },

  adminProfile(token) {
    const url = '/api/admin/profile';
    return axios.get(url, {
      headers: {
        authorization: 'Bearer ' + token
      }
    });
  },

  logout(token) {
    const url = '/api/admin/logout';
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
