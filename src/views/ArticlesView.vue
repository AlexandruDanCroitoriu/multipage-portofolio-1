<template>
  <SimpleLayout :title="t('pages.articles.title')" :intro="t('pages.articles.intro')">
    <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="flex max-w-3xl flex-col space-y-16">
        <article v-for="article in articles" :key="article.id" class="md:grid md:grid-cols-4 md:items-baseline md:gap-4">
          <div class="md:col-span-1 md:sticky md:top-0">
            <time :datetime="article.date.toISOString()" class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ getFormattedDate(article.date) }}
            </time>
          </div>
          <div class="md:col-span-3">
            <h2 class="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <router-link :to="'/articles/' + article.slug" class="hover:text-teal-500 dark:hover:text-teal-400">
                {{ t(`data.articles.${article.id - 1}.title`) }}
              </router-link>
            </h2>
            <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {{ t(`data.articles.${article.id - 1}.description`) }}
            </p>
            <div class="mt-4">
              <router-link :to="'/articles/' + article.slug" class="text-sm font-semibold text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">
                {{ t('pages.articles.readMore') }} →
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </SimpleLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SimpleLayout from '../components/SimpleLayout.vue'
import { articles } from '../data/articles.js'

const { t, locale } = useI18n()

const getFormattedDate = (date) => {
  const localeMap = { en: 'en-US', ro: 'ro-RO' }
  return new Date(date).toLocaleDateString(localeMap[locale.value], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
