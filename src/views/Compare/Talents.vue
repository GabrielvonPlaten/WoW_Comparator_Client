<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="oneTalents === false" />
      <div class="playerOne__talents" v-if="oneTalents">
        <playerOneAvatar />

        <div v-if="oneTalents.talents[0].spec" class="active-spec oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[0].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${oneTalents.talents[0].spec.icon}.jpg`"
            />
          </div>
          <div class="pve-pvp-talents">
            <ul>
              <li v-for="(talent, index) in sortPlayerOneTalents__T0" :key="index">
                <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
                <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                  <img
                    :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                  />
                  <span class="talent-name">{{talent.spell.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="oneTalents.talents[1].spec" class="oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[1].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${oneTalents.talents[1].spec.icon}.jpg`"
            />
          </div>
          <ul>
            <li v-for="(talent, index) in sortPlayerOneTalents__T1" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
              <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                <img
                  :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                />
                <span class="talent-name">{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>

        <div v-if="oneTalents.talents[2].spec" class="oneList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{oneTalents.talents[2].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${oneTalents.talents[2].spec.icon}.jpg`"
            />
          </div>
          <ul>
            <li v-for="(talent, index) in sortPlayerOneTalents__T2" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
              <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                <img
                  :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                />
                <span class="talent-name">{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoTalents === false" />
      <div class="playerTwo__talents" v-if="twoTalents">
        <playerTwoAvatar />

        <div v-if="twoTalents.talents[0].spec" class="active-spec twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[0].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${twoTalents.talents[0].spec.icon}.jpg`"
            />
          </div>
          <div class="pve-pvp-talents">
            <ul>
              <li v-for="(talent, index) in sortPlayerTwoTalents__T0" :key="index">
                <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
                <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                  <img
                    :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                  />
                  <span class="talent-name">{{talent.spell.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="twoTalents.talents[1].spec" class="twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[1].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${twoTalents.talents[1].spec.icon}.jpg`"
            />
          </div>
          <ul>
            <li v-for="(talent, index) in sortPlayerTwoTalents__T1" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
              <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                <img
                  :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                />
                <span class="talent-name">{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>

        <div v-if="twoTalents.talents[2].spec" class="twoList-container">
          <div class="spec-info">
            <h3 class="spec-name">{{twoTalents.talents[2].spec.name}}</h3>
            <img
              class="spec-image"
              :src="`https://render-eu.worldofwarcraft.com/icons/56/${twoTalents.talents[2].spec.icon}.jpg`"
            />
          </div>
          <ul>
            <li v-for="(talent, index) in sortPlayerTwoTalents__T2" :key="index">
              <span class="talent-tier">{{talentTier[talent.tier]}} -</span>
              <a target="_blank" class="q" :href="`//www.wowhead.com/spell=${talent.spell.id}`">
                <img
                  :src="`https://render-eu.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg`"
                />
                <span class="talent-name">{{talent.spell.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/Vuex/store";
import playerOneAvatar from "@/components/OneAvatar.vue";
import playerTwoAvatar from "@/components/TwoAvatar.vue";
import Loader from "@/components/Loader.vue";

import _ from "lodash";

export default {
  data() {
    return {
      talentTier: [15, 30, 45, 60, 75, 90, 100]
    };
  },

  computed: {
    oneTalents() {
      return store.state.playerOneTalents;
    },

    twoTalents() {
      return store.state.playerTwoTalents;
    },

    // Sorting Player One Talents
    sortPlayerOneTalents__T0() {
      return _.sortBy(this.oneTalents.talents[0].talents, "tier");
    },

    sortPlayerOneTalents__T1() {
      return _.sortBy(this.oneTalents.talents[1].talents, "tier");
    },

    sortPlayerOneTalents__T2() {
      return _.sortBy(this.oneTalents.talents[2].talents, "tier");
    },

    // Sorting Player Two Talents
    sortPlayerTwoTalents__T0() {
      return _.sortBy(this.twoTalents.talents[0].talents, "tier");
    },

    sortPlayerTwoTalents__T1() {
      return _.sortBy(this.twoTalents.talents[1].talents, "tier");
    },

    sortPlayerTwoTalents__T2() {
      return _.sortBy(this.twoTalents.talents[2].talents, "tier");
    }
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader
  }
};
</script>

<style lang="sass" scoped>

.playerOne__talents
  padding: 0 3.4rem
  border-right: 1px solid $blue-4
  text-align: right

.compViews__playerOne

  .oneList-container
    background: $blue-9
    border-color: $blue-4
    border-style: solid
    margin: 0.7rem 0
    padding: 0.8rem
    border-width: 1px
    border-color: rgb(42, 54, 112)
    box-shadow: $box-shadow-3


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
    border-color: $orange-4
    border-color: rgba(255, 222, 160, 0.8)


.playerTwo__talents
  padding: 0 3.4rem
  border-left: 1px solid $blue-4
  text-align: right

.compViews__playerTwo

  .twoList-container
    background: $blue-9
    border-color: $blue-4
    border-style: solid
    margin: 0.7rem 0
    padding: 0.8rem
    border-width: 1px
    border-color: rgb(42, 54, 112)
    box-shadow: $box-shadow-3

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
    border-color: $orange-4
    border-color: rgba(255, 222, 160, 0.8)

.spec-info
  display: flex
  justify-content: center
  margin-bottom: 1rem

  .spec-name
    margin: 0 0 1rem 0
    padding: 0
    color: $white-0
    font-weight: 200
    font-size: 1.4rem

  p
    margin: 0
    padding: 0

  .spec-image
    width: 30px
    height: 30px
    margin-left: 1rem
    position: relative
    bottom: 0.3rem

@media only screen and (max-width: 1075px)
  .playerOne__talents, .playerTwo__talents
    padding: 0 1rem

  .talent-name
    display: none
</style>

