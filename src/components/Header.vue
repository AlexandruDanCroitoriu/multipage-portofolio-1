<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Container from './Container.vue'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import MobileNavigation from './MobileNavigation.vue'
import LanguageToggle from './LanguageToggle.vue'
import avatarImage from '../images/avatar.jpg'

const { t } = useI18n()
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const isVisible = ref(true)
let lastScrollY = 0
let ticking = false

const toggleTheme = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 50) {
        isVisible.value = true
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        isVisible.value = false
      } else {
        // Scrolling up
        isVisible.value = true
      }
      
      lastScrollY = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="pointer-events-none fixed top-0 z-50 flex w-full flex-col transition-transform duration-300"
    :class="{ '-translate-y-full': !isVisible }"
  >
    <div class="z-10 h-16 pt-6">
      <Container>
        <div class="relative flex gap-4">
          <div class="flex flex-1">
            <router-link v-if="!isHomePage" to="/" aria-label="Home" class="pointer-events-auto">
              <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                <img :src="avatarImage" alt="Andrei Popescu" class="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
              </div>
            </router-link>
          </div>
          <div class="flex flex-1 justify-end md:justify-center">
            <MobileNavigation class="pointer-events-auto md:hidden" />
            <nav class="pointer-events-auto hidden md:block">
              <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <li><router-link to="/about" class="relative block px-3 py-2 transition hover:text-teal-500" active-class="text-teal-500">{{ t('navigation.about') }}</router-link></li>
                <li><router-link to="/articles" class="relative block px-3 py-2 transition hover:text-teal-500" active-class="text-teal-500">{{ t('navigation.articles') }}</router-link></li>
                <li><router-link to="/projects" class="relative block px-3 py-2 transition hover:text-teal-500" active-class="text-teal-500">{{ t('navigation.projects') }}</router-link></li>
                <li><router-link to="/speaking" class="relative block px-3 py-2 transition hover:text-teal-500" active-class="text-teal-500">{{ t('navigation.speaking') }}</router-link></li>
                <li><router-link to="/uses" class="relative block px-3 py-2 transition hover:text-teal-500" active-class="text-teal-500">{{ t('navigation.uses') }}</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="flex justify-end md:flex-1">
            <div class="pointer-events-auto flex gap-2">
              <LanguageToggle />
              <button @click="toggleTheme" class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/75 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/75 dark:active:text-zinc-50/70 group">
                <SunIcon class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden dark:group-hover:stroke-zinc-400" />
                <MoonIcon class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block dark:group-hover:fill-zinc-600 dark:group-hover:stroke-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </header>
</template>
