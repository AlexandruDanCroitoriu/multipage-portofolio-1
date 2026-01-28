import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ro from './locales/ro.json'

// Get initial locale from localStorage or browser, default to 'en'
const getInitialLocale = () => {
  const stored = localStorage.getItem('locale')
  if (stored && ['en', 'ro'].includes(stored)) {
    return stored
  }
  
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'ro' ? 'ro' : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    ro
  }
})

export default i18n
