<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)
const displayText = computed(() => locale.value === 'en' ? 'RO' : 'EN')
const ariaLabel = computed(() => 
  locale.value === 'en' ? 'Switch to Romanian' : 'Switch to English'
)

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'ro' : 'en'
  localStorage.setItem('locale', locale.value)
}
</script>

<template>
  <button 
    type="button"
    @click="toggleLanguage" 
    :aria-label="ariaLabel"
    class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm font-semibold outline-offset-2 transition active:transition-none bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
  >
    {{ displayText }}
  </button>
</template>
