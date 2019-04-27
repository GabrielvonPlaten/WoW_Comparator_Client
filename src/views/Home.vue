<template>
  <div>
    <div class="jumbotron" :style="'background-image: url(' + jumbotronImage + ')'">
      <div class="jumbotron__title">
        <h1>WoW Comparator</h1>
        <p>Compare your World of Warcraft character’s stats, gear, mounts, and progress with other’s peoples characters!</p>
        <br>
        <router-link to="/comparator/stats" class="btn btn--purple jumbotron-btn">Compare</router-link>
        <br>
      </div>
    </div>
    <div class="recent-posts">
      <router-link :to="'/post/' + post._id + '/' + post.slug" class="blog-post" v-for="(post, index) in posts" :key="index">
        <div class="blog_block">
          <div class="image-container">
            <img :src="post.blocks.blocks[0].data.url">
          </div>
          <div class="blog_card-block">
            <h2 class="title-text">{{post.title}}</h2>
            <p class="title-subtitle">{{post.subtitle}}</p>
            <b class="title-date">{{formatDate(post.blocks.time)}}</b>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import websiteStyles from '@/apis/website-styles';

export default {
  data() {
    return {
      posts: [],
      postError: null,
      jumbotronImage: null,
    }
  },

  created() {
    let url = '/api/posts';
    axios.get(url)
      .then(res => {
        this.posts = res.data
      })
      .catch(err => this.postError = err);

    // Jumbotron Image
    websiteStyles.getJumbotronBgImage()
      .then(res => this.jumbotronImage = res.data.jumbotronBgImage)
  },

  methods: {
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
.jumbotron
  // padding: 1px 0
  padding: 1px
  height: 74vh
  // background: url('https://www.blazingboost.com/skin/upload/front/services/5bf16cc8-d654-4e74-a267-456a0541888e.jpg')
  // background: url('https://i.imgur.com/IU6ge2L.png')
  // background: url('https://bnetcmsus-a.akamaihd.net/cms/blog_header/nh/NHY6SSZVXHC41545344020417.jpg')
  // background: url('https://i.imgur.com/TXeokD6.jpg')
  background-attachment: fixed
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  background-color: $blue-2
  background-blend-mode: overlay
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

  .jumbotron-btn
    padding: 0.8rem 1rem
    border: 2px solid $orange-4
    font-size: 16px
    transition: all 0.27s
    &:hover
      background: $orange-5

  &__title
    margin: 11% auto 0 auto
    text-align: center
    color: $white-0
    text-shadow: $text-shadow

    h1
      font-weight: normal
      font-size: 3rem
      margin-bottom: 1rem

    p
      font-weight: 200
      font-size: 1.3rem
      max-width: 25%
      letter-spacing: 1px
      text-shadow: $text-shadow
      margin: 0 auto 2rem auto

.recent-posts
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr))
  color: $white-0
  margin-top: 1rem
  width: 90%
  margin: 1rem auto -20rem auto
  position: relative
  top: -110px

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
    transition: 0.3s
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
      height: 14.5rem
      border-bottom: 2px solid $post-border


</style>


