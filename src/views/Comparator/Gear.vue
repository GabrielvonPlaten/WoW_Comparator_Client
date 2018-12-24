<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneGear">
        <p>{{this.$store.state.playerOneGear}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoGear">
        <p>{{this.$store.state.playerTwoGear}}</p>
      </div>
    </div>
  </div>
</template>