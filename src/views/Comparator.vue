<template>
  <div class="comparator">
    <div class="comparator-form">
      <form @submit.prevent="getPlayerOneData()" class="form form-playerOne">
        <label>Player One</label>
        <span
          class="search-error"
          :style="{color: this.$store.state.playerOneError.color}" v-if="this.$store.state.playerOneError.message">
          {{this.$store.state.playerOneError.message}}
        </span>
        <br>
        <input v-model="playerOneRealm" type="text" placeholder="Realm"><br>
        <input v-model="playerOneName" type="text" placeholder="Character">
        <button class="btn btn--blue btn-playerOne">Search</button>
      </form>

      <form class="form form-playerTwo">
        <label>Player Two</label>
        <span
          class="search-error"
          :style="{color: this.$store.state.playerTwoError.color}" v-if="this.$store.state.playerTwoError.message">
          {{this.$store.state.playerTwoError.message}}
        </span>
        <br>
        <input v-model="playerTwoRealm" type="text" placeholder="Realm"><br>
        <input v-model="playerTwoName" type="text" placeholder="Character">
        <button @click.prevent="getPlayerTwoData" class="btn btn--blue btn-playerTwo">Search</button>
      </form>
    </div>

    <ComparatorButtons />

    <router-view class="comparator-views"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import ComparatorButtons from '@/components/ComparatorButtons.vue';

export default {
  data() {
    return {
      playerOneRealm: "",
      playerOneName: "",
      playerTwoRealm: "",
      playerTwoName: "",
      access_token: "",
      playerOneLoader: false,
    }
  },

  computed: {
    oneStats() {
      return this.$store.state.playerOneStats
    },

    oneMounts() {
      return this.$store.state.playerOneMounts
    },

    onePets() {
      return this.$store.state.playerOnePets
    },

    oneGear() {
      return this.$store.state.playerOneGear
    },

    oneProg() {
      return this.$store.state.playerOneProg
    },

    oneFeed() {
      return this.$store.state.playerOneFeed
    },
  },

  created() {
    let url = '/api/comparator/'
    axios.get(url)
      .then(res => this.access_token = res.data.access_token)
  },

  methods: {
    changeLoadingSpinnerBack() {
      this.playerOneLoader = false;
    },

    getPlayerOneData() {
      if (this.playerOneRealm && this.playerOneName) {
        this.$store.dispatch('playerOneData', {token: this.access_token, realm: this.playerOneRealm, name: this.playerOneName})
        this.playerOneLoader = true;
      } else {
        this.$store.dispatch('playerOneEmptyForm', {errData: "Please fill in both fields.", errColor: "orange"})
      }
    },

    getPlayerTwoData() {
      if (this.playerTwoRealm && this.playerTwoName) {
        this.$store.dispatch('playerTwoData', {token: this.access_token, realm: this.playerTwoRealm, name: this.playerTwoName})
      } else {
        this.$store.dispatch('playerTwoEmptyForm', {errData: "Please fill in both fields.", errColor: "orange"})
      }
    },
  },

  components: {
    ComparatorButtons,
  }
}
</script>


<style lang="sass">
.comparator-form 
  display: flex
  justify-content: space-between
  background: $blue-5
  width: 70%
  margin: 1.4rem auto 1.5rem auto
  color: $white-0
  padding: 0.7rem
  border-radius: 0.6rem
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25)

  .form
    label
      display: inline-block
      margin-bottom: 0.3rem
      font-size: 1.3rem

  .form-playerTwo
    input, label
      float: right

  input
    text-transform: capitalize
    border-radius: 0.1rem
    color: $white-1
    font-style: italic
    font-size: 1.1rem
    border: none
    background: $blue-7
    margin: 0.2rem 0
    padding: 0.1rem 0.2rem

  .btn-playerTwo
    float: left

.search-error
  font-size: 1.1rem
  font-style: bold
  margin: 0

.comparator-views
  color: $white-0
  display: grid
  grid-template-columns: 1fr 1fr

.compViews__playerOne
  height: 100%
  width: 90%
  margin: 0 auto

.compViews__playerTwo
  height: 100%
  width: 90%
  margin: 0 auto

ul
  padding: 0
  margin: 0

  li
    list-style: none

.avatar
  text-align: center
  padding: 0
  margin: 0 auto 5em auto

  h2
    color: $white-0
    font-weight: 300

    
</style>
