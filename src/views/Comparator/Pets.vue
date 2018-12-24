<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOnePets">
        <p>{{this.$store.state.playerOnePets}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoPets">
        <p>{{this.$store.state.playerTwoPets}}</p>
      </div>
    </div>
  </div>
</template>