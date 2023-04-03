import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '~/router'
import { setupStore } from '~/store'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'highlight.js/styles/default.css'

function setupApp() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

setupApp()
