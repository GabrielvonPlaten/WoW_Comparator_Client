<template>
  <div>
    <div class="login-bg">
      <div class="form-container">
        <div class="form-header">
          <h2>Login</h2>
        </div>
        <form @submit.prevent="loginUser" class="form">
          <div class="form-separator">
            <label>Email</label><br>
            <input class="input-field" v-model="login.email"><br>
          </div>
          <div class="form-separator">
            <label>Passord</label><br>
            <input class="input-field" v-model="login.password" type="password">
          </div>
          <br>
          <button class="btn btn--green btn-form">Login</button>
          <button class="btn btn--red btn-form">Cancel</button>
          <div class="form-separate">
            <p>New User?</p>
            <router-link to="/register" class="router btn btn--purple login-register-btn">Register</router-link>
          </div>
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
      login: {
        email: "",
        password: ""
      },
      loginError: null,
    }
  },

  methods: {
    async loginUser() {
      let { email, password } = this.login;
      await userService.login(email, password)
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

.login-bg
  background-image: url('../../assets/bgs/admin-login-bg.jpg')
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
  height: 100vh
  width: 100%

.form-container
  width: 400px
  height: 570px
  background: inherit
  position: absolute
  overflow: hidden
  top: 45%
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
      font-size: 0.87rem
      font-weight: 500
      margin-bottom: 0.64rem
      display: block
      float: left
      text-transform: uppercase

    .input-field
      width: 95%
      background: $white-2
      padding: 0.3rem
      letter-spacing: 1px
      font-size: 1rem
      border: none

  .btn-form
    display: block
    width: 90%
    margin: 0.7rem auto
    padding: 0.6rem 1rem

  .form-separate
    p
      margin: 1rem auto 0 auto
      padding: 0.6rem 1rem 0 1rem
      text-align: center
      
    .login-register-btn
      display: block
      width: 60%
      margin: 0.7rem auto
      padding: 0.3rem 0.7rem
      text-align: center
      font-size: 1rem
</style>

