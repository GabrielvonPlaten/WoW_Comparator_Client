<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneProg === false"/>
      <div class="playerOne__mythics" v-if="oneProg">
        <playerOneAvatar />
      </div>
    </div>

    <div class="compViews__playerOne">
      <Loader v-if="twoProg === false"/>
      <div class="playerTwo__mythics" v-if="twoProg">
        <playerTwoAvatar />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store'
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {
  computed: {
    oneProg() {
      return store.state.playerOneProg
    },

    twoProg() {
      return store.state.playerTwoProg
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader,
  }
}
</script>

