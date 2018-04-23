import Vue from 'vue'
import StoryblokVue from 'storyblok-vue'
import App from './App.vue'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'

Vue.config.productionTip = false
Vue.use(StoryblokVue)
Vue.component('page', Page)
Vue.component('teaser', Teaser)

new Vue({
  render: h => h(App)
}).$mount('#app')
