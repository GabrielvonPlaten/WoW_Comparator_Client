<template>
  <div class="comparator">
    <div class="comparator-form">
      <form @submit.prevent="getPlayerOneData()" class="form form-playerOne">
        <label>Player One</label>
        <span
          class="search-error"
          :style="{color: playerOneError.color}" v-if="playerOneError.message"
          v-text="playerOneError.message" 
        />
        <br>
        <input v-model="playerOneName" type="text" placeholder="Character"><br>
        <input v-model="playerOneRealm" type="text" placeholder="Realm">
        <div class="playerOne__buttons">
          <button class="btn btn--blue btn-playerOne">Search</button>
          <!-- Region Selection -->
          <select v-model="playerOneRegionSelected" class="playerOne-region-selection">
            <option 
              v-for="(option, index) in playerOneRegionOptions" :key="index" 
              v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </form>

      <form @submit.prevent="getPlayerTwoData()" class="form form-playerTwo">
        <label>Player Two</label>
        <br>
        <span
          class="search-error"
          :style="{color: playerTwoError.color}" v-if="playerTwoError.message">
          {{playerTwoError.message}}
        </span>
        <br>
        <input v-model="playerTwoName" type="text" placeholder="Character"><br>
        <input v-model="playerTwoRealm" type="text" placeholder="Realm">
        <div class="playerTwo__buttons">
          <!-- Region Selection -->
          <select v-model="playerTwoRegionSelected" class="playerTwo-region-selection">
            <option v-for="(option, index) in playerTwoRegionOptions" :key="index" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <button class="btn btn--blue btn-playerTwo">Search</button>
        </div>
      </form>
    </div>

    <ComparatorButtons />

    <router-view class="comparator-views"></router-view>
  </div>
</template>

<script>
import store from '@/Vuex/store'
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
      current_season: 2,

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
    playerOneError() {
      return store.state.playerOneError
    },

    playerTwoError() {
      return store.state.playerTwoError
    }
  },

  created() {
    let url = '/api/comparator/'
    axios.get(url)
      .then(res => this.access_token = res.data.access_token)
  },

  methods: {
    getPlayerOneData() {
      let { playerOneRealm, playerOneName, playerOneRegionSelected, current_season, access_token } = this;

      if (playerOneRealm && playerOneName) {
        store.dispatch('playerOneData', {region: playerOneRegionSelected, token: access_token, realm: playerOneRealm, name: playerOneName, season_number: current_season})
        store.dispatch('playerOneMythicData', {region: playerOneRegionSelected, token: access_token, realm: playerOneRealm, name: playerOneName, season_number: current_season})
      } else {
        store.dispatch('playerOneEmptyForm', {errMessage: "Please fill in both fields.", errColor: "orange"})
      }
    },

    getPlayerTwoData() {
      let { playerTwoRealm, playerTwoName, playerTwoRegionSelected, current_season, access_token } = this;

      if (playerTwoRealm && playerTwoName) {
        store.dispatch('playerTwoData', {region: playerTwoRegionSelected, season_number: current_season, token: access_token, realm: playerTwoRealm, name: playerTwoName})
        store.dispatch('playerTwoMythicData', {region: playerTwoRegionSelected, season_number: current_season, token: access_token, realm: playerTwoRealm, name: playerTwoName})
      } else {
        store.dispatch('playerTwoEmptyForm', {errMessage: "Please fill in both fields.", errColor: "orange"})
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
  color: $orange-4
  padding: 0.7rem
  padding-top: 4.1rem
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

    .playerOne__buttons
      float: right
      display: flex
      justify-content: space-between

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

    .playerTwo__buttons
      float: left
      display: flex
      justify-content: space-between

    input, label
      float: right

  input
    text-transform: capitalize
    border-radius: 0.1rem
    color: $white-1
    font-size: 1.1rem
    border: 1px solid $blue-4
    background: $blue-5
    margin: 0.2rem 0
    padding: 0.1rem 0.2rem
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)

  .btn-playerOne, .playerOne-region-selection
    margin:
      top: 4px
      left: 5px
      right: 5px
    background: $blue-4

  .btn-playerTwo, .playerTwo-region-selection
    float: left
    margin: 
      top: 4px
      right: 5px
      left: 5px 
    background: $blue-4


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
