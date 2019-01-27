<template>
  <div id="nav">
      <ul>
        <li><router-link to="/" class="router btn btn--purple"><font-awesome-icon icon="home" /> &nbsp;Home</router-link></li>
        <li><router-link to="/comparator/stats" class="router btn btn--purple"><font-awesome-icon icon="cogs" /> &nbsp;Compare</router-link></li>
      </ul>
    </div>
</template>

<style lang="sass" scoped>
#nav
  background: $blue-5
  height: 3.3rem

ul
  padding: 0
  margin: 0 2rem 0 0
  display: flex
  justify-content: flex-end

li
  margin: 1rem .5rem
  list-style: none

// The styles for the router-links can be found in App.vue
</style>
