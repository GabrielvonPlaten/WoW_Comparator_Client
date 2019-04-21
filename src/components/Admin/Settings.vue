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
      </div>
      <div class="logout">
        <button @click.prevent="logoutAdmin" class="btn btn--red logout-btn">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import adminService from '@/apis/adminService';
import store from '@/Vuex/store';

export default {
  data() {
    return {
      adminData: null,
    }
  },

  created() {
    this.adminData = store.state.adminData
    console.log(this.adminData)
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
</style>


