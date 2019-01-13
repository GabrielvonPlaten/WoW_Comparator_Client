<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="onePets === false"/>
      <div class="playerOne__pets" v-if="onePets">
        <playerOneAvatar />
        <ul>
          <p>Collected: {{onePets.pets.numCollected}}</p>
          <li v-for="(pet, index) in onePets.pets.collected" :key="index">
            <div v-if="pet.qualityId === 3">
              <div v-if="pet.isFavorite">
                <div class="pets--rare"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" /></span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--rare"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 2">
              <div v-if="pet.isFavorite">
                <div class="pets--uncommon"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" /></span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--uncommon"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 1">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" /></span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 0">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" /></span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
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
        <ul>
          <p>Collected: {{twoPets.pets.numCollected}}</p>
          <li v-for="(pet, index) in twoPets.pets.collected" :key="index">
            <div v-if="pet.qualityId === 3">
              <div v-if="pet.isFavorite">
                <div class="pets--rare"></div>
                <span><font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}</span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--rare"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 2">
              <div v-if="pet.isFavorite">
                <div class="pets--uncommon"></div>
                <span><font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}</span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--uncommon"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 1">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <span><font-awesome-icon icon="star" /> {{pet.name}} - LvL: {{pet.stats.level}}</span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
            </div>

            <div v-if="pet.qualityId === 0">
              <div v-if="pet.isFavorite">
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} <font-awesome-icon icon="star" /></span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
              </div>
              <div v-else>
                <div class="pets--common"></div>
                <span>{{pet.name}} - LvL: {{pet.stats.level}} </span>
                <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
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
  computed: {
    onePets() {
      return this.$store.state.playerOnePets
    },
    twoPets() {
      return this.$store.state.playerTwoPets
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

      span
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

      span
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
