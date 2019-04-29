<template>
  <div>
    <div class="settings-container">
      <div class="admin-data">
        <div class="admin-info">
          <label>Name</label>
          <h3>{{adminData.name}}</h3>
        </div>
        <div class="admin-info">
          <label>Email</label>
          <h3>{{adminData.email}}</h3>
        </div>
        <div class="admin-info">
          <label>Member Since</label>
          <h3>{{formatDate(adminData.createdAt)}}</h3>
        </div>
        <div class="admin-info">
          <label>Log Ins</label>
          <h3>{{adminData.tokens.length}}</h3>
        </div>
        <div class="admin-info">
          <label>Jumbotron Image</label>
          <form @submit.prevent="updateJumbotronImage">
            <p>Current Image: <a target="_blank" :href="jumbotronImage">{{jumbotronImage}}</a></p>
            <input class="input-field" v-model="newJumbotronImage">
            <br><br>
            <button class="btn btn--green">Update</button>
            <br>
            <p>{{jumbotronMessage}}</p>
          </form>
        </div>
        <div v-if="totalVisits" class="admin-info">
          <label>Website Visits</label>
          <p>{{totalVisits.websiteVisits}}</p>
          <label>Comparator Queries</label>
          <p>{{totalVisits.comparatorQueriesMade}}</p>
        </div>
      </div>
      <div class="logout">
        <button @click.prevent="logoutAdmin" class="btn btn--red logout-btn">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import adminService from '@/apis/adminService';
import websiteStyles from '@/apis/website-styles';
import store from '@/Vuex/store';

export default {
  data() {
    return {
      adminData: null,
      jumbotronImage: null,
      newJumbotronImage: "",
      jumbotronMessage: null,
      totalVisits: null,
    }
  },

  created() {
    this.adminData = store.state.adminData

    // Jumbotron Image
    websiteStyles.getJumbotronBgImage()
      .then(res => this.jumbotronImage = res.data.jumbotronBgImage)

    axios.get('/api/total-requests', {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token')}
    })
      .then(res => this.totalVisits = res.data);
  },

  methods: {
    logoutAdmin() {
      adminService.logout(localStorage.getItem('token'))
        .then(async res => {
          localStorage.removeItem('token')
          store.dispatch('adminLogout');
          this.$router.go({ path: this.$router.path })
        })
    },

    formatDate(value) {
      let year = new Date(value);
      let month = new Date(value);
      let day = new Date(value);

      return `${day.getDate()} / ${1 + month.getMonth()} / ${year.getUTCFullYear()}`
    },

    updateJumbotronImage() {
      let token = localStorage.getItem('token');
      websiteStyles.updateJumbotronImage(this.newJumbotronImage, token)
        .then(res => {
          this.jumbotronMessage = "Image Updated!"
        })
        .catch(() => {
          this.jumbotronMessage = "Couldn't Update."
        })
    }
  },
}
</script>

<style lang="sass" scoped>
.settings-container
  margin: 1rem auto
  background: $blue-8
  border: 1px solid $blue-4
  border-radius: 0.2rem
  padding: 0.8rem

  p
    color: $white-1

.admin-info
  border-bottom: 1px solid $blue-4
  width: 40%
  margin-bottom: 1.3rem

  label
    color: rgba(110, 150, 255, 0.9)

  h3
    color: $white-1
    margin: 0.3rem 0 0 0
    font-weight: 300

.input-field
  background: none
  border: 1px solid $blue-4
  padding: 0.3rem
  font-size: 1.2rem
  color: $white-1
  width: 100%
</style>


