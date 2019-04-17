<template>
  <div>
    <div class="postlists-container">
      <div class="postslist-title">
        <h2>All Posts</h2>
      </div>
      <div class="recent-posts">
        <a href="https://google.com" class="blog-post" v-for="(post, index) in posts" :key="index">
          <div class="blog_block">
            <div class="image-container">
              <img :src="post.blocks.blocks[0].data.url">
            </div>
            <div class="blog_card-block">
              <h2 class="title-text">{{post.title}}</h2>
              <p class="title-subtitle">{{post.subtitle}}</p>
              <b class="title-date">{{post.blocks.time}}</b>
            </div>
          </div>
        </a>
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
      .then(res => {
        this.posts = res.data
      })
      .catch(err => console.log(err))
  },
}
</script>

<style lang="sass" scoped>
.postlists-container
  margin: 1.5rem auto
  background: $blue-6
  border: 1px solid $blue-4
  border-radius: 0.2rem

  .postslist-title
    h2
      color: $white-1
      font-size: 2rem
      text-align: center

.recent-posts
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr))
  color: $white-0
  margin-top: 1rem
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


</style>


