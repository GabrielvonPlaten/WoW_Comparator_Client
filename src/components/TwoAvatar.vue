<template>
  <div class="playerTwo_avatar avatar" v-if="twoInfo">
    <img
      class="avatarImg"
      :src="'http://render-' + oneRegion + '.worldofwarcraft.com/character/' + insetAvatar" onerror="`https://us.battle.net/wow/static/images/2d/inset/4-1.jpg`">
      <br>
      <h2>{{twoInfo.name}}</h2>
      <h2>Level: {{twoInfo.level}} - <span :style="{color: classColor[twoInfo.class]}">{{classes[twoInfo.class]}}</span></h2>
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
    twoInfo() {
      return this.$store.state.playerTwoStats
    },

    insetAvatar() {
      return this.twoInfo.thumbnail.replace('avatar.jpg', 'inset.jpg')
    },

    oneRegion() {
      return this.$store.state.playerTwoRegion
    }
  }
}
</script>

<style lang="sass" scoped>
.avatarImg
  border: 1px solid $violet-3
</style>
