<template>
  <!-- The Buttons to change the view in the comparator -->

  <div class="comparator-buttons">
    <ul>
      <li v-for="(button, index) in buttons" :key="index">
        <router-link :to="'/comparator/' + button.rName" :class="btnClass">{{button.name}}</router-link>
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
        { id: 0, name: "Talents", rName: "talents", active: false, },
        { id: 1, name: "Mounts", rName: "mounts", active: false, },
        { id: 2, name: "Stats", rName: "stats", active: true, }, // Default comparator router view
        { id: 3, name: "Progress", rName: "progress", active: false, },
        { id: 4, name: "Gear", rName: "gear", active: false,},
        { id: 5, name: "Pets", rName: "pets", active: false,
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
</style>
