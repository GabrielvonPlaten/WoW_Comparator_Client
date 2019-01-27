<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />  
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar,
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

#app
  background: url('./assets/background_dot.svg')
  background-repeat: repeat

::-webkit-scrollbar
    width: 0.8rem

/* Track */
::-webkit-scrollbar-track
    background: $blue-4 
 
/* Handle */
::-webkit-scrollbar-thumb
    background: $violet-7

/* Handle on hover */
::-webkit-scrollbar-thumb:hover
    background: $violet-4

// Lines
.line
  +line
  margin: 70px auto 0 auto

  &--vertical
    +line--vertical(rotate(90deg))

  &--short
    width: 100px

.btn
  +btn

  &--blue
    +btn--blue

  &--purple
    +btn--purple

  &--comparator
    +btn--comparator

.router
  transition: 0.5s
  &.router-link-exact-active
    background: $active-route
    border: 2px solid transparent
  
  &:hover
    background: $hover-route
</style>
