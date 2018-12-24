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

    <ComparatorButtons :showView="showView" />

    <div class="comparator-views">
      <!-- PLAYER ONE -->
      <div class="compViews__playerOne">
        <div v-show="views[0].show" class="feed feed__playerOne">
          <div v-if="this.$store.state.playerOneFeed">
            <p>{{this.$store.state.playerOneFeed}}</p>
          </div>
        </div>
        <div v-show="views[1].show" class="mounts mounts__playerOne">
          <div v-if="this.$store.state.playerOneMounts">
            <p>{{this.$store.state.playerOneMounts}}</p>
          </div>
        </div>
        <div v-show="views[2].show" class="stats stats__playerOne">
          <div v-if="this.$store.state.playerOneStats">
            <p>{{this.$store.state.playerOneStats}}</p>
          </div>
        </div>
        <div v-show="views[3].show" class="progress progress__playerOne">
          <div v-if="this.$store.state.playerOneProg">
            <p>{{this.$store.state.playerOneProg}}</p>
          </div>
        </div>
        <div v-show="views[4].show" class="gear gear__playerOne">
          <div v-if="this.$store.state.playerOneGear">
            <p>{{this.$store.state.playerOneGear}}</p>
          </div>
        </div>
        <div v-show="views[5].show" class="pets pets__playerOne">
          <div v-if="this.$store.state.playerOnePets">
            <p>{{this.$store.state.playerOnePets}}</p>
          </div>
        </div>
      </div>


      <!-- PLAYER TWO -->
      <div class="compViews__playerTwo">
        <div v-show="views[0].show" class="feed feed__playerTwo">
          <div v-if="this.$store.state.playerTwoFeed">
            <p>{{this.$store.state.playerTwoFeed}}</p>
          </div>
        </div>
        <div v-show="views[1].show" class="mounts mounts__playerTwo">
          <div v-if="this.$store.state.playerTwoMounts">
            <p>{{this.$store.state.playerTwoMounts}}</p>
          </div>
        </div>
        <div v-show="views[2].show" class="stats stats__playerTwo">
          <div v-if="this.$store.state.playerTwoStats">
            <p>{{this.$store.state.playerTwoStats}}</p>
          </div>
        </div>
        <div v-show="views[3].show" class="progress progress__playerTwo">
          <div v-if="this.$store.state.playerTwoProg">
            <p>{{this.$store.state.playerTwoProg}}</p>
          </div>
        </div>
        <div v-show="views[4].show" class="gear gear__playerTwo">
          <div v-if="this.$store.state.playerTwoGear">
            <p>{{this.$store.state.playerTwoGear}}</p>
          </div>
        </div>
        <div v-show="views[5].show" class="pets pets__playerTwo">
          <div v-if="this.$store.state.playerTwoPets">
            <p>{{this.$store.state.playerTwoPets}}</p>
          </div>
        </div>
      </div>
    </div>
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
      views: [
        {
          id: 0,
          name: 'Feed',
          show: false,
        },
        {
          id: 1,
          name: 'Mounts',
          show: false,
        },
        {
          id: 2,
          name: 'Stats',
          show: true,
        },
        {
          id: 3,
          name: 'Progress',
          show: false,
        },
        {
          id: 4,
          name: 'Gear',
          show: false,
        },
        {
          id: 5,
          name: 'Pets',
          show: false,
        }
      ]
    }
  },

  created() {
    axios.get('http://localhost:5000/api')
      .then(res => this.access_token = res.data.access_token)
  },

  methods: {
    getPlayerOneData() {
      if (this.playerOneRealm && this.playerOneName) {
        this.$store.dispatch('playerOneData', {token: this.access_token, realm: this.playerOneRealm, name: this.playerOneName})
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

    showView(x) {
      this.views.forEach(view => {
        if (view.id === x) {
          view.show = true;
        } else {
          view.show = false;
        }
      })           
    }
  },

  components: {
    ComparatorButtons,
  }
}
</script>


<style lang="sass" scoped>
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
  margin: 0 1rem

.comparator-views
  color: $white-0
  display: grid
  grid-template-columns: 1fr 1fr

.compViews__playerOne
  height: 100%
  width: 90%
  margin: 0 auto
  color: blue

.compViews__playerTwo
  height: 100%
  width: 90%
  margin: 0 auto
  color: red

</style>
