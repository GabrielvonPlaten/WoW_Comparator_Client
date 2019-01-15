<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneMounts === false"/>
      <div class="playerOne__mounts" v-if="oneMounts">
        <playerOneAvatar />
        <div class="oneMountInput-count">
          <input v-if="oneMounts || twoMounts" type="text" placeholder="Search..." v-model="mountSearch">
          <p>Collected: {{oneMounts.mounts.numCollected}}</p>
        </div>
        <ul>
          <li v-for="(mount, index) in oneFilteredMounts" :key="index">
            <div v-if="mount.qualityId === 4">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--epic">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
            </div>
            <div v-else-if="mount.qualityId === 3">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--rare">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
            </div>
            <div v-else-if="mount.qualityId === 1">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--common">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
             
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoMounts === false"/>
      <div class="playerTwo__mounts" v-if="twoMounts">
        <playerTwoAvatar />
        <div class="twoMountInput-count">
          <p>Collected: {{twoMounts.mounts.numCollected}}</p>
          <input v-if="oneMounts || twoMounts" type="text" placeholder="Search..." v-model="mountSearch">
        </div>
        <ul>
          <li v-for="(mount, index) in twoFilteredMounts" :key="index">
            <div v-if="mount.qualityId === 4">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--epic">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
            </div>
            <div v-else-if="mount.qualityId === 3">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--rare">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
            </div>
            <div v-else-if="mount.qualityId === 1">
              <a target="_blank" :href="'//www.wowhead.com/item=' + mount.itemId" class="mounts--common">{{mount.name}}<img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'"></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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
      return this.$store.state.playerOneMounts
    },

    twoMounts() {
      return this.$store.state.playerTwoMounts
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
  color: $epic
  font-size: 1.1em
  font-weight: 500

.mounts--rare
  color: $rare
  font-weight: 500

.mounts--common
  color: $white-0
  font-weight: 500
  
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
    margin: 0.1rem 0 0.1rem 12.5rem
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerOne__mounts
  ul
    // display: grid
    // grid-template-columns: repeat(4, 1fr)

    li
      border-radius: 8px
      color: $white-0
      background-color: $blue-5
      padding: 10px
      margin-top: 10px
      font-size: 1rem
      font-weight: 200
      text-align: right
      float: right
      width: 75%
      &:hover
        background-color: $blue-4

      a
        text-decoration: none
        position: relative
        top: 1rem

      img
        float: right
        margin-left: 1em

    p
      width: 10rem
      color: #E0E0E0
      float: right
      margin: 0
      text-align: right
      color: $white-0

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
    margin: 0.1rem 12.5rem 0.1rem 0
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerTwo__mounts
  ul

    li
      border-radius: 8px
      color: $white-0
      background-color: $blue-5
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      text-align: left
      float: left
      width: 75%
      &:hover
        background-color: $blue-4

      a
        text-decoration: none
        position: relative
        top: 1rem

      img
        float: left
        margin-right: 1em

    p
      width: 10rem
      color: #E0E0E0
      float: left
      margin: 0
      text-align: left
      color: $white-0
</style>
