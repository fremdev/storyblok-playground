<template>
  <div>
    <component
      :blok="story.content"
      :is="story.content.component" />
  </div>
</template>

<script>
import config from '../../config/config'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    window.storyblok.init({
      accessToken: config.apiKey
    })
    window.storyblok.on('change', () => {
      this.getStory('draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getStory('published')
      }
    })
  },
  methods: {
    getStory (version) {
      window.storyblok.get({
        slug: 'home', 
        version
      }, (data) => {
        this.story = {
          content: {
            body: []
          }
        }
        this.$nextTick(() => {
          this.story = data.story
        })
      })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
