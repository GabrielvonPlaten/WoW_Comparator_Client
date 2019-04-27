import axios from 'axios';

export default {
  async getJumbotronBgImage() {
    let url = '/api/jumbotron-bg-image';
    return await axios.get(url)
  },

  async updateJumbotronImage(newImage, token) {
    let url = '/api/jumbotron-bg-image';
    return await axios.patch(url, {jumbotronBgImage: newImage}, {
      headers: { 
        authorization: 'Bearer ' + token 
      }});
  }
}