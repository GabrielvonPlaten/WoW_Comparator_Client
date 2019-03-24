<template>
  <div id="nav">
    <ul>
      <li><router-link to="/" class="router btn btn--purple">Home</router-link></li>
      <li><router-link to="/comparator/stats" class="router btn btn--purple">Compare</router-link></li>
    </ul>
    </div>
</template>

<style lang="sass" scoped>
#nav
  height: 3.6rem
  background-color: $blue-7

  ul
    padding: 0
    margin: 0 2rem 0 0
    display: flex
    justify-content: flex-end

  li
    margin: 1.2rem .5rem
    list-style: none

// The styles for the router-links can be found in App.vue
</style>
