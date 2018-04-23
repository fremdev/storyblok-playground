import Vue from 'vue'
import StoryblokVue from 'storyblok-vue'
import App from './App.vue'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid.vue'

Vue.config.productionTip = false
Vue.use(StoryblokVue)
Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)

new Vue({
  render: h => h(App)
}).$mount('#app')
