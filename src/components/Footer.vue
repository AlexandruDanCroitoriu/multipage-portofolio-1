<template>
  <footer class="mt-32 flex-none">
    <ContainerOuter>
      <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <ContainerInner>
          <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <router-link to="/about" class="transition hover:text-teal-500 dark:hover:text-teal-400">{{ t('navigation.about') }}</router-link>
              <router-link to="/articles" class="transition hover:text-teal-500 dark:hover:text-teal-400">{{ t('navigation.articles') }}</router-link>
              <router-link to="/projects" class="transition hover:text-teal-500 dark:hover:text-teal-400">{{ t('navigation.projects') }}</router-link>
              <router-link to="/speaking" class="transition hover:text-teal-500 dark:hover:text-teal-400">{{ t('navigation.speaking') }}</router-link>
              <router-link to="/uses" class="transition hover:text-teal-500 dark:hover:text-teal-400">{{ t('navigation.uses') }}</router-link>
            </div>
            <p class="text-sm text-zinc-400 dark:text-zinc-500">
              {{ t('components.footer.copyright', { year: new Date().getFullYear() }) }}
            </p>
          </div>
        </ContainerInner>
      </div>
    </ContainerOuter>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ContainerOuter from './ContainerOuter.vue'
import ContainerInner from './ContainerInner.vue'

const { t } = useI18n()
</script>
