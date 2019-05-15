<template>
  <div>
    <div class="user-profile">
      <UserInfo />
      <div class="user-favorite-char-list">
        <CharacterList />
        <AddCharacterForm />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/Vuex/store';

// Components
import UserInfo from '@/components/User/UserInfo.vue';
import CharacterList from '@/components/User/CharacterList.vue';
import AddCharacterForm from '@/components/User/AddCharacter.vue';


export default {
  data() {
    return {
      userData: store.state.userData,
    }
  },

  components: {
    UserInfo,
    CharacterList,
    AddCharacterForm,
  }
}
</script>

<style lang="sass" scoped>
.user-profile
  display: flex
  justify-content: space-around
  color: $white-1
  width: 90%
  margin: 0 auto
  padding-top: 4.3rem

.user-favorite-char-list
  width: 45%
</style>


