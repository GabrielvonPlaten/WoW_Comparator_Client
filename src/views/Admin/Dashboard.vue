<template>
  <div class="admin-dashboard-bg">
    <div class="admin-views">
      <div class="dashboard-view-btns">
        <ul>
          <li v-for="(v, index) in views" :key="index">
            <button @click="switchView(v.id)" 
              :class="{'active-btn btn btn--purple btn-view': v.active, 'btn btn--purple btn-view': !v.active }">
              {{v.name}}
            </button>
          </li>
        </ul>
      </div>
      <div>
        <PostsList v-if="views[0].active"/>
        <PostForm v-if="views[1].active" />
        <Settings v-if="views[2].active" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/Vuex/store'

// Components
import PostForm from '@/components/Admin/PostForm.vue'
import PostsList from '@/components/Admin/PostsList.vue'
import Settings from '@/components/Admin/Settings.vue'

export default {
  data() {
    return {
      btnClass: "btn btn--purple btn-view",
      createPostView: true,
      showPostView: false,
      views: [
        { id: 0, name: "All Posts", active: true }, // Active
        { id: 1, name: "Create Post", active: false }, 
        { id: 2, name: "Settings", active: false},
      ]
    }
  },

  methods: {
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
    Settings,
  }
}
</script>

<style lang="sass" scoped>
.admin-dashboard-bg
  padding-top: 3.2rem

.dashboard-greet-message
  color: $white-2

.admin-views
  width: 70%
  margin: 2rem auto

  .dashboard-view-btns
    ul
      margin: 0
      padding: 0
      display: flex
      flex-justify-content: start

    li
      margin-right: 0.5rem

    .btn-view
      background: none
      width: 100%
      font-size: 0.9rem
      padding: 0.3rem 0.7rem
      text-transform: none
      transition: all 0.4s

    .active-btn
      background: $active-route
      color: $white-1
</style>


