<template>
  <div class="playerTwo_avatar avatar" v-if="twoInfo">
    <img
      class="avatarImg"
      ref="img"
      :src="'http://render-' + oneRegion + '.worldofwarcraft.com/character/' + insetAvatar" @error="changeAvatarUrl(twoInfo.race, twoInfo.gender)">
      <h2>{{twoInfo.name}}</h2>
      <h2>{{twoInfo.guild}}</h2>
      <h2>{{twoInfo.level}} - <span :style="{color: classColor[twoInfo.class]}">{{classes[twoInfo.class]}}</span></h2>
      <p class="lastUpdated">{{lastModified}}</p>
  </div>
</template>

<script>
import store from '@/Vuex/store';

export default {
  data() {
    return {
      lastModified: "",
      classes: ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'],

      classColor: ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'],
    }
  },

  computed: {
    twoInfo() {
      // Format the Unix Timestamp into DD/MM/YYYY date format
      let d = store.state.playerTwoStats.lastModified; // Unix Timestamp
      let day = new Date(d);
      let month = new Date(d);
      let year= new Date(d);

      this.lastModified = `Last activity: ${day.getDate()}/${1 + month.getMonth()}/${year.getFullYear()}`
      return store.state.playerTwoStats
    },

    insetAvatar() {
      // inset.jpg is a bigger version of the player avatar image
      return this.twoInfo.thumbnail.replace('avatar.jpg', 'inset.jpg')
    },

    oneRegion() {
      return store.state.playerTwoRegion
    },
  },

  methods: {
    changeAvatarUrl(race, gender) {
      this.$refs.img.src = `https://us.battle.net/wow/static/images/2d/inset/${race}-${gender}.jpg`
    }
  }
}
</script>

<style lang="sass" scoped>
.playerTwo_avatar
  margin-top: 1.2rem

  h2
    margin: 0.2rem 0

  .lastUpdated
    color: $white-3

.avatarImg
  border: 1px solid $violet-3

// Media Queris
@media only screen and (max-width: 748px) 
  .avatarImg
    width: 45%
</style>
