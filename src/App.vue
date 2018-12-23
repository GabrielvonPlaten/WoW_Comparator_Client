<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/" class="btn btn--purple"><font-awesome-icon icon="home" /> &nbsp;Home</router-link></li>
        <li><router-link to="/comparator" class="btn btn--purple"><font-awesome-icon icon="cogs" /> &nbsp;Compare</router-link></li>
        <li><router-link to="/blog" class="btn btn--purple"><font-awesome-icon icon="book" /> &nbsp;Blog</router-link></li>
      </ul>
    </div>
    <router-view/>
    <Footer />  
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  }
}
</script>


<style lang="sass">
html, body
    font-family: 'Roboto', sans-serif
    padding: 0
    margin: 0
    height: 100%
    background-color: $blue-7

::-webkit-scrollbar
    width: 7px

/* Track */
::-webkit-scrollbar-track
    background: $blue-4 
 
/* Handle */
::-webkit-scrollbar-thumb
    background: $violet-8

/* Handle on hover */
::-webkit-scrollbar-thumb:hover
    background: $violet-5

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
    
    &:hover
      background: $hover-route
</style>
