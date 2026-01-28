<template>
  <Container class-name="mt-32">
    <div class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        {{ t('pages.thankYou.title') }}
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        {{ t('pages.thankYou.message') }}
      </p>
    </div>
  </Container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Container from '../components/Container.vue'

const { t } = useI18n()
</script>
