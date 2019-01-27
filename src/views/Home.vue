<template>
  <div>
    <div class="jumbotron">
      <div class="jumbotron__title">
        <h1>WoW Comparator</h1>
        <p>Compare your World of Warcraft character’s stats, gear, mounts, and progress with other’s peoples characters!</p>
        <br>
        <router-link to="/comparator/stats" class="btn btn--purple">Start Comparing!</router-link>
        <br>
      </div>
    </div>
    <h1 class="news-title">NEWS</h1>
    <div class="recent-posts">
      <a href="https://google.com" class="blog-post" v-for="(post, index) in posts" :key="index">
        <div class="blog_block">
          <div class="image-container">
            <img :src="post.thumbnail">
          </div>

          <div class="blog_card-block">
            <h2 class="title-text">{{post.title}}</h2>
            <p class="title-description">{{post.description}}</p>
            <br>
            <b class="title-date">{{post.date}}</b>
          </div>
        </div>
      </a>
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

  filters: {
    dateFormat(value) {
      if (!value) return '';

      value = new Date(value);
    }
  },

  created() {
    axios.get('http://localhost:5000/comparator/posts/api')
      .then(res => this.posts = res.data)
      .catch(err => console.log(err));
  }
}
</script>


<style lang="sass" scoped>
.jumbotron
  padding: 1px 0
  height: 34rem

  // background: url('../assets/world_of_warcraft_wrath_of_the_lich_king-1920x1080.jpg')
  background: url('https://www.blazingboost.com/skin/upload/front/services/5bf16cc8-d654-4e74-a267-456a0541888e.jpg')
  background-repeat: no-repeat
  background-color: $blue-5
  background-blend-mode: soft-light
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)


  &__title
    margin: 9% auto 0 auto
    text-align: center
    color: $white-0

    h1
      font-weight: normal
      font-size: 2.6rem

    p
      font-weight: 200
      font-size: 1.3rem
      max-width: 25%
      margin: 0 auto 2rem auto

.news-title
  text-align: center
  color: $white-3
  letter-spacing: 1px
  margin: 2rem 0 0 0

.recent-posts
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr))
  color: $white-0
  margin-top: 1rem
  width: 85%
  margin: 1rem auto 0 auto

  .blog-post
    width: 94%
    margin: 1rem auto
    background: $blue-7
    color: $white-1
    text-decoration: none
    box-shadow: 0 2px 8px rgba(0,0,0,.6), 0 8px 32px rgba(0,0,0,.4)
    border-radius: 0.2rem
    border: 2px solid $post-border
    transition: all 0.2s
    opacity: 0.7
    &:hover
      opacity: 1

.blog_block
  margin-bottom: 0
  margin-top: 0
  height: 100%

  .blog_card-block
    margin: -2px
    padding: 1.16961rem

    .title-text
      text-shadow: 0 2px 4px rgba(0,0,0,.8), 0 8px 16px rgba(0,0,0,.6)
      font-weight: bold
      font-size: 1.36798em

    .title-description
      font-size: 1.16961em
      color: $description-color

    .title-date
      text-shadow: 0 2px 4px rgba(0,0,0,.8), 0 8px 16px rgba(0,0,0,.6)
      font-weight: 200
      font-size: 1rem
      color: $orange-5

  .image-container
    margin: -2px 

    img
      width: 100%
      height: auto
      border-bottom: 2px solid $post-border

</style>


