<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneStats === false"/>
      <div v-if="oneStats" class="playerOne__stats">
        <playerOneAvatar />
        <span class="baseStat">Base Stat</span>
        <ul>
          <li>Stamina<span class="statNumber">{{ oneStats.stats.sta }}</span></li>
          <li>Strength<span class="statNumber">{{ oneStats.stats.str }}</span></li>
          <li>Agility<span class="statNumber">{{ oneStats.stats.agi }}</span></li>
          <li>Intellect<span class="statNumber">{{ oneStats.stats.int }}</span></li>
          <li>Mastery<span class="statNumber">{{ oneStats.stats.mastery }}</span></li>
          <li>Versatility<span class="statNumber">{{ oneStats.stats.versatility }}</span></li>
          <li>Armor<span class="statNumber">{{ oneStats.stats.armor }}</span></li>
          <li>Haste<span class="statNumber">{{ oneStats.stats.haste }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Defense</span>
          <ul>
            <li>Dodge<span class="statNumber">{{ oneStats.stats.dodge }}</span></li>
            <li>Parry<span class="statNumber">{{ oneStats.stats.parry }}</span></li>
            <li>Block<span class="statNumber">{{ oneStats.stats.block }}</span></li>
          </ul>
        <br>
        <span class="baseStat">Melee / Ranged</span>
        <ul>
          <li>Crit<span class="statNumber">{{ oneStats.stats.crit }}</span></li>
          <li>Haste Rating<span class="statNumber">{{ oneStats.stats.hasteRating }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Caster Info</span>
        <ul>
          <li>MP5 out:<span class="statNumber">{{ oneStats.stats.mana5Combat }}</span></li>
          <li>MP5 in<span class="statNumber">{{ oneStats.stats.mana5 }}</span></li>
          <li>Spell Crit<span class="statNumber">{{ oneStats.stats.spellCrit }}</span></li>
          <li>Spell Crit Rating<span class="statNumber">{{ oneStats.stats.spellCritRating }}</span></li>
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

export default {
  computed: {
    oneStats() {
      return this.$store.state.playerOneStats
    },
    
    twoStats() {
      return this.$store.state.playerTwoStats
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
.baseStat
  color: $white-0
  font-weight: 300
  font-size: 18px
  font-style: italic

.playerOne__stats
  padding: 0 3.4rem
  border-right: 1px solid $blue-4

.compViews__playerOne
  ul
    li
      color: $white-0
      background-color: $blue-6
      padding: 10px
      width: 100%
      margin-top: 10px
      font-size: 1.2em
      &:hover
        background-color: $blue-5

      .statNumber
        float: right
        color: $cyan-4

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
      list-style-position: inside
      &:hover
        background-color: $blue-5

      .statNumber
        float: left
        color: $cyan-4
</style>
