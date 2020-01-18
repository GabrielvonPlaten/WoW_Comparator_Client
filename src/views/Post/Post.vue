<template>
  <div
    v-if="post"
    class="post-bg"
    :style="{ backgroundImage: `url(${post.blocks.blocks[0].data.url})` }"
  >
    <div class="post-container">
      <div class="post-box">
        <div class="image-container">
          <img :src="post.blocks.blocks[0].data.url" />
        </div>
        <div class="post-content">
          <div class="post-header">
            <h2 class="post-title">{{post.title}}</h2>
            <h3 class="post-date">
              <span style="color: #9d9d9d">By:</span>
              <span style="color: #E0E0E0">{{author}}</span>
              <span style="color: #9d9d9d">-</span>
              {{formatDate(post.blocks.time)}}
            </h3>
          </div>
          <div v-for="(b, index) in post.blocks.blocks" :key="index">
            <div v-if="b.type === 'paragraph'">
              <p v-html="b.data.text"></p>
            </div>
            <div v-if="b.type === 'header'">
              <h2 class="post-content-header" v-html="b.data.text"></h2>
            </div>
            <div v-if="b.type === 'image' && index > 0">
              <div class="blog-image-container">
                <img :src="b.data.url" />
                <p v-if="b.data.caption !== '<br>'">{{b.data.caption}}</p>
              </div>
            </div>
            <div v-if="b.type === 'list'">
              <ol>
                <li v-for="(i, index) in b.data.items" :key="index">
                  <p v-html="i"></p>
                </li>
              </ol>
            </div>
            <div v-if="b.type === 'embed'">
              <div class="blog-image-container">
                <iframe
                  :width="b.data.width"
                  :height="b.data.height"
                  :src="b.data.embed"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: null,
      author: null
    };
  },

  created() {
    const url = `/api/post/${this.$route.params.id}/${this.$route.params.slug}`;
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.post = res.data.post[0];
        this.author = res.data.author;
      })
      .catch(err => console.log(err));
  },

  methods: {
    formatDate(val) {
      const year = new Date(val);
      const month = new Date(val);
      const day = new Date(val);

      const months = [
        "January",
        "February",
        "Mars",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return `${day.getDate()} ${
        months[month.getMonth()]
      }, ${year.getUTCFullYear()}`;
    }
  }
};
</script>

<style lang="sass" scoped>
.post-container
  margin: 4.1rem 0 3rem 0
  padding: 1.3rem 0 3rem 0

.post-bg
  padding: 1px 0
  height: auto
  background-attachment: fixed
  background-repeat: no-repeat
  background-size: cover
  background-color: $blue-9
  background-blend-mode: overlay

.post-box
  width: 70%
  border: 1px solid $blue-4
  margin: 0 auto
  position: relative
  z-index: 10
  background: $blue-7
  box-shadow: $box-shadow-6

  .image-container
    img
      width: 100%
      height: 48rem
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
    color: $white-0
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

ol
  list-style: disc
  color: $white-1

.post-content-header
  color: $white-0
  margin-top: 3.4rem
  font-size: 2rem

// Media Queries
@media only screen and (max-width: 1440px) 
  .post-box
    width: 90%

@media only screen and (max-width: 1024px)
  .post-box

    // Post's header image
    .image-container
      img
        height: 36rem

  .post-content
    width: 80%

@media only screen and (max-width: 690px)
  .post-box
    .image-container
      img
        height: 28rem

   
@media only screen and (max-width: 425px)
  .post-box
    .image-container
      img
        height: 20rem

  .post-content
    width: 90%
</style>
