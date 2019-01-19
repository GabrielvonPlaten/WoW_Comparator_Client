<template>
  <div class="playerOne_avatar avatar" v-if="oneInfo">
    <img 
      :src="'http://render-' + oneRegion + '.worldofwarcraft.com/character/' + oneInfo.thumbnail" onerror="`https://us.battle.net/wow/static/images/2d/avatar/4-1.jpg`">
      <br>
      <h2>{{oneInfo.name}}</h2>
      <h2>Level: {{oneInfo.level}} - <span :style="{color: classColor[oneInfo.class]}">{{classes[oneInfo.class]}}</span></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'],

      classColor: ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'],
    }
  },

  computed: {
    oneInfo() {
      return this.$store.state.playerOneStats
    },

    oneRegion() {
      return this.$store.state.playerOneRegion
    }
  }
}
</script>
