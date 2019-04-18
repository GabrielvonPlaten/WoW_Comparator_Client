<template>
  <div>
    <div class="postlists-container">
      <div class="postslist-title">
        <h2>All Posts</h2>
        <p class="post-deleted">{{postDeleted}}</p>
        <p class="post-error">{{postError}}</p>
      </div>
      <div class="recent-posts">
        <div class="blog-post" v-for="(post, index) in posts" :key="index">
          <div class="blog_block">
            <div class="image-container">
              <img :src="post.blocks.blocks[0].data.url">
            </div>
            <div class="blog_card-block">
              <h2 class="title-text">{{post.title}}</h2>
              <p class="title-subtitle">{{post.subtitle}}</p>
              <b class="title-date">{{formatDate(post.blocks.time)}}</b>
            </div>
            <router-link :to="'/post/' + post.slug" class="view-post-btn">View</router-link>
            <button 
              @click="confirmDeletion(index)"
              v-if="confirmationBtns !== index" 
              class="btn btn--red btn-delete"> 
              Delete Post
            </button>
            <button 
              class="btn btn--red btn-cancel"
              v-if="confirmationBtns === index" 
              @click="cancelDeletion">
              No
            </button>
            <button
              @click="deletePost(post._id)"
              v-if="confirmationBtns === index" 
              class="btn btn--red btn-delete">
              Yes
            </button>
          </div>
        </div>
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
      confirmationBtns: null,
      postDeleted: null,
      postError: null,
    }
  },

  created() {
    let url = '/api/posts'
    axios.get(url)
      .then(res => {
        this.posts = res.data
      })
      .catch(err => console.log(err))
  },

  methods: {
    confirmDeletion(x) {
      this.confirmationBtns = x
    }, 

    cancelDeletion() {
      this.confirmationBtns = null
    },

    deletePost(_id) {
      let token = localStorage.getItem('token');
      let url = '/api/post/' + _id
      axios.delete(url, {
        headers: { authorization: 'Bearer ' + token } 
      })
        .then(res => {
          this.postError = ""
          this.postDeleted = "Post Deleted";
          this.refreshPosts();
        })
        .catch(err => {
          this.postDeleted = "";
          this.postError = "Post could not be deleted"
        })
    },

    refreshPosts() {
      let url = '/api/posts'
      axios.get(url)
        .then(res => {
          this.posts = res.data
        })
        .catch(err => console.log(err))
    },

    formatDate(val) {
      let year = new Date(val);
      let month = new Date(val);
      let day = new Date(val);

      let months = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      return `${day.getDate()} ${months[month.getMonth()]}, ${year.getUTCFullYear()}`
    }
  }
}
</script>

<style lang="sass" scoped>
.postlists-container
  margin: 1rem auto
  background: $blue-8
  border: 1px solid $blue-4
  border-radius: 0.2rem

  .postslist-title
    h2
      color: $white-1
      font-size: 2rem
      text-align: center
      margin: 2rem 0 0 0

    p
      text-align: center

.recent-posts
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr))
  color: $white-0
  width: 95%
  margin: 1rem auto 1rem auto

  .blog-post
    width: 94%
    margin: 1rem auto
    background: $blue-7
    color: $white-3
    text-decoration: none
    box-shadow: 0 4px 8px rgba(0,0,0, .6), 0 8px 32px rgba(0,0,0, .4)
    border-radius: 0.2rem
    border: 2px solid $post-border
    z-index: 20

    .view-post-btn
      color: $cyan-4
      padding: 1rem
      font-weight: 500

    .btn-delete
      background: none
      border: 1px solid $red-4
      padding: 0.2rem 0.4rem
      font-weight: 500
      margin: 1rem

    .btn-cancel
      background: $green-3
      border: 1px solid $green-3
      padding: 0.2rem 0.4rem
      font-weight: 500
      margin: 1rem

.blog_block
  margin-bottom: 0
  margin-top: 0
  height: 100%

  .blog_card-block
    margin: -2px
    padding: 1.16961rem
    transition: 0.4s
    &:hover
      color: $white-1

    .title-text
      text-shadow: 0 2px 4px $text-shadow
      font-weight: bold
      font-size: 1.36798em

    .title-subtitle
      font-size: 1.16961em
      color: $subtitle-color

    .title-date
      text-shadow: 0 2px 4px $text-shadow
      font-weight: 200
      font-size: 1rem
      color: $orange-4

  .image-container
    margin: -2px
    border:
      top: 2px solid $post-border
      right: 2px solid $post-border
      left: 2px solid $post-border

    img
      width: 100%
      height: auto
      border-bottom: 2px solid $post-border


.post-deleted
  color: $green-3
  margin: 0.3rem

.post-error
  color: $red-3
  margin: 0.3rem
</style>


