<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneFeed">
        <p>{{this.$store.state.playerOneFeed}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoFeed">
        <p>{{this.$store.state.playerTwoFeed}}</p>
      </div>
    </div>
  </div>
</template>