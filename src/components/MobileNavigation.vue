<template>
  <div class="pointer-events-auto md:hidden">
    <button 
      @click="isOpen = !isOpen" 
      class="inline-flex items-center justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/75 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/75 dark:active:text-zinc-50/70"
    >
      <HamburgerIcon v-if="!isOpen" class="h-6 w-6 stroke-current" />
      <CloseIcon v-else class="h-6 w-6 stroke-current" />
    </button>
    <div v-if="isOpen" class="absolute right-0 top-full mt-4 w-48 rounded-lg bg-white shadow-lg dark:bg-zinc-800 z-50">
      <nav class="flex flex-col">
        <router-link to="/about" class="block px-4 py-3 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0" active-class="text-teal-500 bg-zinc-50 dark:bg-zinc-700/50" @click="isOpen = false">
          {{ t('navigation.about') }}
        </router-link>
        <router-link to="/articles" class="block px-4 py-3 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0" active-class="text-teal-500 bg-zinc-50 dark:bg-zinc-700/50" @click="isOpen = false">
          {{ t('navigation.articles') }}
        </router-link>
        <router-link to="/projects" class="block px-4 py-3 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0" active-class="text-teal-500 bg-zinc-50 dark:bg-zinc-700/50" @click="isOpen = false">
          {{ t('navigation.projects') }}
        </router-link>
        <router-link to="/speaking" class="block px-4 py-3 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0" active-class="text-teal-500 bg-zinc-50 dark:bg-zinc-700/50" @click="isOpen = false">
          {{ t('navigation.speaking') }}
        </router-link>
        <router-link to="/uses" class="block px-4 py-3 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0" active-class="text-teal-500 bg-zinc-50 dark:bg-zinc-700/50" @click="isOpen = false">
          {{ t('navigation.uses') }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HamburgerIcon from './icons/HamburgerIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'

const { t } = useI18n()
const isOpen = ref(false)
</script>
