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

  logout(token) {
    let url = '/api/logout'
    return axios.post(url, {}, {
      headers: { authorization: 'Bearer ' + token}
    })
    .then(res => res.data)
    .catch(err => err)
  }
}