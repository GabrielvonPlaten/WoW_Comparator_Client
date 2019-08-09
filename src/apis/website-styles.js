import axios from 'axios';

export default {
  async getJumbotronBgImage() {
    const url = '/api/jumbotron-bg-image';
    return await axios.get(url);
  },

  async updateJumbotronImage(newImage, _id, token) {
    const url = '/api/jumbotron-bg-image/' + _id;
    return await axios.patch(
      url,
      { backgroundImage: newImage },
      {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
    );
  }
};
