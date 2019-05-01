import axios from 'axios';

export default {
  async getJumbotronBgImage() {
    let url = '/api/jumbotron-bg-image';
    return await axios.get(url)
  },

  async updateJumbotronImage(newImage, _id, token) {
    let url = '/api/jumbotron-bg-image/' + _id;
    return await axios.patch(url, {backgroundImage: newImage}, {
      headers: { 
        authorization: 'Bearer ' + token 
      }});
  }
}