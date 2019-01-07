<template>
  <div class="playerTwo_avatar avatar" v-if="this.$store.state.playerTwoStats">
    <img 
      :src="'http://render-eu.worldofwarcraft.com/character/' + this.$store.state.playerTwoStats.thumbnail" onerror="`https://us.battle.net/wow/static/images/2d/avatar/4-1.jpg`">
      <br>
      <h2>{{this.$store.state.playerTwoStats.name}}</h2>
      <h2>Level: {{this.$store.state.playerTwoStats.level}} - <span :style="{color: classColor[this.$store.state.playerTwoStats.class]}">{{classes[this.$store.state.playerTwoStats.class]}}</span></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'],

      classColor: ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'],
    }
  }
}
</script>