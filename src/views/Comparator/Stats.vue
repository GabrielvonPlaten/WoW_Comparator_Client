<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneStats === false"/>
      <div v-if="oneStats" class="playerOne__stats">
        <playerOneAvatar />
        <h2>Base Stats</h2>
        <ul>
          <li>
            <img :src="Health">
            <span style="color: #27CC4E">Health</span>
            <p class="statNumber">{{ oneHealthSeperator }}</p>
          </li>
          <li>
            <img :src="Stamina">
            <span style="color: #FF8B2D">Stamina</span>
            <p class="statNumber">{{ oneStaminaSeperator }}</p>
          </li>
          <li>
            <img :src="Strength">            
            <span style="color: #F85212">Strength</span>
            <p class="statNumber">{{ oneStrSeperator }}</p></li>
          <li>
            <img :src="Agility">
            <span style="color: #E9E918">Agility</span>
            <p class="statNumber">{{ oneAgilitySeperator }}</p></li>
          <li>
            <img :src="Intellect">
            <span style="color: #1C8AFF">Intellect</span>
            <p class="statNumber">{{ oneIntSeperator }}</p></li>
          <li>
            <img :src="Mastery">
            <span style="color: #FD44E7">Mastery</span>
            <p class="statNumber">{{ oneMasteryFloor }}%</p></li>
          <li>
            <img :src="Versatility">
            <span style="color: #D3D1D1">Versatility</span>
            <p class="statNumber">{{ oneVersatilityFloort }}%</p></li>
          <li>
            <img :src="Armor">
            <span style="color: #8D7EFF">Armor</span>
            <p class="statNumber">{{ oneArmorSeperator }}</p></li>
          <li>
            <img :src="Haste">
            <span style="color: #0ED59B">Haste</span>
            <p class="statNumber">{{ oneHasteFloort }}%</p></li>
          <li>    
            <img :src="Crit">
            <span style="color: #FF000C">Crit</span>
            <p class="statNumber">{{ oneCritFloort }}%</p></li>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoStats === false"/>
      <div v-if="twoStats" class="playerTwo__stats">
        <playerTwoAvatar />
        <span class="baseStat">Base Stat</span>
        <ul>
          <li>Stamina<span class="statNumber">{{ twoStats.stats.sta }}</span></li>
          <li>Strength<span class="statNumber">{{ twoStats.stats.str }}</span></li>
          <li>Agility<span class="statNumber">{{ twoStats.stats.agi }}</span></li>
          <li>Intellect<span class="statNumber">{{ twoStats.stats.int }}</span></li>
          <li>Mastery<span class="statNumber">{{ twoStats.stats.mastery }}</span></li>
          <li>Versatility<span class="statNumber">{{ twoStats.stats.versatility }}</span></li>
          <li>Armor<span class="statNumber">{{ twoStats.stats.armor }}</span></li>
          <li>Haste<span class="statNumber">{{ twoStats.stats.haste }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Defense</span>
          <ul>
            <li>Dodge<span class="statNumber">{{ twoStats.stats.dodge }}</span></li>
            <li>Parry<span class="statNumber">{{ twoStats.stats.parry }}</span></li>
            <li>Block<span class="statNumber">{{ twoStats.stats.block }}</span></li>
          </ul>
        <br>
        <span class="baseStat">Melee / Ranged</span>
        <ul>
          <li>Crit<span class="statNumber">{{ twoStats.stats.crit }}</span></li>
          <li>Haste Rating<span class="statNumber">{{ twoStats.stats.hasteRating }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Caster Info</span>
        <ul>
          <li>MP5 out:<span class="statNumber">{{ twoStats.stats.mana5Combat }}</span></li>
          <li>MP5 in<span class="statNumber">{{ twoStats.stats.mana5 }}</span></li>
          <li>Spell Crit<span class="statNumber">{{ twoStats.stats.spellCrit }}</span></li>
          <li>Spell Crit Rating<span class="statNumber">{{ twoStats.stats.spellCritRating }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

import Agility from '@/assets/stats/Agility.svg';
import Armor from '@/assets/stats/Armor.svg';
import Crit from '@/assets/stats/Crit.svg';
import Haste from '@/assets/stats/Haste.svg';
import Health from '@/assets/stats/Health.svg';
import Intellect from '@/assets/stats/Intellect.svg';
import Mastery from '@/assets/stats/Mastery.svg';
import Stamina from '@/assets/stats/Stamina.svg';
import Strength from '@/assets/stats/Strength.svg';
import Versatility from '@/assets/stats/Versatility.svg';

export default {
  data() {
    return {
      Agility,
      Armor,
      Crit,
      Haste,
      Health,
      Intellect,
      Mastery,
      Stamina,
      Strength,
      Versatility,
    }
  },

  computed: {
    oneStats() {
      return this.$store.state.playerOneStats
    },
    
    twoStats() {
      return this.$store.state.playerTwoStats
    },

    oneMasteryFloor() {
      return Math.floor(this.oneStats.stats.mastery)
    },

    oneCritFloort() {
      return Math.floor(this.oneStats.stats.crit)
    },

    oneHasteFloort() {
      return Math.floor(this.oneStats.stats.haste)
    },

    oneVersatilityFloort() {
      return Math.floor(this.oneStats.stats.versatilityDamageDoneBonus)
    },

    oneHealthSeperator() {
      return this.oneStats.stats.health.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    oneIntSeperator() {
      return this.oneStats.stats.int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    oneStrSeperator() {
      return this.oneStats.stats.str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    oneAgilitySeperator() {
      return this.oneStats.stats.agi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    oneArmorSeperator() {
      return this.oneStats.stats.armor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    oneStaminaSeperator() {
      return this.oneStats.stats.sta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
.playerOne__stats
  padding: 0 3.4rem
  border-right: 1px solid $blue-4

  h2
    font-weight: 300
    color: $white-1
    margin: 0.5rem 0

.compViews__playerOne
  ul
    display: grid
    grid-template-columns: repeat(4, 1fr) 
    grid-gap: 0.7rem
    padding-top: 1rem
    border:
      top: 1px solid $blue-4
      bottom: 1px solid $blue-4

    li
      color: $white-0
      padding: 10px
      width: 90%
      font-size: 1em
      font-weight: 500
      letter-spacing: 1px
      float: right

      img
        float: left
        margin-right: 0.5rem

      span
        margin-top: 0.1rem
        // color: $cyan-4

      .statNumber
        font-size: 0.9rem
        font-weight: 300
        position: relative
        bottom: 0.6rem

.playerTwo__stats
  padding: 0 3.4rem
  border-left: 1px solid $blue-4

.compViews__playerTwo

  ul
    li
      color: $white-0
      background-color: $blue-6
      padding: 10px
      width: 100%
      margin-top: 10px
      font-size: 1.2em
      text-align: right
      float: left
      list-style-position: inside
      &:hover
        background-color: $blue-5

      .statNumber
        float: left
        color: $cyan-4
</style>
