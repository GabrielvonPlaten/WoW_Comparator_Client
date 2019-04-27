<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <!-- <Footer />   -->
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar,
  },

}
</script>


<style lang="sass">
html, body
    font-family: 'Roboto', sans-serif
    padding: 0
    margin: 0
    height: 100%
    background-color: $blue-7

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

  &--green
    +btn--green

  &--red
    +btn--red

  &--purple
    +btn--purple

  &--comparator
    +btn--comparator

  &--grid
    +btn--grid

.router
  padding: 0.3rem 0.5rem
  font-size: 0.9rem
  text-transform: none
  transition: 0.4s
  &.router-link-exact-active
    background: $active-route
    border: 2px solid transparent
  
  &:hover
    background: $hover-route

a
  color: $cyan-4
</style>
