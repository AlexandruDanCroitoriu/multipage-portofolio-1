<template>
  <Container class-name="mt-16 sm:mt-32">
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img :src="avatarImage" alt="Andrei Popescu" sizes="(min-width: 1024px) 32rem, 20rem" class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {{ t('pages.about.title') }}
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>{{ t('pages.about.bio.p1') }}</p>
          <p>{{ t('pages.about.bio.p2') }}</p>
          <p>{{ t('pages.about.bio.p3') }}</p>
          <p v-html="t('pages.about.bio.p4')"></p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list">
          <li class="flex">
            <a href="#" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
              <XIcon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span class="ml-4">{{ t('components.social.followOnX') }}</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a href="#" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
              <InstagramIcon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span class="ml-4">{{ t('components.social.followOnInstagram') }}</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a href="#" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
              <GitHubIcon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span class="ml-4">{{ t('components.social.followOnGitHub') }}</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a href="#" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
              <LinkedInIcon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span class="ml-4">{{ t('components.social.followOnLinkedIn') }}</span>
            </a>
          </li>
          <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <a href="mailto:andrei@technova.ro" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
              <MailIcon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span class="ml-4">andrei@technova.ro</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Container from '../components/Container.vue'
import XIcon from '../components/icons/XIcon.vue'
import InstagramIcon from '../components/icons/InstagramIcon.vue'
import GitHubIcon from '../components/icons/GitHubIcon.vue'
import LinkedInIcon from '../components/icons/LinkedInIcon.vue'
import MailIcon from '../components/icons/MailIcon.vue'
import avatarImage from '../images/portrait.jpg'

const { t } = useI18n()
</script>
