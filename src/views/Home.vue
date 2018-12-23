<template>
  <div>
    <div class="jumbotron">
      <div class="jumbotron__container">
        <h1>WoW Comparator</h1>
        <p>Compare your World of Warcraft character’s stats, gear, mounts, and progress with other’s peoples characters!</p>
        <br>
        <router-link to="/comparator" class="btn btn--purple">Start Comparing!</router-link>
        <br>
      </div>
    </div>
    <div class="boxes-container">

    </div>
  </div>
</template>

<style lang="sass" scoped>
.jumbotron
  padding: 1px 0
  height: 40rem

  background: url('../assets/world_of_warcraft_wrath_of_the_lich_king-1920x1080.jpg')
  background-repeat: no-repeat
  background-color: $blue-7
  background-blend-mode: soft-light
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

  &__container
    margin: 9% auto 0 auto
    text-align: center
    color: $white-0

    h1
      font-weight: normal
      font-size: 2.6rem

    p
      font-weight: 200
      font-size: 1.3rem
      max-width: 25%
      margin: 0 auto 2rem auto

.boxes-container
  height: 60rem
  background: url('../assets/background_shape.svg')
  background-repeat: no-repeat
  background-position: 0% 50%
</style>


