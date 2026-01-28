<template>
  <div>
    <!-- Hero Section -->
    <Container class-name="mt-9">
      <div class="max-w-2xl">
        <router-link to="/" aria-label="Home" class="pointer-events-auto">
          <img :src="avatarImage" alt="Andrei Popescu" class="h-16 w-16 my-8 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
        </router-link>
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {{ t('pages.home.hero.title') }}
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {{ t('pages.home.hero.description') }}
        </p>
        <div class="mt-6 flex gap-6">
          <a href="#" :aria-label="t('components.social.followOnX')" class="group -m-1 p-1">
            <XIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a href="#" :aria-label="t('components.social.followOnInstagram')" class="group -m-1 p-1">
            <InstagramIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a href="#" :aria-label="t('components.social.followOnGitHub')" class="group -m-1 p-1">
            <GitHubIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a href="#" :aria-label="t('components.social.followOnLinkedIn')" class="group -m-1 p-1">
            <LinkedInIcon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
        </div>
      </div>
    </Container>

    <!-- Photos Section -->
    <div class="mt-16 sm:mt-20">
      <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div v-for="(img, idx) in photos" :key="idx" :class="['relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800', img.rotation]">
          <img :src="img.src" :alt="img.alt" class="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Articles & Sidebar Section -->
    <Container class-name="mt-24 md:mt-28">
      <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <!-- Articles -->
        <div class="flex flex-col gap-16">
          <article v-for="article in latestArticles" :key="article.slug" class="group relative flex flex-col items-start">
            <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
              <router-link :to="'/articles/' + article.slug">
                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span class="relative z-10">{{ t(`data.articles.${article.id - 1}.title`) }}</span>
              </router-link>
            </h2>
            <time :datetime="article.date.toISOString()" class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
              <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              </span>
              {{ getFormattedDate(article.date) }}
            </time>
            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {{ t(`data.articles.${article.id - 1}.description`) }}
            </p>
            <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
              {{ t('pages.articles.readMore') }}
              <ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
            </div>
          </article>
        </div>

        <!-- Sidebar -->
        <div class="space-y-10 lg:pl-16 xl:pl-24">
          <!-- Newsletter -->
          <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <MailIcon class="h-6 w-6 flex-none" />
              <span class="ml-3">{{ t('pages.home.newsletter.title') }}</span>
            </h2>
            <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {{ t('pages.home.newsletter.description') }}
            </p>
            <form class="mt-6 flex" @submit.prevent="handleSubscribe">
              <span class="flex min-w-0 flex-auto p-px">
                <input
                  v-model="email"
                  type="email"
                  :placeholder="t('pages.home.newsletter.placeholder')"
                  :aria-label="t('pages.home.newsletter.placeholder')"
                  required
                  class="w-full appearance-none rounded-[calc(theme(borderRadius.md)-1px)] bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
                />
              </span>
              <Button type="submit" class="ml-4 flex-none">{{ t('pages.home.newsletter.button') }}</Button>
            </form>
          </div>

          <!-- Work Section -->
          <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon class="h-6 w-6 flex-none" />
              <span class="ml-3">{{ t('pages.home.work.title') }}</span>
            </h2>
            <ol class="mt-6 space-y-4">
              <li v-for="(role, index) in resume" :key="role.company" class="flex gap-4">
                <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img :src="role.logo" :alt="t(`data.work.${index}.company`)" class="h-7 w-7" />
                </div>
                <dl class="flex flex-auto flex-wrap gap-x-2">
                  <dt class="sr-only">{{ t('pages.home.work.labels.company') }}</dt>
                  <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {{ t(`data.work.${index}.company`) }}
                  </dd>
                  <dt class="sr-only">{{ t('pages.home.work.labels.role') }}</dt>
                  <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                    {{ t(`data.work.${index}.title`) }}
                  </dd>
                  <dt class="sr-only">{{ t('pages.home.work.labels.date') }}</dt>
                  <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                    <time :datetime="role.startDate">{{ t(`data.work.${index}.start`) }}</time>
                    <span aria-hidden="true">—</span>
                    <time :datetime="role.endDate">{{ t(`data.work.${index}.end`) === 'Present' ? t('pages.home.work.present') : t(`data.work.${index}.end`) }}</time>
                  </dd>
                </dl>
              </li>
            </ol>
            <Button href="#" variant="secondary" class="group mt-6 w-full">
              {{ t('pages.home.work.download') }}
              <ArrowDownIcon class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Container from '../components/Container.vue'
import Button from '../components/Button.vue'
import XIcon from '../components/icons/XIcon.vue'
import InstagramIcon from '../components/icons/InstagramIcon.vue'
import GitHubIcon from '../components/icons/GitHubIcon.vue'
import LinkedInIcon from '../components/icons/LinkedInIcon.vue'
import MailIcon from '../components/icons/MailIcon.vue'
import BriefcaseIcon from '../components/icons/BriefcaseIcon.vue'
import ChevronRightIcon from '../components/icons/ChevronRightIcon.vue'
import ArrowDownIcon from '../components/icons/ArrowDownIcon.vue'
import { articles } from '../data/articles.js'

const { t, locale } = useI18n()
const router = useRouter()
const email = ref('')

const getFormattedDate = (date) => {
  const localeMap = { en: 'en-US', ro: 'ro-RO' }
  return new Date(date).toLocaleDateString(localeMap[locale.value], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

import avatarImage from '../images/avatar.jpg'
import image1 from '../images/photos/image-1.jpg'
import image2 from '../images/photos/image-2.jpg'
import image3 from '../images/photos/image-3.jpg'
import image4 from '../images/photos/image-4.jpg'
import image5 from '../images/photos/image-5.jpg'
import logoPlanetaria from '../images/logos/planetaria.svg'
import logoAirbnb from '../images/logos/airbnb.svg'
import logoFacebook from '../images/logos/facebook.svg'
import logoStarbucks from '../images/logos/starbucks.svg'

const photos = [
  { rotation: 'rotate-2', src: image1, alt: '' },
  { rotation: '-rotate-2', src: image2, alt: '' },
  { rotation: 'rotate-2', src: image3, alt: '' },
  { rotation: 'rotate-2', src: image4, alt: '' },
  { rotation: '-rotate-2', src: image5, alt: '' },
]

const resume = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: logoPlanetaria,
    start: '2019',
    end: 'Present',
    startDate: '2019-01',
    endDate: new Date().toISOString(),
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    logo: logoAirbnb,
    start: '2014',
    end: '2019',
    startDate: '2014-01',
    endDate: '2019-12',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    logo: logoFacebook,
    start: '2011',
    end: '2014',
    startDate: '2011-01',
    endDate: '2014-12',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    logo: logoStarbucks,
    start: '2008',
    end: '2011',
    startDate: '2008-01',
    endDate: '2011-12',
  },
]

const latestArticles = articles.slice(0, 4)

const handleSubscribe = () => {
  console.log('Subscribed:', email.value)
  router.push('/thank-you')
}
</script>
