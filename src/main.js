import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import router from './router.js'
import i18n from './i18n'

// Initialize theme
function initializeTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

initializeTheme()

createApp(App).use(router).use(i18n).mount('#app')
