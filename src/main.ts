import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LenisVue from 'lenis/vue'
import { i18n } from './i18n'

createApp(App).use(LenisVue).use(i18n).mount('#app')
