<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="twoFeed">
        <p>{{twoFeed}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="twoFeed">
        <p>{{twoFeed}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    oneFeed() {
      return this.$store.state.playerOneFeed
    },
    
    twoFeed() {
      return this.$store.state.playerTwoFeed
    }
  },
}
</script>
