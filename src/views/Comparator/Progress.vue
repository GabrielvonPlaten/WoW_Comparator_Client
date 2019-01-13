<template>
  <div>
    <div class="compViews__playerOne">
      <div v-if="oneProg">
        <p>{{oneProg}}</p>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <div v-if="twoProg">
        <p>{{twoProg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    oneProg() {
      return this.$store.state.playerOneProg
    },

    twoProg() {
      return this.$store.state.playerTwoProg
    }
  }
}
</script>
