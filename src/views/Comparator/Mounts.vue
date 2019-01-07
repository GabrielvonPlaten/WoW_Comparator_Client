<template>
  <div>
    <div class="compViews__playerOne">
      <div class="playerOne__mounts" v-if="this.$store.state.playerOneMounts">
        <playerOneAvatar />
        <ul>
          <p>Collected: {{this.$store.state.playerOneMounts.mounts.numCollected}}</p>
          <li v-for="(mount, index) in this.$store.state.playerOneMounts.mounts.collected" :key="index">
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
      <div class="playerTwo__mounts" v-if="this.$store.state.playerTwoMounts">
        <playerTwoAvatar />
        <ul>
          <p>Collected: {{this.$store.state.playerTwoMounts.mounts.numCollected}}</p>
          <li v-for="(mount, index) in this.$store.state.playerTwoMounts.mounts.collected" :key="index">
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

export default {
  components: {
    playerOneAvatar,
    playerTwoAvatar,
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
      background-color: $blue-6
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      text-align: right
      float: right
      width: 75%
      &:hover
        background-color: $blue-5

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
      background-color: $blue-6
      padding: 10px
      margin-top: 10px
      font-size: 1.2em
      font-weight: 200
      text-align: left
      float: left
      width: 75%
      &:hover
        background-color: $blue-5

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
