<template>
  <div>
    <div>
      <h2 v-if="charList.length > 0" class="bookmarked-title">Bookedmarked Characters</h2>
      <h2 v-if="charList.length === 0" class="bookmarked-title">You have no bookmarked characters</h2>
      <ul class="character-list" v-if="characters">
        <li class="character-item" v-for="(char, index) in getCharactersByLastUpdate" :key="index">
          <div>
            <img
              class="avatarImg"
              ref="img"
              :src="'http://render-' + char.region + '.worldofwarcraft.com/character/' + char.thumbnail" @error="changeAvatarUrl(char.race, char.gender)">
              <button class="btn btn--red remove-char-btn" @click="removeChar(char.id)">X</button>
              <br>
              <h2>{{char.name}}</h2>
              <h3 class="char-realm">{{char.realm}}</h3>
              <h2>{{char.level}} - <span :style="{color: classColor[char.class]}">{{classes[char.class]}}</span></h2>
              <p>{{lastUpdated(char.lastModified)}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store'
import axios from 'axios';
import userService from '@/apis/userService';

export default {
  data() {
    return {
      charList: store.state.userData.favoriteChars,
      access_token: "",
      characters: [],
      listLength: "",
      regions: [],
      ids: [],

      classes: ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'],

      classColor: ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'],
    }
  },

  computed: {
    insetAvatar(thumbnail) {
      // inset.jpg is a bigger version of the player avatar image
      return thumbnail.replace('avatar.jpg', 'inset.jpg')
    },

    getCharactersByLastUpdate() {
      // The API response is ordered by date in ascending order 
      // Sort by dungeon level in ascending order with lodash then sort by descending order
      let char = _.sortBy(this.characters, 'lastModified').reverse()
      return char;
    },

    sortIds() {
      this.ids.sort(function (a, b) {
        return a - b
      })
    },
  },

  async created() {
    let url = '/api/comparator';
    await axios.get(url)
      .then(res => this.access_token = res.data.access_token)

    console.log(this.access_token)
    this.getChar()
  },

  methods: {
    getChar() {
       this.charList.forEach( async (c, index) => {
         await axios.get(`https://${c.character.region}.api.blizzard.com/wow/character/${c.character.realm}/${c.character.name}?locale=en_US&access_token=${this.access_token}`)
          .then(async res => {
            let response = res.data;
            await this.characters.push({...response, region: c.character.region, id: c._id});
          })
       })
    },

    lastUpdated(date) {
      let day = new Date(date);
      let month = new Date(date);
      let year= new Date(date);

      let lastLogin = `${day.getDate()}/${1 + month.getMonth()}/${year.getFullYear()}`
      return lastLogin
    },

    async removeChar(id) {
      await userService.removeChar(id)
        .then(async () => {
          location.reload()
        })
    }
  }
}
</script>

<style lang="sass">
.bookmarked-title
  margin: 0 0 0.5rem 0
  font-weight: 500

.character-list
  display: grid
  grid-template-columns: repeat(4, 1fr)
  width: 100%
  border: 1px solid $blue-4
  background: $blue-9

  h2
    margin: 0
    font-size: 1.2rem
    font-weight: 200

  h3
    margin: 0 0 0.7rem 0
    font-size: 1rem
    font-weight: 200
    color: $white-4

  .char-realm
    color: $orange-2

  .avatarImg
    border: 1px solid $violet-4

.character-item
  margin: 0.7rem

.remove-char-btn
  padding: 2px 5px
  font-size: 0.7rem
  font-weight: 200
  position: absolute
</style>


