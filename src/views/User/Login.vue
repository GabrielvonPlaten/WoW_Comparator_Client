<template>
  <form @submit.prevent="loginUser">
    <label>Email</label><br>
    <input v-model="data.email"><br>
    <label>Password</label><br>
    <input type="password" v-model="data.password"><br>
    <button class="btn btn--green">Login</button>
    <button class="btn btn--red">Cancel</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      }
    }
  },

  methods: {
    loginUser() {
      console.log(axios.get('/api/login'))
    }
  }
}
</script>

<style lang="sass" scoped>

*
  color: $white-1

form
  position: relative
  top: 3.3rem
  
  input
    color: $blue-7

</style>

