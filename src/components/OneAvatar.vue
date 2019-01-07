<template>
  <div class="playerOne_avatar avatar">
    <!-- <h2>Hello Avatar</h2> -->
    <!-- <img :src="dynamicAvatarImage" @error="this.src = backdropAvatarImage"> -->
    <img :src="'http://render-eu.worldofwarcraft.com/character/' + store.state.playerOneStats.thumbnail" >
      <br>
      <h2>{{store.state.playerOneStats.name}}</h2>
      <h2>Level: {{store.state.playerOneStats.level}} - <span :style="{color: classColor[store.state.playerOneStats.class]}">{{classes[store.state.playerOneStats.class]}}</span></h2>
  </div>
</template>

<script>
import store from '../Vuex/store.js';

export default {
  data() {
    return {
      classes: ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'],

      classColor: ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'],
    }
  }
}
</script>
