<template>
  <div class="userInfoPanel">
    <div class="user-info">
      <label>Name</label>
      <p>{{userData.name}}</p>
    </div>
    <div class="user-info">
      <label>Email</label>
      <p>{{userData.email}}</p>
    </div>
    <div class="user-info">
      <label>Member Since</label>
      <p>{{formatDate(userData.createdAt)}}</p>
    </div>
    <div>
      <label>Logout</label>
      <p>
        <button class="btn btn--red" @click="logoutUser">Logout</button>
      </p>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store';
import userService from '@/apis/userService';

export default {
  data() {
    return {
      userData: store.state.userData,
    } 
  },

  methods: {
    formatDate(value) {
      let year = new Date(value);
      let month = new Date(value);
      let day = new Date(value);

      return `${day.getDate()} / ${1 + month.getMonth()} / ${year.getUTCFullYear()}`
    },

    async logoutUser() {
    userService.logout(localStorage.getItem('userToken'))
      .then(async res => {
        localStorage.removeItem('userToken')
        store.dispatch('userLogout');
        this.$router.go({ path: this.$router.path })
      })
    },
  }
}
</script>

<style lang="sass">
.userInfoPanel
  width: 35%
  border: 1px solid $blue-4
  padding: 0.6rem
  background: $blue-9
  max-height: 25rem

  .user-info
    border-bottom: 1px solid $blue-4
    width: 40%
    margin-bottom: 1.3rem

  label
    color: rgba(110, 150, 255, 0.9)

  p
    color: $white-1
    margin: 0.6rem 0 0 0
    font-weight: 300
</style>


