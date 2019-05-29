import axios from 'axios';

export default {
  login(email, password) {
    let url = '/api/login'
    return axios.post(url, {email, password})
  },

  profile(token) {
    let url = '/api/profile'
    return axios.get(url, {
      headers: { 
        authorization: 'Bearer ' + token 
      }})
  },

  register(name, email, password) {
    let url = '/api/register';
    return axios.post(url, { name, email, password })
  },

  addChar(name, realm, region, token) {
    let url = '/api/addFavoriteChar';

    return axios.patch(url, { name, realm, region}, {
      headers: { authorization: 'Bearer ' + token}
    })
  },

  async removeChar(id) {
    let url = '/api/getFavoriteChar/' + id;

    return await axios.delete(url, {
      headers: { authorization: 'Bearer ' + localStorage.getItem('userToken')}
    })
  },

  logout(token) {
    let url = '/api/logout'
    return axios.post(url, {}, {
      headers: { authorization: 'Bearer ' + token}
    })
    .then(res => res.data)
    .catch(err => err)
  },
}