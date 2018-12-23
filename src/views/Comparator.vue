<template>
  <div class="comparator">
    <div class="comparator-form">
      <form class="form form-playerOne">
        <label>Player One</label><br>
        <input type="text" placeholder="Realm"><br>
        <input type="text" placeholder="Character">
        <button @click.prevent="getPlayerOneData" class="btn btn--blue btn-playerOne">Search</button>
      </form>
      <form class="form form-playerTwo">
        <label>Player Two</label><br>
        <input type="text" placeholder="Realm"><br>
        <input type="text" placeholder="Character">
        <button @click.prevent="getPlayerTwoData" class="btn btn--blue btn-playerTwo">Search</button>
      </form>
    </div>

    <ComparatorButtons :showView="showView"/>

    <div class="comparator-views">
      <div v-show="views[1].show" class="feed">Feed</div>
      <div v-show="views[2].show" class="mounts">Mounts</div>
      <div v-show="views[3].show" class="stats">Stats</div>
      <div v-show="views[4].show" class="progress">Progression</div>
      <div v-show="views[5].show" class="gear">Gear</div>
      <div v-show="views[6].show" class="pets">Pets</div>
    </div>
  </div>
</template>

<script>
import ComparatorButtons from '@/components/ComparatorButtons.vue';

export default {
  data() {
    return {
      views: [
        {},
        {
          id: 1,
          name: 'Feed',
          show: false,
        },
        {
          id: 2,
          name: 'Mounts',
          show: false,
        },
        {
          id: 3,
          name: 'Stats',
          show: true,
        },
        {
          id: 4,
          name: 'Progress',
          show: false,
        },
        {
          id: 5,
          name: 'Gear',
          show: false,
        },
        {
          id: 6,
          name: 'Pets',
          show: false,
        }
      ]
    }
  },

  methods: {
    getPlayerOneData() {
      console.log('Player One Data');
    },

    getPlayerTwoData() {
      console.log('Player Two Data');
    },

    showView(x) {
      this.views.forEach(view => {
        if (view.id === x) {
          view.show = true;
        } else {
          view.show = false;
        }
      })           
    }
  },

  components: {
    ComparatorButtons,
  }
}
</script>


<style lang="sass" scoped>
.comparator-form 
  display: flex
  justify-content: space-between
  background: $blue-5
  width: 70%
  margin: 1.4rem auto 1.5rem auto
  color: $white-0
  padding: 0.7rem
  border-radius: 0.6rem
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25)

  .form
    label
      display: inline-block
      margin-bottom: 0.3rem
      font-size: 1.3rem

  .form-playerTwo
    input, label
      float: right

  input
    border-radius: 0.1rem
    color: $white-1
    font-style: italic
    font-size: 1.1rem
    border: none
    background: $blue-7
    margin: 0.2rem 0
    padding: 0.1rem 0.2rem

  .btn-playerTwo
    float: left

.comparator-views
  color: $white-0
</style>
