<template>
  <div 
    v-if="post" 
    class="post-bg" 
    :style="{ backgroundImage: 'url(' + post[0].blocks.blocks[0].data.url + ')' }">
    <div class="post-container">
      <div class="post-box">
        <div class="image-container">
          <img :src="post[0].blocks.blocks[0].data.url">
        </div>
        <div class="post-content">
          <div class="post-header">
            <h2 class="post-title">{{post[0].title}}</h2>
            <h3 class="post-date">
              <span style="color: #9d9d9d">By: </span>
              <span style="color: #E0E0E0">{{author}}</span>
              <span style="color: #9d9d9d"> - </span> {{formatDate(post[0].blocks.time)}}</h3>
          </div>
          <div v-for="(b, index) in post[0].blocks.blocks" :key="index">
            <div v-if="b.type === 'paragraph'">
              <p v-html="b.data.text"></p>
            </div>
            <div v-if="b.type === 'image' && index > 0">
              <div class="blog-image-container">
                <img :src="b.data.url">
                <p v-if="b.data.caption !== '<br>'">{{b.data.caption}}</p>
              </div>
            </div>
            <div v-if="b.type === 'embed'">
              <div class="blog-image-container">
                <iframe :width="b.data.width" :height="b.data.height" :src="b.data.embed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
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
      post: null,
      author: null,
    }
  },

  created() {
    console.log(this.$route.params.slug)
    let url = '/api/post/' + this.$route.params.id + '/' + this.$route.params.slug
    axios.get(url)
      .then(res => {
        this.post = res.data.post
        this.author = res.data.author
      })
      .catch(err => console.log(err))
  },

  methods: {
    formatDate(val) {
      let year = new Date(val);
      let month = new Date(val);
      let day = new Date(val);
  
      let months = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
      return `${day.getDate()} ${months[month.getMonth()]}, ${year.getUTCFullYear()}`
    },
  }

}
</script>


<style lang="sass" scoped>
.post-container
  margin: 2rem 0 3rem 0
  padding: 2rem 0 3rem 0

.post-bg
    padding: 1px 0
    height: auto
    background-attachment: fixed
    background-repeat: no-repeat
    background-size: cover
    background-color: $blue-5
    background-blend-mode: soft-light

.post-box
  width: 70%
  border: 1px solid $blue-4
  margin: 0 auto
  position: relative
  top: 2.2rem
  z-index: 10
  background: $blue-7
  box-shadow: 0 6px 10px rgba(0,0,0, .6), 0 10px 34px rgba(0,0,0, .6)

  .image-container
    img
      width: 100%
      height: auto
      border-bottom: 2px solid $post-border


.post-content
  margin: 2rem auto 4rem auto
  width: 60%

  .post-header
    margin-bottom: 5.1rem
    border-bottom: 1px solid $post-border

    h2
      color: $white-0
      font-size: 2.5rem
      font-weight: 200
      margin: 0

    .post-date
      color: $orange-4
      font-weight: 200

  p
    color: $white-1
    font-size: 1.1rem
    line-height: 1.5rem
    letter-spacing: 1px
    font-weight: light


.blog-image-container
  margin: 1.1rem auto

  img
    width: 100%
    border: 1px solid $blue-4

  p
    margin: 0
    color: $white-2
    font-size: 0.9rem
    border-bottom: 1px solid $post-border
</style>
