<template>
  <div class="pointer-events-auto md:hidden">
    <button @click="isOpen = !isOpen" class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70">
      <span v-if="isOpen">{{ t('components.mobileNav.close') }}</span>
      <span v-else>{{ t('components.mobileNav.menu') }}</span>
      <ChevronDownIcon :class="['ml-3 h-auto w-2 stroke-zinc-500 transition', isOpen && 'rotate-180']" />
    </button>
    <div v-if="isOpen" class="absolute right-0 top-full mt-4 w-48 rounded-lg bg-white shadow-lg dark:bg-zinc-800">
      <nav class="flex flex-col">
        <router-link to="/about" class="block px-4 py-2 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200" active-class="text-teal-500" @click="isOpen = false">
          {{ t('navigation.about') }}
        </router-link>
        <router-link to="/articles" class="block px-4 py-2 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200" active-class="text-teal-500" @click="isOpen = false">
          {{ t('navigation.articles') }}
        </router-link>
        <router-link to="/projects" class="block px-4 py-2 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200" active-class="text-teal-500" @click="isOpen = false">
          {{ t('navigation.projects') }}
        </router-link>
        <router-link to="/speaking" class="block px-4 py-2 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200" active-class="text-teal-500" @click="isOpen = false">
          {{ t('navigation.speaking') }}
        </router-link>
        <router-link to="/uses" class="block px-4 py-2 text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-200" active-class="text-teal-500" @click="isOpen = false">
          {{ t('navigation.uses') }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ChevronDownIcon from './icons/ChevronDownIcon.vue'

const { t } = useI18n()
const isOpen = ref(false)
</script>
