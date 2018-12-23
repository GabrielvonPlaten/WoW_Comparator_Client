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

    <div class="line line--vertical line--short line--margin"></div>

    <div class="boxes-container">
      <div class="home-box">
        <h2>API</h2>
        <p>Using Blizzard’s API, you can fetch the data available of any character by searching for its name and realm.</p>
      </div>
      <div class="home-box">
        <h2>DATA</h2>
        <p>Stats, Progress, Loot, Mounts. Receive the same data you have in-game here!</p>
      </div>
      <div class="home-box">
        <h2>COMPARE</h2>
        <p>Compare your character’s data with another character! See how far -- or behind -- you are with your friends!</p>
      </div>
    </div>

    <div class="line line--vertical line--short line--margin"></div>
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
  display: grid
  grid-template-columns: repeat(3, 1fr)
  height: auto
  margin: 4rem 0 4rem 0
  color: $white-1
  text-align: center

  .home-box
    padding: 1rem 2.5rem
    width: 50%
    height: 13rem
    margin: 0rem auto 0 auto
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25)
    background: $blue-5

  h2
    font-size: 1.9rem

  p
    font-size: 1.2rem
</style>


