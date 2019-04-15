import axios from 'axios';

export default {
  login(email, password) {
    let url = '/api/admin/login'
    return axios.post(url, {email, password})
      .then(res => res.data)
      .catch(err => err)
  },
}