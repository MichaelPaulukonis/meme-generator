import { createApp } from 'vue'
import infiniteScroll from "vue-infinite-scroll"

import './style.css'
import App from './App.vue'
import router from './router'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(infiniteScroll)
  .use(vuetify)
  .mount('#app')
