<template>
  <!-- The Buttons to change the view in the comparator -->

  <div class="comparator-buttons">
    <div v-for="(button, index) in buttons" :key="index">
      <button v-bind:class="{ 'btn btn--purple unactiveCompButton': !activeButton[index].active, 'btn btn--purple activeCompButton': activeButton[index].active }" @click="showView(index), activateButton(index)">{{button.text}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showView'],

  data() {
    return {
      buttons: [
        {text: "Feed",},
        {text: "Mounts",},
        {text: "Stats",},
        {text: "Progress",},
        {text: "Gear",},
        {text: "Pets",}
      ],
      activeButton: [
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: true },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
      ]
    }
  },

  methods: {
    activateButton(x) {
      this.activeButton.forEach(btn => {
        if (btn.id === x) {
          btn.active = true;
          console.log(x)
        } else {
          btn.active = false;
        }
      })
    }
  }
}
</script>


<style lang="sass" scoped>
.comparator-buttons
  display: flex
  justify-content: space-between
  width: 36%
  margin: 0 auto

  button
    position: relative
    width: 6rem
    &:hover
      top: 1px

  .unactiveCompButton
    transition: all 0.3s

  .activeCompButton
    background: $active-route
    transition: all 0.3s
</style>
