<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneStats === false"/>
      <div class="playerOne__mythics" v-if="oneStats">
        <playerOneAvatar />

        <ul>
          <li
            class="mythic-dungeon-item" 
            v-for="(run, index) in getRunsOne" :key="index">
            <div class="timestamps">
              <p class="dungeon-timestamp">{{completedAt(run.completed_timestamp)}}</p>
              <p>{{durationTime(run.duration)}}</p>
            </div>
            <div class="dungeon-item-title">
              <span v-for="(affix, j) in run.keystone_affixes" :key="j">
                <a
                  class="affix-name" 
                  :href="'https://wowhead.com/affix=' + affix.id">{{affix.name}}</a>
              </span>
              <h3>{{run.dungeon.name}}
                <span> +{{run.keystone_level}}</span>
              </h3>
            </div>
            <br>
            <div class="dungeon-members">
              <ul class="members-list">
                <li v-for="(m, index) in run.members" :key="index">
                  <p class="member-name">{{m.character.name}}</p>
                  <p>iLvL: <span class="member-itemlevel">{{m.equipped_item_level}}</span></p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div v-if="oneNoMythicRuns">
          <h2
            class="errorMessage"
            :style="'color:' + oneNoMythicRuns.errColor">
            {{oneNoMythicRuns.errMessage}}
          </h2>
        </div>
      </div>
    </div>

    <div class="compViews__playerOne">
      <Loader v-if="twoStats === false"/>
      <div class="playerTwo__mythics" v-if="twoStats">
        <playerTwoAvatar />

        <ul>
          <li
            class="mythic-dungeon-item" 
            v-for="(run, index) in getRunsTwo" :key="index">
            <div class="timestamps">
              <p class="dungeon-timestamp">{{completedAt(run.completed_timestamp)}}</p>
              <p>{{durationTime(run.duration)}}</p>
            </div>
            <div class="dungeon-item-title">
              <h3>{{run.dungeon.name}}
                <span> +{{run.keystone_level}}</span>
              </h3>
              <span v-for="(affix, j) in run.keystone_affixes" :key="j">
                <a
                  class="affix-name" 
                  :href="'https://wowhead.com/affix=' + affix.id">{{affix.name}}</a>
              </span>
            </div>
            <br>
            <div class="dungeon-members">
              <ul class="members-list">
                <li v-for="(m, index) in run.members" :key="index">
                  <p class="member-name">{{m.character.name}}</p>
                  <p>iLvL: <span class="member-itemlevel">{{m.equipped_item_level}}</span></p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div v-if="twoNoMythicRuns">
          <h2
            class="errorMessage"
            :style="'color:' + twoNoMythicRuns.errColor">
            {{twoNoMythicRuns.errMessage}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store'
import axios from 'axios';
import _ from 'lodash';
import apiServices from '@/apis/apiServices';
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {
  data() {
    return {
      access_token: "",
      memberRole: [],
    }
  },

  created() {
    let url = '/api/comparator/'
    axios.get(url)
      .then(res => this.access_token = res.data.access_token)
  },

  computed: {
    // For some reason this has to return the stats
    // otherwise the rendering will bug out
    oneStats() {
      return store.state.playerOneStats
    },

    twoStats() {
      return store.state.playerTwoStats
    },

    oneNoMythicRuns() {
      return store.state.playerOneMythicError
    },

    twoNoMythicRuns() {
      return store.state.playerTwoMythicError
    },

    getRunsOne() {
      // The API response is ordered by date in ascending order 
      // Sort by dungeon level in ascending order with lodash then sort by descending order
      let runs_obj = _.sortBy(store.getters.getRunsOne, 'keystone_level').reverse()
      return runs_obj;
    },

    getRunsTwo() {
      let runs_obj = _.sortBy(store.getters.getRunsTwo, 'keystone_level').reverse()
      return runs_obj;
    },
  },

  methods: {
    durationTime(val) {
      let hour = new Date(val),
          minute = new Date(val),
          seconds = new Date(val);

      return `${hour.getUTCHours() < 10 ? '00' : ''}:${minute.getMinutes()}:${seconds.getSeconds()}`;
    },

    completedAt(val) {
      let day = new Date(val),
          month = new Date(val),
          year = new Date(val);

      return `${day.getDate()}/${1 + month.getMonth()}/${year.getFullYear()}`
    },

    async getAffixImg(val) {
      let response = apiServices.getAffixImg(val, this.access_token)
        .then(res => res);

      let data = await response.then(res => res);
    },

    async getMemberInfo(val) {
      let response = axios.get(`${val}&access_token=${this.access_token}`)
        .then(res => res.data)

      let data = await response.then(res => res.role.type);
      console.log(data)
      
      return data
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader,
  }
}
</script>


<style lang="sass" scoped>
.playerOne__mythics
  padding: 0 1.4rem
  border-right: 1px solid $blue-4
  height: 100%

  .dungeon-item-title
    display: flex
    justify-content: flex-end
    width: 75%
    font-weight: 200

    h3
      margin: 0 0 0 1rem
      font-weight: 300
      color: $orange-4

    .affix-name
      position: relative
      top: 2px
      color: $cyan-4
      margin: 0 0.3rem
      text-decoration: none

  .timestamps
    width: 25%
    float: left

    p
      margin: 0.2rem 0
      font-weight: 400
      letter-spacing: 1px

    .duration
      color: green

.playerTwo__mythics
  padding: 0 1.4rem
  border-right: 1px solid $blue-4
  height: 100%

  .dungeon-item-title
    display: flex
    justify-content: flex-start
    width: 75%
    font-weight: 200

    h3
      margin: 0 1rem 0 0
      font-weight: 300
      color: $orange-4

    .affix-name
      position: relative
      top: 2px
      color: $cyan-4
      margin: 0 0.3rem
      text-decoration: none

  .timestamps
    float: right

    p
      margin: 0.2rem 0
      font-weight: 400
      letter-spacing: 1px

    .duration
      color: green

.members-list
  display: grid
  grid-template-columns: repeat(5, 1fr)
  margin: 1rem 0 0 0

  li
    border: 1px solid $blue-4
    border-radius: .3rem
    background: $blue-7
    margin: 0 0.5rem
    padding: 0.5rem

    .member-name
      color: $white-2
      margin: 0

    .member-itemlevel
      color: $orange-4
      margin: 0

.mythic-dungeon-item
  margin: 1.3rem
  padding: 0.6rem
  background: $blue-6
  border-radius: 0.4rem
  border: 1px solid $blue-4

.errorMessage
  text-align: center
  font-weight: 300

</style>

