<template>
  <div id="nav">
    <div class="username-name">
      <h2 class="dashboard-greet-message">{{adminData.name}}
        <span v-if="adminLoggedIn">
          <font-awesome-icon icon="crown" />
        </span>
      </h2>
    </div>
    <ul>
      <li><router-link to="/" class="router btn btn--purple">Home</router-link></li>
      <li><router-link to="/comparator/stats" class="router btn btn--purple">Compare</router-link></li>
      <li v-if="adminLoggedIn">
        <router-link to="/admin/dashboard" class="router btn btn--purple">Dashboard</router-link>
      </li>
    </ul>
    </div>
</template>

<script>
import store from '@/Vuex/store'

export default {
  data() {
    return {
      adminLoggedIn: false,
      adminData: store.state.adminData
    }
  },

  created() {
    if (store.state.adminData) {
      this.adminLoggedIn = true
    }
  },
}
</script>


<style lang="sass" scoped>
#nav
  height: 3.6rem
  background-color: $blue-7
  border-bottom: 1px solid $blue-4

  .username-name
    h2
      color: $white-0
      font-weight: 200
      font-size: 1.1rem
      position: absolute
      padding-left: 1rem
      padding-top: 0.2rem

    svg
      clear: both
      color: $yellow-4
      font-size: 0.9rem

  ul
    padding: 0
    margin: 0 1.7rem 0 0
    display: flex
    justify-content: flex-end


  li
    margin: 1.2rem .3rem
    list-style: none

  .loggout-btn
    border: 2px solid $red-3
    background: none
    &:hover
      background: $red-3
// The styles for the router-links can be found in App.vue
</style>
