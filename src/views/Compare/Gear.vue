<template>
  <!-- Elements checking if a value is undefined are for the lower level characters
      The application will crash if a character returns undefined for a value
   -->

  <div>
    <div class="compViews__playerOne">
      <Loader  class="one_spinnerGear" v-if="oneCheckGearState === false"/>
      <div class="playerOne__gear" v-if="oneCheckGearState">
        <playerOneAvatar />
        <p class="playerItemLevel playerOneItemLevel">iLvL: {{this.$store.state.playerOneGear.items.averageItemLevel}}</p>
        <ul>
          <li v-for="(i, index) in gearOne" :key="index"
            :class="{'q-teal': i.quality === 7, 'q-cream': i.quality === 6, 'q-leg': i.quality === 5, 'q-epic': i.quality === 4, 'q-rare': i.quality === 3, 'q-green': i.quality === 2, 'q-white': i.quality === 1, 'q-poor': i.quality === 0, }">
            <span class="item-itemLevel"><span class="gearslot-name">{{index}} - </span>{{i.itemLevel}}</span>
            <a
              v-if="i.azeriteEmpoweredItem === undefined || i.azeriteEmpoweredItem.azeritePowers.length === 0"
              target="_blank"
              :rel="'&gems=' + i.tooltipParams.gem0 + '&ench=' + i.tooltipParams.enchant + '&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + '&ilvl=' + i.itemLevel" 
              :href="'//www.wowhead.com/item=' + i.id"  
              :class="'gear-link q' + i.quality">
              <span class="gear-name">
                {{i.name}}
                <span v-if="i.name === 'Heart of Azeroth'"> - [{{i.azeriteItem.azeriteLevel}}]</span>
              </span>
              <img
                v-if="i.azeriteEmpoweredItem === undefined"
                :class="{'q-epic': i.quality === 4, 'q-rare': i.quality === 3, 'q-green': i.quality === 1}"
                :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
              <img
                v-else
                :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
                :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
            </a>
            <a
              v-else
              target="_blank"
              :rel="'&gems=' + i.tooltipParams.gem0 + '&ench=' + i.tooltipParams.enchant + '&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + oneCheckGearState.class + ':' + 
              i.azeriteEmpoweredItem.azeritePowers[4].id + ':' + 
              i.azeriteEmpoweredItem.azeritePowers[3].id + ':' +
              i.azeriteEmpoweredItem.azeritePowers[2].id + ':' +
              i.azeriteEmpoweredItem.azeritePowers[1].id + ':' + '&ilvl=' + i.itemLevel" 
              :href="'//www.wowhead.com/item=' + i.id"  
              :class="'gear-link q' + i.quality">
              <img
                v-if="i.azeriteEmpoweredItem === undefined"
                :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
              <img
                v-else
                :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
                :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
              <span class="gear-name">{{i.name}}</span>
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
        <p class="playerItemLevel">iLvL: {{this.$store.state.playerTwoGear.items.averageItemLevel}}</p>
        <ul>
          <li v-for="(i, index) in gearTwo" :key="index"
            :class="{'q-teal': i.quality === 7, 'q-cream': i.quality === 6, 'q-leg': i.quality === 5, 'q-epic': i.quality === 4, 'q-rare': i.quality === 3, 'q-green': i.quality === 2, 'q-white': i.quality === 1, 'q-poor': i.quality === 0, }">
            <span class="item-itemLevel"><span class="gearslot-name">{{index}} - </span>{{i.itemLevel}}</span>
              <a
                v-if="i.azeriteEmpoweredItem === undefined || i.azeriteEmpoweredItem.azeritePowers.length === 0"
                target="_blank"
                :rel="'&gems=' + i.tooltipParams.gem0 + '&ench=' + i.tooltipParams.enchant + '&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + '&ilvl=' + i.itemLevel" 
                :href="'//www.wowhead.com/item=' + i.id"  
                :class="'gear-link q' + i.quality">
                <img
                  v-if="i.azeriteEmpoweredItem === undefined"
                  :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
                <img
                  v-else
                  :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
                  :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
                <span class="gear-name">
                  {{i.name}}
                  <span v-if="i.name === 'Heart of Azeroth'"> - [{{i.azeriteItem.azeriteLevel}}]</span>
                </span>
              </a>
              <a
                v-else
                target="_blank"
                :rel="'&gems=' + i.tooltipParams.gem0 + '&ench=' + i.tooltipParams.enchant + '&bonus=' + i.bonusLists[0] + ':' + i.bonusLists[1] + ':' + i.bonusLists[2] + ':' + i.bonusLists[3] + '&azerite-powers=' + twoCheckGearState.class + ':' + 
                i.azeriteEmpoweredItem.azeritePowers[4].id + ':' + 
                i.azeriteEmpoweredItem.azeritePowers[3].id + ':' +
                i.azeriteEmpoweredItem.azeritePowers[2].id + ':' +
                i.azeriteEmpoweredItem.azeritePowers[1].id + ':' + '&ilvl=' + i.itemLevel" 
                :href="'//www.wowhead.com/item=' + i.id"  
                :class="'gear-link q' + i.quality">
                <img
                  v-if="i.azeriteEmpoweredItem === undefined"
                  :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
                <img
                  v-else
                  :class="{'azerite-armor': i.azeriteEmpoweredItem.azeritePowers.length > 0 }"
                  :src="'https://wow.zamimg.com/images/wow/icons/large/' + i.icon + '.jpg'">
                <span class="gear-name">{{i.name}}</span>
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

      console.log(obj)
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
      // border: 1px solid $blue-5
      border-radius: 4px
      color: $orange-3
      background-color: $blue-9
      padding: 9px 10px 0px 10px
      width: 100%
      height: 39px
      margin-top: 12px
      font-size: 1.2em
      font-weight: 400
      text-align: right
      float: right
      list-style-position: inside
      box-shadow: $box-shadow-2
      transition: all 0.3s
      &:hover
        background-color: $blue-6

      a
        margin: .5% 0 0 0.5%
        float: left
        text-decoration: none

        span:nth-child(2)
          font-weight: 300

        .azeriteLevel
          color: $white-1

      .azerite-armor
        border-style: solid
        border-image-source: url('../../assets/GameIcon-azerite.png')
        border-image-repeat: initial
        border-image-slice: 37 fill
        border-image-width: 37px
        border-image-outset: 0px 6px 0px 6px
        position: relative
        bottom: 7px

      img
        float: left
        height: 39px
        width: 40px
        position: relative
        bottom: 12px
        margin-right: 1rem  
        border: 2px solid $blue-4

    p
      font-size: 1.2em
      color: $orange-3
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
      color: $orange-3
      background-color: $blue-9
      padding: 9px 10px 0px 10px
      width: 100%
      height: 39px
      margin-top: 12px
      font-size: 1.2em
      font-weight: 400
      text-align: left
      float: left
      list-style-position: inside
      box-shadow: $box-shadow-2
      transition: all 0.2s
      &:hover
        background-color: $blue-6
        
      a
        margin: .5% 0.5% 0 0
        float: right
        text-decoration: none

        span:nth-child(1)
          float: right
          margin-left: 5px

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
        bottom: 7px
  
      img
        float: right
        height: 40px
        width: 39px
        position: relative
        bottom: 12px
        margin-left: 1rem  
        border: 2px solid $blue-4

    p
      font-size: 1.2em
      color: $orange-3
      text-align: left


.playerItemLevel
  text-shadow: $text-shadow
  color: $orange-2
  margin: 0
  font-size: 1.3rem

.playerOneItemLevel
  float: right

.item-itemLevel
  position: relative
  top: 0.2rem
  text-transform: capitalize

.no-items
  color: $poor

// Media Queires
@media only screen and (max-width: 1300px)
  .playerOne__gear, .playerTwo__gear
    padding: 0 1.4rem

    ul
      li
        font-size: 1rem

        .gear-name
          position: relative
          top: 5px
        
      p
        font-size: 1rem

@media only screen and (max-width: 880px)
  .playerOne__gear, .playerTwo__gear
    padding: 0 1rem

    ul
      width: 98%
      margin: 0 auto
      position: relative
      right: 0px

      li
        margin: 4px
        width: 93%

        a
          position: relative
          bottom: 1px

  .gear-name
    display: none

  .q-teal
    border: 1px solid #0cf
  .q-leg
    border: 1px solid #ff8000  
  .q-cream
    border: 1px solid #e5cc80 
  .q-epic
    border: 1px solid $epic
  .q-rare
    border: 1px solid $rare
  .q-green
    border: 1px solid $green-3
  .q-white
    border: 1px solid $white-0
  .q-poor
    border: 1px solid $poor

@media only screen and (max-width: 768px)
  .playerOne__gear, .playerTwo__gear
    padding: 0 0.5rem

    ul
      display: grid
      grid-template-columns: repeat(2, 1fr)
      width: 98%
      margin: 0 auto
      position: relative
      right: 10px

      li
        margin: 4px
        width: 85%

        a
          position: relative
          bottom: 0px

        img
          position: relative
          bottom: 8px
          height: 37px
          width: 37px

      .item-itemLevel
        font-size: 1.1rem

      .gearslot-name
        display: none

// @media only screen and (max-width: 600px)
//   .playerOne__gear, .playerTwo__gear
//     margin: 0 auto
//     padding: 0 

//     ul

//       li
//         width: 100%
//         height: auto

//         img
//           position: static
//           display: block
//           margin: 0

//       p
//         text-align: center

//       .gearslot-name
//         display: none 

//   .item-itemLevel
//     position: static
</style>
