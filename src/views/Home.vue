<template>
  <div>
    <div class="jumbotron" :style="`background-image: url(${jumbotronImage})`">
      <div class="jumbotron__title animation">
        <h1>WoW Comparator</h1>
        <p>Compare your World of Warcraft character’s stats, gear, mounts, and progress with others people's characters!</p>
        <br />
        <router-link to="/compare/stats" class="btn btn--purple jumbotron-btn">Compare</router-link>
        <br />
      </div>
    </div>
    <div class="recent-posts">
      <router-link
        :to="`/post/${post._id}/${post.slug}`"
        class="blog-post"
        v-for="(post, index) in posts"
        :key="index"
      >
        <div class="blog_block">
          <div class="image-container">
            <img :src="post.blocks.blocks[0].data.url" />
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
import axios from "axios";
import websiteStyles from "@/apis/website-styles";

export default {
  data() {
    return {
      posts: [],
      postError: null,
      jumbotronImage: null,
      access_token: null
    };
  },

  async created() {
    let url = "/api/posts";
    await axios
      .get(url)
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => (this.postError = err));

    // Jumbotron Image
    websiteStyles
      .getJumbotronBgImage()
      .then(res => (this.jumbotronImage = res.data[0].backgroundImage));
  },

  mounted() {
    const element = document.querySelectorAll(".animation");
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if (entries[0].intersectionRatio) {
        entries[0].target.style.opacity = 1;
        entries[0].target.style.transform = "translateY(0)";
      }
    });

    observer.observe(element[0]);
  },

  methods: {
    formatDate(val) {
      let year = new Date(val);
      let month = new Date(val);
      let day = new Date(val);

      let months = [
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
.jumbotron
  padding: 1px
  height: 76vh
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
  grid-template-columns: repeat(4, 1fr)
  color: $white-0
  width: 90%
  margin: 1rem auto 4rem auto
  position: relative
  top: -110px

  .blog-post
    width: 94%
    margin: 1rem auto
    background: $blue-7
    color: $white-3
    text-decoration: none
    box-shadow: $box-shadow-5
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

  .title-text
    text-shadow: 0 2px 4px $text-shadow
    font-weight: bold
    font-size: 1.36798em
    color: $white-0
    transition: all 0.3s

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
      height: 14.8rem
      border-bottom: 2px solid $post-border

.blog_block:hover
  .title-text
    color: $orange-2

// Animations
.animation
  opacity: 0
  transition: all 2.2s 0.2s ease-out
  transform: translateY(100px)

// Media Queries
@media only screen and (max-width: 1024px)

  .jumbotron__title
    margin-top: 20%

    p
      max-width: 50%

  .recent-posts
    width: 98%
    grid-template-columns: repeat(3, 1fr)

  .blog_block
    .image-container
      img
        height: 12rem
@media only screen and (max-width: 768px)
  .recent-posts
    grid-template-columns: repeat(2, 1fr)

  .blog_block
    .image-container
      img
        height: 13rem

</style>


