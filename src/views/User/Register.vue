<template>
  <div>
    <div class="register-bg">
      <div class="form-container">
        <div class="form-header">
          <h2>Register</h2>
        </div>
        <form @submit.prevent="registerUser" class="form">
          <div class="form-separator">
            <label>Name</label><br>
            <input class="input-field" v-model="register.name"><br>
          </div>
          <div class="form-separator">
            <label>Email</label><br>
            <input class="input-field" v-model="register.email"><br>
          </div>
          <div class="form-separator">
            <label>Passord</label><br>
            <input class="input-field" v-model="register.password" type="password">
          </div>
          <br>
          <button class="btn btn--green btn-form">Register</button>
          <button class="btn btn--red btn-form">Cancel</button>
          <router-link to="/login">Login</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store';
import userService from '@/apis/userService';

export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      },
      loginError: null,
    }
  },

  methods: {
    async registerUser(e) {
      let { name, email, password } = this.register;
      await userService.register(name, email, password)
        .then(async res => {
          await localStorage.setItem('userToken', res.data.token)
          store.dispatch('userLogin', res.data)
          this.$router.go({ path: this.$router.path })
        })
        .catch(err => {
          this.loginError = err
          this.$router.go({ path: '/' })
        })
    }
  },
}
</script>


<style lang="sass" scoped>
*
  padding: 0
  margin: 0

.register-bg
  background-image: url('../../assets/bgs/admin-login-bg.jpg')
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
  height: 100vh
  width: 100%

.form-container
  width: 400px
  height: 600px
  background: inherit
  position: absolute
  overflow: hidden
  top: 50%
  left: 48.5%
  margin-left: -175px
  margin-top: -250px
  border: 2px solid $blue-7
  border-radius: 8px

.form-container:before
  width: 450px
  height: 600px
  content: ""
  position: absolute
  top: -25px
  left: -25px
  bottom: 0
  right: 0
  background: inherit
  box-shadow: inset 0 0 0 250px rgba(22, 27, 51, 0.35)
  filter: blur(5px)

.form-header
  background: $blue-6
  width: 400px
  position: absolute
  text-align: center

  h2
    color: $white-0
    font-size: 2rem
    text-shadow: $text-shadow
    font-weight: 300
    margin: 1rem 0

.form
  position: absolute
  left: 50%
  top: 35%
  color: $white-3
  margin-top: 4rem
  width: 100%
  transform: translate(-50%,-50%)

  .form-separator
    margin: 2rem

    label 
      color: $orange-4
      font-size: 1rem
      font-weight: 400
      margin-bottom: 0.64rem
      display: block
      float: left
      text-transform: uppercase

    .input-field
      width: 95%
      background: $white-2
      padding: 0.4rem
      font-size: 1rem
      border: none

  .btn-form
    display: block
    width: 90%
    margin: 0.7rem auto
    padding: 0.6rem 1rem
</style>