<template>
  <div class="comparator-buttons" id="js-buttons">
    <button class="btn btn--purple" @click="showView(1)">Feed</button>
    <button class="btn btn--purple" @click="showView(2)">Mounts</button>
    <button class="btn btn--purple" @click="showView(3)">Stats</button>
    <button class="btn btn--purple" @click="showView(4)">Progress</button>
    <button class="btn btn--purple" @click="showView(5)">Gear</button>
    <button class="btn btn--purple" @click="showView(6)">Pets</button>
  </div>
</template>

<script>
export default {
  props: ['showView'],
}
</script>


<style lang="sass" scoped>
.comparator-buttons
  text-align: center

  button
    position: relative
    &:hover
      top: 1px
</style>
