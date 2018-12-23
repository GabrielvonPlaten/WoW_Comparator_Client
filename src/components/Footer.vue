<template>
  <footer>
    <h3>WoW Comparator</h3>
    <p>Website made by Gabriel von Platen, {{date}}</p>
    <router-link to="/login" class="btn btn--purple">Admin</router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  }
}
</script>

<style lang="sass" scoped>
footer
  margin-top: 4.5rem
  text-align: center
  background: $blue-5
  color: $white-3
  padding: 1rem 0
  height: 11rem

  h3
    font-size: 2rem

  p
    font-size: 1.1rem
</style>

