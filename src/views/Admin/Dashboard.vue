<template>
  <div class="admin-dashboard-bg">
    <div>
      <ul>
        <li><button @click="switchView(1)">View All Posts</button></li>
        <li><button @click="switchView(0)" >Add Post</button></li>
      </ul>
    </div>
    <PostsList v-if="views[0].active"/>
    <PostForm v-if="views[1].active" />
    <button @click.prevent="logoutAdmin" class="btn btn--red logout-btn">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';
import adminService from '@/apis/adminService';
import store from '@/Vuex/store'

// Components
import PostForm from '@/components/Admin/PostForm.vue'
import PostsList from '@/components/Admin/PostsList.vue'

export default {
  data() {
    return {
      createPostView: true,
      showPostView: false,
      views: [
        { id: 0, name: "Posts", active: false },
        { id: 1, name: "Create Post", active: true }
      ]
    }
  },

  methods: {
    logoutAdmin() {
      adminService.logout(localStorage.getItem('token'))
        .then(async res => {
          localStorage.removeItem('token')
          store.dispatch('adminLogout');
          this.$router.go({ path: this.$router.path })
        })
    },

    switchView(x) {
      this.views.forEach(view => {
        if (view.id === x) {
          view.active = true
        } else {
          view.active = false
        }
      })
    }
  },

  components: {
    PostForm,
    PostsList,
  }
}
</script>

<style lang="sass" scoped>

.dashboard-greet-message
  color: $white-2

</style>


