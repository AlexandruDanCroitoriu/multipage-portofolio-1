<template>
  <SimpleLayout 
    :title="t('pages.speaking.title')"
    :intro="t('pages.speaking.intro')"
  >
    <div class="space-y-20">
      <!-- Conferences Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{{ t('pages.speaking.conferences') }}</h2>
          <div class="md:col-span-3">
            <div class="space-y-16">
              <article v-for="(conference, index) in speakingData.conferences" :key="index" class="group relative flex flex-col items-start">
                <Card>
                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {{ conference.title }}
                  </h3>
                  <p class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                    <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    {{ conference.event }}
                  </p>
                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {{ conference.description }}
                  </p>
                  <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                    {{ conference.cta }}
                    <ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
                  </div>
                </Card>
              </article>
            </div>
          </div>
        </div>
      </section>
      <!-- Podcasts Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{{ t('pages.speaking.podcasts') }}</h2>
          <div class="md:col-span-3">
            <div class="space-y-16">
              <article v-for="(podcast, index) in speakingData.podcasts" :key="index" class="group relative flex flex-col items-start">
                <Card>
                  <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {{ podcast.title }}
                  </h3>
                  <p class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                    <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    {{ podcast.show }}
                  </p>
                  <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {{ podcast.description }}
                  </p>
                  <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                    {{ podcast.cta }}
                    <ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
                  </div>
                </Card>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SimpleLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SimpleLayout from '../components/SimpleLayout.vue'
import Card from '../components/Card.vue'
import ChevronRightIcon from '../components/icons/ChevronRightIcon.vue'
import en from '../i18n/locales/en.json'
import ro from '../i18n/locales/ro.json'

const { t, locale } = useI18n()
const messages = { en, ro }

const speakingData = computed(() => {
  return messages[locale.value]?.data?.speaking || { conferences: [], podcasts: [] }
})
</script>
