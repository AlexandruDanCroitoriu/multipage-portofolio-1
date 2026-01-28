import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import router from './router.js'
import i18n from './i18n'

// Initialize theme
function initializeTheme() {
  // Default to dark mode unless user explicitly set light mode
  if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
    // Set dark as default in localStorage if not already set
    if (!('theme' in localStorage)) {
      localStorage.theme = 'dark'
    }
  }
}

initializeTheme()

createApp(App).use(router).use(i18n).mount('#app')
