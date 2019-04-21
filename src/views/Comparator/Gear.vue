<template>
  <!-- Elements checking if a value is undefined are for the lower level characters
      The application will crash if a character returns undefined for a value
   -->

  <div>
    <div class="compViews__playerOne">
      <Loader  class="one_spinnerGear" v-if="oneCheckGearState === false"/>
      <div class="playerOne__gear" v-if="oneCheckGearState">
        <playerOneAvatar />
        <ul>
          <p>iLvL: {{this.$store.state.playerOneGear.items.averageItemLevel}}</p>
          <li v-for="(i, index) in gearOne" :key="index">
            <span class="item-itemLevel">{{index}} - {{i.itemLevel}}</span>
            <img
              v-if="i.azeriteEmpoweredItem === undefined"
              :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
            <img
              v-else
              :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
              :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
            <a
              v-if="i.azeriteEmpoweredItem === undefined || i.azeriteEmpoweredItem.azeritePowers.length === 0"
              target="_blank"
              :rel="'&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + '&ilvl=' + i.itemLevel" 
              :href="'//www.wowhead.com/item=' + i.id"  
              :class="'gear-link q' + i.quality">
              {{i.name}}
              <span v-if="i.name === 'Heart of Azeroth'"> - [{{i.azeriteItem.azeriteLevel}}]</span>
            </a>
            <a
              v-else
              target="_blank"
              :rel="'&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + oneCheckGearState.class + ':' + 
              i.azeriteEmpoweredItem.azeritePowers[4].id + ':' + 
              i.azeriteEmpoweredItem.azeritePowers[3].id + ':' +
              i.azeriteEmpoweredItem.azeritePowers[2].id + ':' +
              i.azeriteEmpoweredItem.azeritePowers[1].id + ':' + '&ilvl=' + i.itemLevel" 
              :href="'//www.wowhead.com/item=' + i.id"  
              :class="'gear-link q' + i.quality">
              {{i.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Player Two -->
    <div class="compViews__playerTwo">
      <Loader v-if="twoCheckGearState === false"/>
      <div class="playerTwo__gear" v-if="twoCheckGearState">
        <playerTwoAvatar />
        <ul>
          <p>iLvL: {{this.$store.state.playerTwoGear.items.averageItemLevel}}</p>
          <li v-for="(i, index) in gearTwo" :key="index">
            <span class="item-itemLevel">{{i.itemLevel}} - {{index}}</span>
            <img
              v-if="i.azeriteEmpoweredItem === undefined"
              :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
            <img
              v-else
              :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
              :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
              <a
                v-if="i.azeriteEmpoweredItem === undefined || i.azeriteEmpoweredItem.azeritePowers.length === 0"
                target="_blank"
                :rel="'&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + '&ilvl=' + i.itemLevel" 
                :href="'//www.wowhead.com/item=' + i.id"  
                :class="'gear-link q' + i.quality">
                {{i.name}}
                <span v-if="i.name === 'Heart of Azeroth'"> - [{{i.azeriteItem.azeriteLevel}}]</span>
              </a>
              <a
                v-else
                target="_blank"
                :rel="'&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + twoCheckGearState.class + ':' + 
                i.azeriteEmpoweredItem.azeritePowers[4].id + ':' + 
                i.azeriteEmpoweredItem.azeritePowers[3].id + ':' +
                i.azeriteEmpoweredItem.azeritePowers[2].id + ':' +
                i.azeriteEmpoweredItem.azeritePowers[1].id + ':' + '&ilvl=' + i.itemLevel" 
                :href="'//www.wowhead.com/item=' + i.id"  
                :class="'gear-link q' + i.quality">
                {{i.name}}
              </a>
          </li>
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
  computed: {
    oneCheckGearState() {
      return store.state.playerOneGear
    },

    gearOne() {
      let obj = {...obj, ...store.state.playerOneGear.items}
      delete obj["averageItemLevel"]; // App crashes if this is allowed through
      delete obj["averageItemLevelEquipped"]; // App crashes if this is allowed through
      delete obj["shirt"]; // Not needed
      delete obj["tabard"]; // Not needed

      return obj
    },

    twoCheckGearState() {
      return store.state.playerTwoGear
    },

    gearTwo() {
      let obj = {...obj, ...store.state.playerTwoGear.items}
      delete obj["averageItemLevel"];
      delete obj["averageItemLevelEquipped"]; 
      delete obj["shirt"]; 
      delete obj["tabard"];
      
      return obj
    },
  },

  components: {
    playerOneAvatar,
    playerTwoAvatar,
    Loader,
  }
}
</script>


<style lang="sass" scoped>
.playerOne__gear
  padding: 0 3.4rem
  border-right: 1px solid $blue-4
  height: 100%

  ul
    padding: 0
    margin: 0
    
    li
      border-radius: 4px
      color: $orange-4
      background-color: $blue-6
      padding: 15px 10px 0px 10px
      width: 100%
      height: 43px
      margin-top: 15px
      font-size: 1.2em
      font-weight: 400
      text-align: right
      float: right
      list-style-position: inside
      transition: all 0.2s
      &:hover
        background-color: $blue-5

      a
        margin: .5% 0 0 2%
        float: left
        text-decoration: none

        span:nth-child(2)
          margin-left: 10px
          font-weight: 300

        .azeriteLevel
          color: $white-1

      .azerite-armor
        border-style: solid
        border-image-source: url('../../assets/GameIcon-azerite.png')
        border-image-repeat: initial
        border-image-slice: 44 fill
        border-image-width: 44px
        border-image-outset: 0px 6px 0px 6px
        position: relative
        bottom: 10px

      img
        float: left
        height: 43px
        width: 43px
        position: relative
        bottom: 15%

    p
      font-size: 1.2em
      color: $orange-4
      text-align: right
      
.separation-item
  margin: 1rem 0 0 0

.playerTwo__gear
  padding: 0 3.4rem
  border-left: 1px solid $blue-4
  height: 100%

  ul
    padding: 0
    margin: 0

    li
      border-radius: 4px
      color: $orange-4
      background-color: $blue-6
      padding: 15px 10px 0px 10px
      width: 100%
      height: 43px
      margin-top: 15px
      font-size: 1.2em
      font-weight: 400
      text-align: left
      float: left
      list-style-position: inside
      transition: all 0.2s
      &:hover
        background-color: $blue-5
        
      a
        margin: .5% 2% 0 0
        float: right
        text-decoration: none

        span:nth-child(1)
          float: right
          margin-left: 10px

        .azeriteLevel
          color: $white-1

      .azerite-armor
        border-style: solid
        border-image-source: url('../../assets/GameIcon-azerite.png')
        border-image-repeat: initial
        border-image-slice: 44 fill
        border-image-width: 44px
        border-image-outset: 0px 6px 0px 6px
        position: relative
        bottom: 10px
  
      img
        float: right
        height: 43px
        width: 43px
        position: relative
        bottom: 15%

    p
      font-size: 1.2em
      color: $orange-4
      text-align: left

.no-items
  color: $poor

.item-itemLevel
  position: relative
  top: 0.2rem
  text-transform: capitalize


</style>
