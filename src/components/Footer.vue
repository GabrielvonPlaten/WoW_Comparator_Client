<template>
  <footer>
    <h3>WoW Comparator</h3>
    <p>Website made by Gabriel von Platen, {{date}}</p>
    <ul>
      <li><router-link to="/login" class="btn btn--purple">Admin</router-link></li>
    </ul>
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
  text-align: center
  background: $blue-5
  color: $white-3
  padding: 1rem 0

  h3
    font-size: 2rem

  p
    font-size: 1.1rem
</style>

