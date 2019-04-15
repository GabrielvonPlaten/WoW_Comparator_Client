<template>
  <div>
    <h2>Hello Admin</h2>
    <form @submit.prevent="submitPost()">
      <input v-model="postContent.title">
      <label>Subtitle</label>
      <input v-model="postContent.subtitle"><br>
      <br>
      <div id="editorjs"></div> 
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';

const editor = new EditorJs({
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
});

export default {
  data() {
    return {
      postContent: {
        title: "",
        subtitle: "",
      }
    }
  },

  methods: {
    submitPost() {
      let title = this.postContent.title;
      let subtitle = this.postContent.subtitle

      editor.save()
        .then(outputData => {
          axios.post('/api/create-post', {title, subtitle, outputData})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }
  },
}
</script>

<style lang="sass" scoped>

form
  with: 70%
  margin: 0 auto

#editorjs
  color: $white-2
  border: 2px solid $white-1
  width: 45%
  margin: 0 auto
</style>


