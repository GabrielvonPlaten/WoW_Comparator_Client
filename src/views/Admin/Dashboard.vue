<template>
  <div>
    <h2>Hello Admin</h2>
    <form @submit.prevent="submitPost()">
      <input v-model="postContent.title">
      <div id="editorjs"></div> 
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';

const editor = new EditorJS({
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
        time: "",
        version: "",
      }
    }
  },

  methods: {
    submitPost() {
      let title = this.postContent.title;

      editor.save()
        .then(outputData => {
          axios.post('/api/create-post', { title, outputData })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  },
}
</script>

<style lang="sass" scoped>
*
  color: $white-2

#editorjs
  border: 2px solid $white-1
  width: 45%
  margin: 0 auto
</style>


