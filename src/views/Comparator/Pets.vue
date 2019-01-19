<template>
  <div>
    <div class="compViews__playerOne">
      <Loader v-if="onePets === false"/>
      <div class="playerOne__pets" v-if="onePets">
        <playerOneAvatar />
        <div class="onePetInput-count">
          <input v-if="onePets || twoPets" type="text" placeholder="Search..." v-model="petSearch">
          <p>Pets Collected: {{onePets.pets.numCollected}}</p>
        </div>
        <ul>
          <div v-for="(pet, index) in oneFilteredPets" :key="index">
            <div v-if="pet.qualityId === 3">
              <li v-if="pet.isFavorite" class="pets--rare">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
              <li v-else class="pets--rare">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 2">
              <li v-if="pet.isFavorite" class="pets--uncommon">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
              <li v-else class="pets--uncommon">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 1">
              <li v-if="pet.isFavorite" class="pets--common">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
              <li v-else class="pets--common">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 0">
              <li v-if="pet.isFavorite" class="pets--poor">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
              <li v-else class="pets--poor">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

          </div>
        </ul>
      </div>
    </div>

    <div class="compViews__playerTwo">
      <Loader v-if="twoPets === false"/>
      <div class="playerTwo__pets" v-if="twoPets">
        <playerTwoAvatar />
        <div class="twoPetsInput-count">
          <p>Pets Collected: {{twoPets.pets.numCollected}}</p>
          <input v-if="onePets || twoPets" type="text" placeholder="Search..." v-model="petSearch">
        </div>
        <ul>
          <div v-for="(pet, index) in twoFilteredPets" :key="index">
            <div v-if="pet.qualityId === 3">
              <li v-if="pet.isFavorite" class="pets--rare">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
              <li v-else class="pets--rare">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 2">
              <li v-if="pet.isFavorite" class="pets--uncommon">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span> 
                  </a>
                </div>
              </li>
              <li v-else class="pets--uncommon">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 1">
              <li v-if="pet.isFavorite" class="pets--common">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
              <li v-else class="pets--common">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

            <div v-if="pet.qualityId === 0">
              <li v-if="pet.isFavorite" class="pets--poor">
                <font-awesome-icon class="favorite-star" icon="star" />
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
              <li v-else class="pets--poor">
                <br>
                <div class="pets-align--center">
                  <a target="_blank" :href="'//www.wowhead.com/npc=' + pet.creatureId">
                    <img :src="'https://wow.zamimg.com/images/wow/icons/large/' + pet.icon + '.jpg'" onerror="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg">
                    <br>
                    <span class="pet-truncate">
                      <span class="pet-level">{{pet.stats.level}}</span>
                      {{pet.name}}
                    </span>
                  </a>
                </div>
              </li>
            </div>

          </div>
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
  border: 2px solid #0f6bff

.pets--uncommon
  border: 2px solid green

.pets--common
  border: 2px solid $white-0

.pets--poor
  border: 2px solid $poor

.pet-level
  color: #ffd686
  font-weight: 600 // Bold
  letter-spacing: 1px

.favorite-star
  display: flex
  justify-content: flex-end

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
    margin: 0.1rem 0 0.1rem 3.5%
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerOne__pets
  padding: 0 3.4rem
  border-right: 1px solid $blue-4

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
      &:hover
        background-color: $blue-4

      .pets-align--center
        text-align: center
        position: relative
        bottom: 1rem

        a
          margin-top: 1rem
          text-decoration: none
          color: $white-1
          font-size: 1rem

        img
          width: 2.5rem
          height: 2.5rem

    p
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
    margin: 0.1rem 3.5% 0.1rem 0
    padding: 0.1rem 0.2rem
    position: relative
    top: 0.8rem

.playerTwo__pets
  padding: 0 3.4rem
  border-left: 1px solid $blue-4

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
      &:hover
        background-color: $blue-4

      .pets-align--center
        text-align: center
        position: relative
        bottom: 1rem

        a
          margin-top: 1rem
          text-decoration: none
          color: $white-1
          font-size: 1rem

        img
          width: 2.5rem
          height: 2.5rem

.fa-star
  color: yellow
</style>
