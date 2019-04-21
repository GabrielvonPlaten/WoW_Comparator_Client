<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneMounts === false"/>
      <div class="playerOne__mounts" v-if="oneMounts">
        <playerOneAvatar />
        <div class="oneMountInput-count">
          <input v-if="oneMounts || twoMounts" type="text" placeholder="Search..." v-model="mountSearch">
          <p>Mounts Collected: {{oneMounts.mounts.numCollected}}</p>
        </div>
        <ul>
          <div v-for="(mount, index) in oneFilteredMounts" :key="index">
            <div v-if="mount.qualityId === 4">
              <li class="mounts--epic">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
            <div v-else-if="mount.qualityId === 3">
             <li class="mounts--rare">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
            <div v-else-if="mount.qualityId === 1">
             <li class="mounts--common">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoMounts === false"/>
      <div class="playerTwo__mounts" v-if="twoMounts">
        <playerTwoAvatar />
        <div class="twoMountInput-count">
          <p>Mounts  Collected: {{twoMounts.mounts.numCollected}}</p>
          <input v-if="oneMounts || twoMounts" type="text" placeholder="Search..." v-model="mountSearch">
        </div>
        <ul>
          <div v-for="(mount, index) in twoFilteredMounts" :key="index">
            <div v-if="mount.qualityId === 4">
              <li class="mounts--epic">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
            <div v-else-if="mount.qualityId === 3">
             <li class="mounts--rare">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
            <div v-else-if="mount.qualityId === 1">
             <li class="mounts--common">
                <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId">
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
                  <p>{{mount.name}}</p>
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store'
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {
  data() {
    return {
      mountSearch: "",
    }
  },

  computed: {
    oneMounts() {
      return store.state.playerOneMounts
    },

    twoMounts() {
      return store.state.playerTwoMounts
    },

    oneFilteredMounts() {
      return this.oneMounts.mounts.collected.filter(mount => {
        return mount.name.match(this.mountSearch.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '));
      })
    },

    twoFilteredMounts() {
      return this.twoMounts.mounts.collected.filter(mount => {
        return mount.name.match(this.mountSearch.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '));
      })
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader,
  }
}
</script>


<style lang="sass" scoped>
.mounts--epic
  border: 2px solid $epic

.mounts--rare
  border: 2px solid #0f6bff

.mounts--common
  border: 2px solid $white-0

// Player One Mounts
.oneMountInput-count
  height: 1.6rem
  margin-bottom: 1rem
  display: flex
  justify-content: space-between

  input
    text-transform: capitalize
    border-radius: 0.1rem
    color: $white-1
    border: $blue-4 1px solid
    font-style: italic
    font-size: 1.1rem
    background: $blue-5
    margin: 0.1rem 0 0.1rem 3.5%
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerOne__mounts
  padding: 0 3.4rem
  border-right: 1px solid $blue-4
  height: 100%

  ul
    display: grid
    grid-template-columns: repeat(4, 1fr)

    li
      border-radius: 8px
      color: $white-0
      background-color: $blue-5
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      float: right
      width: 75%
      height: 6.5rem
      text-align: center
      &:hover
        background-color: $blue-4

      a
        margin-top: 1rem
        text-decoration: none
        color: $white-1
        font-size: 1rem

      img
        width: 2.7rem
        height: 2.7rem

// Player Two Mounts
.twoMountInput-count
  height: 1.6rem
  margin-bottom: 1rem
  display: flex
  justify-content: space-between
  
  input
    text-transform: capitalize
    border-radius: 0.1rem
    color: $white-1
    border: $blue-4 1px solid
    font-style: italic
    font-size: 1.1rem
    background: $blue-5
    margin: 0.1rem 3.5% 0.1rem 0
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerTwo__mounts
  padding: 0 3.4rem
  border-left: 1px solid $blue-4
  height: 100%

  ul
    display: grid
    grid-template-columns: repeat(4, 1fr)

    li
      border-radius: 8px
      color: $white-0
      background-color: $blue-5
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      float: left
      width: 75%
      height: 6.5rem
      text-align: center
      &:hover
        background-color: $blue-4

      a
        margin-top: 1rem
        text-decoration: none
        color: $white-1
        font-size: 1rem

      img
        width: 2.7rem
        height: 2.7rem

</style>
