<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneStats">
        <playerOneAvatar />
        <span class="baseStat">Base Stat</span>
        <ul>
          <li>Stamina<span class="statNumber">{{ this.$store.state.playerOneStats.stats.sta }}</span></li>
          <li>Strength<span class="statNumber">{{ this.$store.state.playerOneStats.stats.str }}</span></li>
          <li>Agility<span class="statNumber">{{ this.$store.state.playerOneStats.stats.agi }}</span></li>
          <li>Intellect<span class="statNumber">{{ this.$store.state.playerOneStats.stats.int }}</span></li>
          <li>Mastery<span class="statNumber">{{ this.$store.state.playerOneStats.stats.mastery }}</span></li>
          <li>Versatility<span class="statNumber">{{ this.$store.state.playerOneStats.stats.versatility }}</span></li>
          <li>Armor<span class="statNumber">{{ this.$store.state.playerOneStats.stats.armor }}</span></li>
          <li>Haste<span class="statNumber">{{ this.$store.state.playerOneStats.stats.haste }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Defense</span>
          <ul>
            <li>Dodge<span class="statNumber">{{ this.$store.state.playerOneStats.stats.dodge }}</span></li>
            <li>Parry<span class="statNumber">{{ this.$store.state.playerOneStats.stats.parry }}</span></li>
            <li>Block<span class="statNumber">{{ this.$store.state.playerOneStats.stats.block }}</span></li>
          </ul>
        <br>
        <span class="baseStat">Melee / Ranged</span>
        <ul>
          <li>Crit<span class="statNumber">{{ this.$store.state.playerOneStats.stats.crit }}</span></li>
          <li>Haste Rating<span class="statNumber">{{ this.$store.state.playerOneStats.stats.hasteRating }}</span></li>
        </ul>
        <br>
        <span class="baseStat">Caster Info</span>
        <ul>
          <li>MP5 out:<span class="statNumber">{{ this.$store.state.playerOneStats.stats.mana5Combat }}</span></li>
          <li>MP5 in<span class="statNumber">{{ this.$store.state.playerOneStats.stats.mana5 }}</span></li>
          <li>Spell Crit<span class="statNumber">{{ this.$store.state.playerOneStats.stats.spellCrit }}</span></li>
          <li>Spell Crit Rating<span class="statNumber">{{ this.$store.state.playerOneStats.stats.spellCritRating }}</span></li>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoStats">
        <p>{{this.$store.state.playerTwoStats}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import playerOneAvatar from '@/components/OneAvatar.vue';

export default {
  components: {
    playerOneAvatar,
  }
}
</script>


<style lang="sass" scoped>
.baseStat
  color: $white-0
  font-weight: 300
  font-size: 18px
  font-style: italic

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
