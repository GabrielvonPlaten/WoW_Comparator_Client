<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneStats === false"/>
      <div class="playerOne__mythics" v-if="oneStats">
        <playerOneAvatar />

        <div
          class="player_roles" 
          v-if="oneScores">
          <div class="player_roles_header">
            <h3>All Mythic+ Runs During Season {{seasonNumberPlayerOne}}</h3>

            <div class="season_buttons">
              <label>Seasons - </label>
              <button class="btn btn--blue" @click="changeSeason(1, 0)">1</button>
              <button class="btn btn--blue" @click="changeSeason(2, 0)">2</button>
            </div>
          </div>

          <a target="_blank" :href="oneScores.profile_url">
            <img class="third_party_logos" :src="raiderioLogo">
          </a>
          <a target="_blank" :href="'https://www.raidbots.com/simbot/quick?region=eu&realm=' + oneScores.realm + '&name=' + oneScores.name">
            <img class="third_party_logos" :src="raidbotsIcon">
          </a>

          <span v-if="oneScores.mythic_plus_scores_by_season[0].scores.dps">
            <img class="player_roles_icon" :src="dps">
            {{oneScores.mythic_plus_scores_by_season[0].scores.dps}}
          </span>
          <span v-if="oneScores.mythic_plus_scores_by_season[0].scores.healer">
            <img class="player_roles_icon" :src="healer">
            {{oneScores.mythic_plus_scores_by_season[0].scores.healer}}
          </span>
          <span v-if="oneScores.mythic_plus_scores_by_season[0].scores.tank">
            <img class="player_roles_icon" :src="tank">
            {{oneScores.mythic_plus_scores_by_season[0].scores.tank}}
          </span>
          <span class="tooltip">
            <font-awesome-icon icon="exclamation-circle" />
            <span class="tooltiptext">The score numbers are for this current season.</span>
          </span>
        </div>
        <ul>
          <li
            class="mythic-dungeon-item" 
            v-for="(run, index) in getRunsOne" :key="index">
            <div class="timestamps">
              <p class="dungeon-timestamp">{{completedAt(run.completed_timestamp)}}</p>
              <p :class="{withinTimeRun: run.is_completed_within_time, failedRun: !run.is_completed_within_time}">{{durationTime(run.duration)}}</p>
            </div>
            <div class="dungeon-item-title">
              <span v-for="(affix, j) in run.keystone_affixes" :key="j">
                <a
                  class="affix-name" 
                  :href="'https://wowhead.com/affix=' + affix.id">  
                  <div v-if="affix.id === 117">
                    <img class="affix-image" :src="affixIcons[17].icon">
                  </div>
                  <div v-else>
                    <img class="affix-image" :src="affixIcons[affix.id].icon">
                  </div>
                </a>
              </span>
              <h3>{{run.dungeon.name}}
                <span> +{{run.keystone_level}}</span>
              </h3>
            </div>
            <br>
            <div class="dungeon-members">
              <ul class="members-list">
                <li v-for="(m, index) in run.members" :key="index">
                  <p
                    class="member-name" 
                    :class="{sameMember: m.character.name === oneStats.name}">{{m.character.name}} - <span class="character-realm">{{m.character.realm.slug}}</span></p>
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


        <div
          class="player_roles" 
          v-if="twoScores">
          <div class="player_roles_header">
            <h3>All Mythic+ Runs During Season {{seasonNumberPlayerTwo}}</h3>

            <div class="season_buttons">
              <label>Seasons - </label>
              <button class="btn btn--blue" @click="changeSeason(1, 1)">1</button>
              <button class="btn btn--blue" @click="changeSeason(2, 1)">2</button>
            </div>
          </div>

          <a target="_blank" :href="twoScores.profile_url">
            <img class="third_party_logos" :src="raiderioLogo">
          </a>
          <a target="_blank" :href="'https://www.raidbots.com/simbot/quick?region=eu&realm=' + twoScores.realm + '&name=' + twoScores.name">
            <img class="third_party_logos" :src="raidbotsIcon">
          </a>

          <span v-if="twoScores.mythic_plus_scores_by_season[0].scores.dps">
            <img class="player_roles_icon" :src="dps">
            {{twoScores.mythic_plus_scores_by_season[0].scores.dps}}
          </span>
          <span v-if="twoScores.mythic_plus_scores_by_season[0].scores.healer">
            <img class="player_roles_icon" :src="healer">
            {{twoScores.mythic_plus_scores_by_season[0].scores.healer}}
          </span>
          <span v-if="twoScores.mythic_plus_scores_by_season[0].scores.tank">
            <img class="player_roles_icon" :src="tank">
            {{twoScores.mythic_plus_scores_by_season[0].scores.tank}}
          </span>
          <span class="tooltip">
            <font-awesome-icon icon="exclamation-circle" />
            <span class="tooltiptext">The score numbers are for this current season.</span>
          </span>
        </div>
        <ul>
          <li
            class="mythic-dungeon-item" 
            v-for="(run, index) in getRunsTwo" :key="index">
            <div class="timestamps">
              <p class="dungeon-timestamp">{{completedAt(run.completed_timestamp)}}</p>
              <p :class="{withinTimeRun: run.is_completed_within_time, failedRun: !run.is_completed_within_time}">{{durationTime(run.duration)}}</p>
            </div>
            <div class="dungeon-item-title">
              <h3>{{run.dungeon.name}}
                <span> +{{run.keystone_level}}</span>
              </h3>
              <span v-for="(affix, j) in run.keystone_affixes" :key="j">
                <a
                  class="affix-name" 
                  :href="'https://wowhead.com/affix=' + affix.id">  
                  <div v-if="affix.id === 117">
                    <img class="affix-image" :src="affixIcons[17].icon">
                  </div>
                  <div v-else>
                    <img class="affix-image" :src="affixIcons[affix.id].icon">
                  </div>
                </a>
              </span>
            </div>
            <br>
            <div class="dungeon-members">
              <ul class="members-list">
                <li v-for="(m, index) in run.members" :key="index">
                  <p
                    class="member-name" 
                    :class="{sameMember: m.character.name === twoStats.name}">{{m.character.name}} - <span class="character-realm">{{m.character.realm.slug}}</span></p>
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

// Player Roles
import flag from '@/assets/mythics/roles/flag.png'
import dps from '@/assets/mythics/roles/role_dps.png'
import healer from '@/assets/mythics/roles/role_healer.png'
import tank from '@/assets/mythics/roles/role_tank.png'

import raiderioLogo from '@/assets/third_party_logos/Icon_WhiteOnBlack.png';
import raidbotsIcon from '@/assets/third_party_logos/raidbots-icon.png';

// Mythic Affices
import Overflowing from '@/assets/mythics/1_affix_icon.jpg'
import Skittish from '@/assets/mythics/2_affix_icon.jpg'
import Volcanic from '@/assets/mythics/3_affix_icon.jpg'
import Necrotic from '@/assets/mythics/4_affix_icon.jpg'
import Teeming from '@/assets/mythics/5_affix_icon.jpg'
import Raging from '@/assets/mythics/6_affix_icon.jpg'
import Bolstering from '@/assets/mythics/7_affix_icon.jpg'
import Sanguine from '@/assets/mythics/8_affix_icon.jpg'
import Tyrannical from '@/assets/mythics/9_affix_icon.jpg'
import Fortified from '@/assets/mythics/10_affix_icon.jpg'
import Bursting from '@/assets/mythics/11_affix_icon.jpg'
import Grievous from '@/assets/mythics/12_affix_icon.jpg'
import Explosive from '@/assets/mythics/13_affix_icon.jpg'
import Quaking from '@/assets/mythics/14_affix_icon.jpg'
import Relentless from '@/assets/mythics/15_affix_icon.jpg'
import Infested from '@/assets/mythics/16_affix_icon.jpg'
import Reaping from '@/assets/mythics/117_affix_icon.jpg'

export default {
  data() {
    return {
      access_token: "",
      memberRole: [],
      affixIcons: [
        {},
        { id: 1, icon: Overflowing },
        { id: 2, icon: Skittish },
        { id: 3, icon: Volcanic },
        { id: 4, icon: Necrotic },
        { id: 5, icon: Teeming },
        { id: 6, icon: Raging },
        { id: 7, icon: Bolstering },
        { id: 8, icon: Sanguine },
        { id: 9, icon: Tyrannical },
        { id: 10, icon: Fortified },
        { id: 11, icon: Bursting },
        { id: 12, icon: Grievous },
        { id: 13, icon: Explosive },
        { id: 14, icon: Quaking },
        { id: 15, icon: Relentless },
        { id: 16, icon: Infested },
        { id: 117, icon: Reaping },
      ],
      flag,
      tank,
      healer,
      dps,

      seasonNumberPlayerOne: 2,
      seasonNumberPlayerTwo: 2,

      raiderioLogo,
      raidbotsIcon,

      selectedAffixIcon: null
    }
  },

  created() {
    let url = '/api/comparator/'
    axios.get(url)
      .then(res => {
        this.access_token = res.data.access_token
      })
  },

  computed: {
    // For some reason this has to return the stats
    // otherwise the rendering will bug out
    oneStats() {
      return store.state.playerOneStats
    },

    oneScores() {
      return store.state.playerOneMythicScore
    },

    twoStats() {
      return store.state.playerTwoStats
    },

    twoScores() {
      return store.state.playerTwoMythicScore
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

    getAffixImg(id) {
      let icon = this.affixIcons.map((i, index) => {
        if (i.id === id) {
          return i.icon
        }
      });
      console.log(icon)
      return icon
    },

    async getMemberInfo(val) {
      let response = axios.get(`${val}&access_token=${this.access_token}`)
        .then(res => res.data)

      let data = await response.then(res => res.role.type);
      console.log(data)
      
      return data
    },

    async changeSeason(season_number, player) {

      // 0 is Player 1
      if (player === 0) {
        let { realm, name, region } = this.oneScores;
        let access_token = this.access_token;

        await store.dispatch('playerOneMythicData', {region, season_number, token: access_token, realm: realm.toLowerCase(), name: name.toLowerCase()})
        this.seasonNumberPlayerOne = season_number;

      } else {
        let { realm, name, region } = this.twoScores;
        let access_token = this.access_token;

        await store.dispatch('playerTwoMythicData', {region, season_number, token: access_token, realm: realm.toLowerCase(), name: name.toLowerCase()})
        this.seasonNumberPlayerTwo = season_number
      }
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
      margin: 0 1rem
      font-weight: 200
      color: $orange-3
      font-size: 1.3rem

  .timestamps
    width: 25%
    float: left

    p
      margin: 0.2rem 0.8rem
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
      margin: 0 1rem
      font-weight: 200
      color: $orange-3
      font-size: 1.3rem

  .timestamps
    float: right

    p
      margin: 0.2rem 0.8rem
      font-weight: 400
      letter-spacing: 1px

    .duration
      color: green

.mythic-dungeon-item
  margin: 1.1rem
  padding: 0.6rem
  background: $blue-9
  border: 1px solid $blue-4
  box-shadow: $box-shadow-3

.affix-name
  position: relative
  top: 2px
  color: $cyan-4
  text-decoration: none

  div
    margin: 0
    
  img
    border: 2px solid $blue-4
    position: relative
    bottom: 0.4rem
    margin: 0 0.6rem
    height: 2rem

.members-list
  display: grid
  grid-template-columns: repeat(5, 1fr)
  margin: 1rem 0 0 0

  li
    border: 1px solid $blue-4
    background: $blue-6
    margin: 0 0.3rem
    padding: 0.5rem
    max-height: 5rem
    min-height: 5rem

    .member-name
      color: $white-1
      margin: 0

    .character-realm
      color: $white-1
      text-transform: capitalize

    .sameMember
      color: $orange-2

    .member-itemlevel
      color: $yellow-5
      margin: 0

.player_roles
  margin: 1.1rem
  border-bottom: 1px solid $blue-4
  padding: 0.6rem
  text-shadow: $text-shadow

  h3
    font-weight: 200
    margin: 0
    padding: 0

  span
    font-size: 1.1rem
    margin-right: 1rem

  .player_roles_icon
    width: 2rem
    position: relative
    top: 0.6rem

  .third_party_logos
    float: right
    height: 1.8rem
    margin-left: 0.5rem
    position: relative
    top: 0.6rem

.player_roles_header
  display: flex 
  justify-content: start

  .season_buttons
    margin: 0 1rem
    color: $white-3

  button
    background: none
    border: 2px solid $blue-4
    transition: all 0.3s
    min-width: 3rem 
    &:hover
      background: $blue-8

.tooltip
  color: $blue-4

  .tooltiptext
    color: $white-4
    margin-left: 0.4rem
    opacity: 0
    visibility: hidden
    padding: 0.4rem 0.1rem
    font-size: 1rem
    content: ""

    transition: all 0.3s

.tooltip:hover .tooltiptext
  opacity: 1
  visibility: visible

.withinTimeRun
  color: $green-4

.failedRun
  color: $red-4

.errorMessage
  text-align: center
  font-weight: 300


</style>

