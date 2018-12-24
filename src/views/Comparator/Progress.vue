<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneProg">
        <p>{{this.$store.state.playerOneProg}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoProg">
        <p>{{this.$store.state.playerTwoProg}}</p>
      </div>
    </div>
  </div>
</template>