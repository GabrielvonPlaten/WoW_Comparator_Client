<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneTalents === false"/>
      <div class="playerOne__talents" v-if="oneTalents">
        <playerOneAvatar />
        <br>
        <div class="active-spec oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[0].spec.name}}</h3>
          </div>
          <div class="pve-pvp-talents">
            <ul>
              <li v-for="(talent, index) in oneTalents.talents[0].talents" :key="index">
                <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
                <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                  <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                  <span>{{talent.spell.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[1].spec.name}}</h3>
          </div>
          <ul>
            <li v-for="(talent, index) in oneTalents.talents[1].talents" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
              <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <span>{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[2].spec.name}}</h3>
          </div>
          <ul>
            <li v-for="(talent, index) in oneTalents.talents[2].talents" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
              <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <span>{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoTalents === false"/>
      <div class="playerTwo__talents" v-if="twoTalents">
        <playerTwoAvatar />
        <br>

        <div class="active-spec twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[0].spec.name}}</h3>
          </div>
          <div class="pve-pvp-talents">
            <ul>
              <li v-for="(talent, index) in twoTalents.talents[0].talents" :key="index">
                <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
                <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                  <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                  <span>{{talent.spell.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[1].spec.name}}</h3>
          </div>
          <ul>
            <li v-for="(talent, index) in twoTalents.talents[1].talents" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
              <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <span>{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[2].spec.name}}</h3>
          </div>
          <ul>
            <li v-for="(talent, index) in twoTalents.talents[2].talents" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} - </span>
              <a target="_blank" class="q" :href="'//www.wowhead.com/spell=' + talent.spell.id">
                <img :src="'https://render-eu.worldofwarcraft.com/icons/56/' + talent.spell.icon + '.jpg'" @error="'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'">
                <span>{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playerOneAvatar from '@/components/OneAvatar.vue';
import playerTwoAvatar from '@/components/TwoAvatar.vue';
import Loader from '@/components/Loader.vue';

export default {
  data() {
    return {
      talentTier: [15, 30, 45, 60, 75, 90, 100],
    }
  },

  computed: {
    oneTalents() {
      return this.$store.state.playerOneTalents
    },
    
    twoTalents() {
      return this.$store.state.playerTwoTalents
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

.playerOne__talents
  padding: 0 3.4rem
  border-right: 1px solid $blue-4
  text-align: right

.compViews__playerOne

  .oneList-container
    background: $blue-7
    border-color: $blue-4
    border-style: solid
    margin: 0.5rem 0
    padding: 0.8rem
    border-width: 1px
    border-color: rgb(42, 54, 112)


    ul
      display: grid
      grid-template-columns: repeat(3, 2fr)
      grid-gap: 0.5rem
      width: 95%

      li

        .talent-tier
          font-size: 1rem
          position: relative
          top: 0.5rem
        
        a
          font-size: 1rem
          text-decoration: none
          position: relative
          top: 0.5rem
          margin-right: 0.5rem

          img
            width: 2rem
            height: 2rem
  
            float: right

  .active-spec
    border-style: solid
    border-width: 1px
    border-color: $orange-5
    border-color: rgba(255, 222, 160, 0.8)


.playerTwo__talents
  padding: 0 3.4rem
  border-left: 1px solid $blue-4
  text-align: right

.compViews__playerTwo

  .twoList-container
    background: $blue-7
    border-color: $blue-4
    border-style: solid
    margin: 0.5rem 0
    padding: 0.8rem
    border-width: 1px
    border-color: rgb(42, 54, 112)

    ul
      display: grid
      grid-template-columns: repeat(3, 2fr)
      grid-gap: 0.5rem
      width: 95%
      margin: 0 auto

      li

        .talent-tier
          font-size: 1rem
          position: relative
          top: 0.5rem
        
        a
          font-size: 1rem
          text-decoration: none
          position: relative
          top: 0.5rem
          margin-right: 0.5rem

          img
            width: 2rem
            height: 2rem
            float: right

  .active-spec
    border-style: solid
    border-width: 1px
    border-color: $orange-5
    border-color: rgba(255, 222, 160, 0.8)

.spec-info
  text-align: center
  margin-bottom: 1rem

  .spec-name
    margin: 0
    padding: 0
    color: $white-0

  p
    margin: 0
    padding: 0
</style>

