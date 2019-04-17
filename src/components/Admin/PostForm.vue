<template>
  <form @submit.prevent="submitPost()">
    <div class="form-division">
      <label for="title">Title</label>
      <input v-model="postContent.title" name="title">
    </div>
    <div class="form-division">
      <label for="subtitle">Subtitle</label>
      <input v-model="postContent.subtitle" name="subtitle">
    </div>
    <div class="form-division">
      <label for="editorjs">Post Content</label>
      <div id="editorjs"></div>
    </div>
    <button class="btn btn--green btn-form-submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

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
  }
}
</script>

<style lang="sass" scoped>
form
  padding: 1rem 3rem
  margin: 1.5rem auto
  background: $blue-6
  border: 1px solid $blue-4
  border-radius: 0.2rem

  .form-division
    margin: 1.2rem 0

    label
      display: block
      color: $cyan-4
      font-size: 1.2rem
      font-weight: 300

    input
      width: 100%
      border: 1px solid $blue-4
      background: $blue-7
      padding: 0.2rem 0.4rem
      font-size: 1.2rem
      color: $white-2


  .btn-form-submit
    margin: 1rem 0

#editorjs
  color: $white-2
  border: 1px solid $blue-4
  background: $blue-7
  margin: 0 auto
  min-height: 70vh
</style>

