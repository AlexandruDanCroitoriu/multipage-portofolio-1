<template>
  <article>
    <Container class-name="mt-16 lg:mt-32">
      <div class="xl:relative">
        <div class="mx-auto max-w-2xl">
          <button
            type="button"
            :aria-label="t('pages.articles.goBack')"
            class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:hover:border-zinc-700 dark:hover:ring-zinc-300/20 lg:absolute lg:-left-5 lg:-mt-2 xl:left-0 xl:mt-0"
            @click="goBack"
          >
            <ChevronLeftIcon class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-300" />
          </button>
          <article>
            <header class="flex flex-col">
              <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {{ article.title }}
              </h1>
              <time
                :datetime="article.date.toISOString()"
                class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                <span class="ml-3">{{ formatDate(article.date) }}</span>
              </time>
            </header>
            <div
              class="prose prose-invert mt-8 max-w-none"
              v-html="article.content"
            ></div>
          </article>
        </div>
      </div>
    </Container>
  </article>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Container from '../components/Container.vue'
import { articles, formatDate } from '../data/articles.js'
import { articleContent } from '../data/articleContent.js'
import Prism from 'prismjs'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-rust'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const ChevronLeftIcon = { template: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" v-bind="$attrs"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" /></svg>' }

const slug = computed(() => route.params.slug)
const article = computed(() => {
  const baseArticle = articles.find(a => a.slug === slug.value)
  const content = articleContent[slug.value]
  return {
    ...baseArticle,
    ...content
  }
})

const goBack = () => {
  router.push('/articles')
}

const highlightCode = () => {
  Prism.highlightAll()
}

onMounted(() => {
  highlightCode()
})

watch(() => route.params.slug, () => {
  setTimeout(highlightCode, 0)
})
</script>

<style scoped>
:deep(.prose) {
  color: rgb(161 161 170);
  max-width: none;
}

:deep(.dark .prose) {
  color: rgb(212 212 216);
}

:deep(.prose h3) {
  color: rgb(244 244 245);
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1rem;
  line-height: 1.75rem;
}

:deep(.dark .prose h3) {
  color: rgb(244 244 245);
}

:deep(.prose p) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.75rem;
}

:deep(.prose p:first-of-type) {
  margin-top: 0;
}

:deep(.prose a) {
  color: rgb(20 184 166);
  text-decoration: none;
}

:deep(.prose a:hover) {
  color: rgb(13 148 136);
}

:deep(.prose strong) {
  color: rgb(244 244 245);
  font-weight: 600;
}

:deep(.dark .prose strong) {
  color: rgb(244 244 245);
}

:deep(.prose em) {
  font-style: italic;
}

:deep(.prose .text-teal) {
  color: rgb(94 234 212);
}

:deep(.prose code) {
  color: rgb(24 24 27);
  font-size: 0.875em;
}

:deep(.dark .prose code) {
  color: rgb(244 244 245);
}

:deep(.prose pre) {
  background-color: rgb(0 0 0);
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  line-height: 1.7142857;
}

:deep(.dark .prose pre) {
  background-color: rgb(0 0 0);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.1);
}

:deep(.prose pre code) {
  color: rgb(244 244 245);
  background-color: transparent;
  padding: 0;
  font-weight: 400;
  font-size: inherit;
}

:deep(.prose pre code .token.tag),
:deep(.prose pre code .token.class-name),
:deep(.prose pre code .token.selector),
:deep(.prose pre code .token.function) {
  color: rgb(244 114 182);
}

:deep(.prose pre code .token.attr-name),
:deep(.prose pre code .token.keyword),
:deep(.prose pre code .token.rule),
:deep(.prose pre code .token.pseudo-class),
:deep(.prose pre code .token.important) {
  color: rgb(212 212 216);
}

:deep(.prose pre code .token.attr-value),
:deep(.prose pre code .token.class),
:deep(.prose pre code .token.string),
:deep(.prose pre code .token.property) {
  color: rgb(94 234 212);
}

:deep(.prose pre code .token.punctuation),
:deep(.prose pre code .token.attr-equals) {
  color: rgb(113 113 122);
}

:deep(.prose pre code .token.unit),
:deep(.prose pre code .language-css.token.function) {
  color: rgb(186 230 253);
}

:deep(.prose pre code .token.comment),
:deep(.prose pre code .token.operator),
:deep(.prose pre code .token.combinator) {
  color: rgb(161 161 170);
}

:deep(.prose img.article-image) {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.75rem;
}

:deep(.prose ol) {
  list-style-type: decimal;
  padding-left: 1.625rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(.prose ol li) {
  padding-left: 0.375rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

:deep(.prose ol > li::marker) {
  color: rgb(161 161 170);
}

:deep(.dark .prose ol > li::marker) {
  color: rgb(113 113 122);
}
</style>
