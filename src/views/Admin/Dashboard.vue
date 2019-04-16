<template>
  <div class="admin-dashboard-bg">
    <form @submit.prevent="submitPost()">
      <div class="form-division">
        <label for="title">Title</label>
        <input v-model="postContent.title" name="title">
      </div>
      <div class="form-division">
        <label for="subtitle">Subtitle</label>
        <input v-model="postContent.subtitle" name="subtitle">
      </div>
      <div id="editorjs"></div>
      <button class="btn btn--green btn-form-submit">Submit</button>
    </form>

    <button @click.prevent="logoutAdmin" class="btn btn--red logout-btn">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';
import adminService from '@/apis/adminService';
import store from '@/Vuex/store'

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';



export default {
  data() {
    return {
      postContent: {
        title: "",
        subtitle: "",
      },
      editor: new EditorJS({
        holderId: 'editorjs',
        tools: {
          header: {
            class: Header,
            inlineToolBar: ['link']
          },

          list: {
            class: List,
            inlineToolbar: ['link', 'bold']
          },

          embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
              services: {
                youtube: true,
                coub: true,
              }
            }
          },

          image: {
            class: SimpleImage,
          }
        },
      })
    }
  },

  methods: {
    submitPost() {
      console.log(this.editor);
      let title = this.postContent.title;
      let subtitle = this.postContent.subtitle

      this.editor.save()
        .then(outputData => {
          axios.post('/api/create-post', {title, subtitle, outputData})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    },

    logoutAdmin() {
      adminService.logout(localStorage.getItem('token'))
        .then(async res => {
          localStorage.removeItem('token')
          store.dispatch('adminLogout');
          this.$router.go({ path: this.$router.path })
        })
    }
  },
}
</script>

<style lang="sass" scoped>

.dashboard-greet-message
  color: $white-2

form
  width: 70%
  padding: 1rem 3rem
  margin: 1.5rem auto
  background: $blue-6
  border-radius: 0.4rem

  .form-division
    margin: 1.2rem 0

    label
      display: block
      color: $white-4
      font-size: 1.2rem
      font-weight: 300

  .btn-form-submit
    margin: 1rem 0

#editorjs
  color: $white-2
  border: 1px solid $blue-4
  background: $blue-7
  margin: 0 auto
  min-height: 70vh
</style>


