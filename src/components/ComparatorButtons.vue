<template>
  <!-- The Buttons to change the view in the comparator -->

  <div class="comparator-buttons">
    <ul>
      <li v-for="(button, index) in buttons" :key="index">
        <router-link :to="'/compare/' + button.rName" :class="btnClass" v-text="button.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {
      btnClass: "router btn btn--comparator",
      buttons: [
        { id: 0, name: "Gear", rName: "gear", active: false,},
        { id: 1, name: "Raids", rName: "raids", active: false, },
        { id: 2, name: "Mythics", rName: "mythics", active: false, },
        { id: 3, name: "Stats", rName: "stats", active: true, }, // Default comparator router view
        { id: 4, name: "Talents", rName: "talents", active: false, },
        { id: 5, name: "Mounts", rName: "mounts", active: false, },
        { id: 6, name: "Pets", rName: "pets", active: false,
        }
      ]
    }
  },

  methods: {
    activeRoute(x) {
      this.buttons.forEach(button => {
        if (button.id === x) {
          button.active = true;
        } else {
          button.active = false;
        }
      })
    }
  }

}
</script>


<style lang="sass" scoped>
.comparator-buttons
  width: 30%
  margin: 0 auto

  ul
    padding: 0
    margin: 0
    list-style: none
    display: flex
    justify-content: space-around

    li
      text-align: center

      a
        padding: 0.3rem 1.2rem
        font-size: 16px

@media only screen and (max-width: 820px)
  .comparator-buttons
    width: 20%
    margin: 0 auto

    ul

      li

        a
          padding: 0.3rem 0.8rem
          font-size: 14px
</style>
