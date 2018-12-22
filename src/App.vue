<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/" class="btn btn--purple">Home</router-link></li>
        <li><router-link to="/comparator" class="btn btn--purple">Compare</router-link></li>
        <li><router-link to="/blog" class="btn btn--purple">Blog</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
html, body
    font-family: 'Roboto', sans-serif
    padding: 0
    margin: 0
    height: 100%
    background-color: $blue-7

#nav
  background: $blue-5
  height: 3.3rem

.btn
  +btn

  &--blue
    +btn--blue

  &--purple
    +btn--purple

ul
  padding: 0
  margin: 0 2rem 0 0
  display: flex
  justify-content: flex-end

li
  margin: 1rem .5rem
  list-style: none

  a
    transition: 0.5s
    &.router-link-exact-active
      background: $active-route
</style>
