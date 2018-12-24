<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneStats">
        <p>{{this.$store.state.playerOneStats}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoStats">
        <p>{{this.$store.state.playerTwoStats}}</p>
      </div>
    </div>
  </div>
</template>