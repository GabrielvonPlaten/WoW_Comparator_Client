<template>
  <div>
    <div class="postlists-container">
      <div class="postslist-title">
        <h2>All Posts</h2>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    }
  },

  created() {
    let url = '/api/posts'
    axios.get(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  },
}
</script>

<style lang="sass" scoped>

</style>


