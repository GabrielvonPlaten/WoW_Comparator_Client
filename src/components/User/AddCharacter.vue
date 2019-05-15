<template>
  <div>
    <form @submit.prevent="addChar"
      class="addCharForm">
      <h2>Add Character</h2>
      <div class="form-container">
        <div class="form-division">
          <label>Name</label><br>
          <input type="text" v-model="character.name">
        </div>
        <div class="form-division">
          <label>Realm</label><br>
          <input type="text" v-model="character.charRealm">
        </div>
        <div class="form-division">
          <select v-model="charRegionSelected" class="region-selection">
            <option 
              v-for="(option, index) in charRegions" :key="index" 
              v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <button class="btn btn--green add-char-btn">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import userService from '@/apis/userService';

export default {
  data() {
    return {
      character: {
        name: "",
        charRealm: "", 
      },

      charRegionSelected: 'EU',
      charRegions: [
        { text: 'EU', value: 'EU' },
        { text: 'US', value: 'US' },
        { text: 'KR', value: 'KR'},
        { text: 'TW', value: 'TW'},
        { text: 'CN', value: 'CN'}
      ],
    }
  },

  methods: {
    async addChar() {
      let { name, charRealm } = this.character;
      let realm = charRealm.replace(/'/g, '');
      let region = this.charRegionSelected;

      console.log(realm);
      userService.addChar(name, realm, region, localStorage.getItem('userToken'))
        .then(res => {
          location.reload();
        })
    }
  }
}
</script>

<style lang="sass">
.addCharForm
  width: 20%
  margin: 1rem auto
  text-align: center
  background: $blue-9
  border: 1px solid $blue-4
  width: 60%

  h2
    font-size: 1.3rem
    font-weight: 200

.form-container
  width: 30%
  margin: 0 auto

  .form-division
    margin: 0.6rem 0

    label
      float: left
      color: rgba(110, 150, 255, 0.9)

.add-char-btn
  margin-top: 0.7rem
  margin-bottom: 1rem
  display: block


.region-selection
  border: 1px solid $blue-4 
  color: $white-4
  padding: 0.3rem 0.6rem
  display: block
  display: block
  margin:
    top: 4px
    left: 0px
    right: 5px
  background: $blue-4
  &:hover
    cursor: pointer
</style>


