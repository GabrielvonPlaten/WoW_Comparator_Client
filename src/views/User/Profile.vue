<template>
  <div>
    <p>{{userData}}</p>
  </div>
</template>

<script>
import store from '@/Vuex/store';

export default {
  data() {
    return {
      userData: store.state.userData,
    }
  }
}
</script>

<style lang="sass" scoped>

</style>


