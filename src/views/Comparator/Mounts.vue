<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneMounts === false"/>
      <div class="playerOne__mounts" v-if="oneMounts">
        <playerOneAvatar />
        <ul>
          <p>Collected: {{oneMounts.mounts.numCollected}}</p>
          <li v-for="(mount, index) in oneMounts.mounts.collected" :key="index">
            <div v-if="mount.qualityId === 4">
              <span class="mounts--epic">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
            <div v-else-if="mount.qualityId === 3">
              <span class="mounts--rare">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
            <div v-else-if="mount.qualityId === 1">
              <span class="mounts--common">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoMounts === false"/>
      <div class="playerTwo__mounts" v-if="twoMounts">
        <playerTwoAvatar />
        <ul>
          <p>Collected: {{twoMounts.numCollected}}</p>
          <li v-for="(mount, index) in twoMounts.collected" :key="index">
            <div v-if="mount.qualityId === 4">
              <span class="mounts--epic">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
            <div v-else-if="mount.qualityId === 3">
              <span class="mounts--rare">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
            <div v-else-if="mount.qualityId === 1">
              <span class="mounts--common">{{mount.name}}</span><img :src="'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg'">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {

  computed: {
    oneMounts() {
      return this.$store.state.playerOneMounts
    },

    twoMounts() {
      return this.$store.state.playerTwoMounts
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

.playerOne__mounts
  ul
    li
      border-radius: 8px
      color: $white-0
      background-color: $blue-5
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      text-align: right
      float: right
      width: 75%
      &:hover
        background-color: $blue-4

      span
        position: relative
        top: 1rem

      img
        float: right
        margin-left: 1em

    p
      text-align: right
      color: $white-0

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

      span
        position: relative
        top: 1rem

      img
        float: left
        margin-right: 1em

    p
      text-align: left
      color: $white-0
</style>
