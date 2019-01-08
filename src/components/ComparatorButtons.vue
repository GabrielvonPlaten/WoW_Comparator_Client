<template>
  <!-- The Buttons to change the view in the comparator -->

  <div class="comparator-buttons">
    <ul>
      <li><router-link to="/comparator/feed" class="router btn btn--purple">Feed</router-link></li>
      <li><router-link to="/comparator/mounts" class="router btn btn--purple">Mounts</router-link></li>
      <li><router-link to="/comparator/stats" class="router btn btn--purple">Stats</router-link></li>
      <li><router-link to="/comparator/progress" class="router btn btn--purple">Progress</router-link></li>
      <li><router-link to="/comparator/gear" class="router btn btn--purple">Gear</router-link></li>
      <li><router-link to="/comparator/pets" class="router btn btn--purple">Pets</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['showView'],

  data() {
    return {
    }
  },

}
</script>


<style lang="sass" scoped>
.comparator-buttons
  width: 30%
  margin: 0 auto

  ul
    padding: 0
    margin: 0
    list-style: none
    display: flex

    li
      text-align: center

      a
        padding: 0.3rem 1.2rem
</style>
