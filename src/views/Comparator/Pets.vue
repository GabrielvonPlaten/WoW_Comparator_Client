<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="onePets === false"/>
      <div class="playerOne__pets" v-if="onePets">
        <playerOneAvatar />
        <div class="onePetInput-count">
          <input v-if="onePets || twoPets" type="text" placeholder="Search..." v-model="petSearch">
          <p>Collected: {{onePets.pets.numCollected}}</p>
        </div>
        <ul>
          <li v-for="(pet, index) in oneFilteredPets" :key="index">
            <div v-if="pet.qualityId === 3">
              <div v-if="pet.isFavorite">
                <div class="pets--rare"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--rare"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 2">
              <div v-if="pet.isFavorite">
                <div class="pets--uncommon"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--uncommon"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 1">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 0">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  {{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" />
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoPets === false"/>
      <div class="playerTwo__pets" v-if="twoPets">
        <playerTwoAvatar />
        <div class="twoPetsInput-count">
          <p>Collected: {{twoPets.pets.numCollected}}</p>
          <input v-if="onePets || twoPets" type="text" placeholder="Search..." v-model="petSearch">
        </div>
        <ul>
          <li v-for="(pet, index) in twoFilteredPets" :key="index">
            <div v-if="pet.qualityId === 3">
              <div v-if="pet.isFavorite">
                <div class="pets--rare"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--rare"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 2">
              <div v-if="pet.isFavorite">
                <div class="pets--uncommon"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--uncommon"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 1">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
            </div>

            <div v-if="pet.qualityId === 0">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                  <font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}
                  <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                </a>
              </div>
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
  data() {
    return {
      petSearch: "",
    }
  },

  computed: {

    onePets() {
      return this.$store.state.playerOnePets
    },
    twoPets() {
      return this.$store.state.playerTwoPets
    },

    oneFilteredPets() {
      return this.onePets.pets.collected.filter(pet => {
        return pet.name.match(this.petSearch.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '));
      })
    },

    twoFilteredPets() {
      return this.twoPets.pets.collected.filter(pet => {
        return pet.name.match(this.petSearch.toLowerCase()
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
.pets--rare
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: blue
  margin-top: 2px

.pets--uncommon
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: green
  margin-top: 2px

.pets--common
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: $white-0
  margin-top: 2px

// Player One Pets
.onePetInput-count
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

.playerOne__pets
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

      a
        text-decoration: none
        color: $white-1
        position: relative
        top: 1rem

      img
        float: right
        margin-left: 1em

      .pets--rare, .pets--uncommon, .pets--common
        float: left

    p
      text-align: right
      color: $white-0

// Player Two Pets
.twoPetsInput-count
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

.playerTwo__pets
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
        color: $white-1
        position: relative
        top: 1rem

      img
        float: left
        margin-right: 1em

      .pets--rare, .pets--uncommon, .pets--common
        float: right

    p
      text-align: left
      color: $white-0

.fa-star
  color: yellow
</style>
