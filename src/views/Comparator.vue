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

        <!-- Region Selection -->
        <select v-model="playerOneRegionSelected" class="playerOne-region-selection">
          <option v-for="(option, index) in playerOneRegionOptions" :key="index" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </form>

      <form @submit.prevent="getPlayerTwoData()" class="form form-playerTwo">
        <label>Player Two</label>
        <br>
        <span
          class="search-error"
          :style="{color: this.$store.state.playerTwoError.color}" v-if="this.$store.state.playerTwoError.message">
          {{this.$store.state.playerTwoError.message}}
        </span>
        <br>
        <input v-model="playerTwoRealm" type="text" placeholder="Realm"><br>
        <input v-model="playerTwoName" type="text" placeholder="Character">
        <!-- Region Selection -->
        <select v-model="playerTwoRegionSelected" class="playerTwo-region-selection">
          <option v-for="(option, index) in playerTwoRegionOptions" :key="index" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <button class="btn btn--blue btn-playerTwo">Search</button>
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

      playerOneRegionSelected: 'EU',
      playerOneRegionOptions: [
        { text: 'EU', value: 'EU' },
        { text: 'US', value: 'US' },
        { text: 'KR', value: 'KR'},
        { text: 'TW', value: 'TW'},
        { text: 'CN', value: 'CN'}
      ],

      playerTwoRegionSelected: 'EU',
      playerTwoRegionOptions: [
        { text: 'EU', value: 'EU' },
        { text: 'US', value: 'US' },
        { text: 'KR', value: 'KR'},
        { text: 'TW', value: 'TW'},
        { text: 'CN', value: 'CN'}
      ]
    }
  },

  computed: {

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
        this.$store.dispatch('playerOneData', {region: this.playerOneRegionSelected, token: this.access_token, realm: this.playerOneRealm, name: this.playerOneName})
        this.playerOneLoader = true;
      } else {
        this.$store.dispatch('playerOneEmptyForm', {errData: "Please fill in both fields.", errColor: "orange"})
      }
    },

    getPlayerTwoData() {
      if (this.playerTwoRealm && this.playerTwoName) {
        this.$store.dispatch('playerTwoData', {region: this.playerTwoRegionSelected, token: this.access_token, realm: this.playerTwoRealm, name: this.playerTwoName})
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
  justify-content: center
  background: $blue-5
  margin-bottom: 1.5rem
  color: $orange-5
  padding: 0.7rem
  background: url('https://wow.4fansites.de/bilder/weltkarte/zandalar/zuldazar/zuldazar.jpg')
  background-repeat: no-repeat
  background-position: bottom
  background-color: $blue-6
  background-attachment: fixed
  background-blend-mode: soft-light
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25)


  .form-playerOne
    margin-right: 10rem

    label
      margin-bottom: 10px

  select
    background: $blue-4
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25)
    color: $white-0
    border: none
    outline: none
    font-size: 16px
    height: 1.7rem

  .form
    label
      display: inline-block
      font-size: 1.3rem
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35)

  .form-playerTwo
    margin-left: 10rem

    input, label
      float: right

  input
    text-transform: capitalize
    border-radius: 0.1rem
    color: $white-1
    font-style: italic
    font-size: 1.1rem
    border: 1px solid $blue-4
    background: $blue-5
    margin: 0.2rem 0
    padding: 0.1rem 0.2rem
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)

  .btn-playerOne, .playerOne-region-selection
    margin: 0 5px
    background: $blue-5

  .btn-playerTwo, .playerTwo-region-selection
    float: left
    margin: 0 5px
    background: $blue-5


.search-error
  font-size: 1.1rem
  font-style: bold
  margin: 0

.comparator-views
  color: $white-0
  display: grid
  grid-template-columns: 1fr 1fr

.compViews__playerOne
  width: 100%
  height: 100%
  margin: 1rem auto 0 auto

.compViews__playerTwo
  width: 100%
  height: 100%
  margin: 1rem auto 0 auto

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
