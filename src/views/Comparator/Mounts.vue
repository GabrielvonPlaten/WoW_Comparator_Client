<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="this.$store.state.playerOneMounts">
        <p>{{this.$store.state.playerOneMounts}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="this.$store.state.playerTwoMounts">
        <p>{{this.$store.state.playerTwoMounts}}</p>
      </div>
    </div>
  </div>
</template>