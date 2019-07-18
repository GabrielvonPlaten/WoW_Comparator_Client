<template>
  <footer>
    <h3>WoW Comparator</h3>
    <p>Created by Gabriel von Platen, {{date}}</p>
    <div class="stack-used">
      <h3>Stack Used</h3>
      <ul class="stack-used__list">
        <li>Vue</li>
        <li>Sass</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/GabrielvonPlaten/WoW_Comparator_Client" target="_blank">Github</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style lang="sass" scoped>
footer
  min-height: 10vh
  text-align: center
  background: $blue-9
  color: $white-3
  padding: 0.5rem 0 1rem 0

  h3
    font-size: 2rem
    margin: 1rem 0
    font-weight: 200

  p
    font-size: 1rem
    margin: 1rem 0

  .stack-used
    border-top: 1px solid $blue-6

    h3
      text-align: center
      font-size: 1.6rem
      font-weight: 200
      margin: 0.4rem 0

    &__list
      margin: 1rem 0
      
      li
        margin: 0 0.6rem
        font-size: 0.9rem
        font-weight: 200
        color: $orange-3

    ul
      margin: 1rem 0 0 0
      padding: 0
      display: flex
      justify-content: center

      li
        text-align: center
</style>

