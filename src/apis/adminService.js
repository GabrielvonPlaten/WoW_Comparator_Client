import axios from 'axios';

export default {
  login(email, password) {
    let url = '/api/admin/login'
    return axios.post(url, {email, password})
      .then(res => res.data)
      .catch(err => err)
  },

  adminProfile(token) {
    let url = '/api/admin/profile'
    return axios.get(url, {
      headers: { 
        authorization: 'Bearer ' + token 
      }})
    .then(res => res.data)
    .catch(err => err)
  },
}