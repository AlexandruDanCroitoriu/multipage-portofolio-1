<template>
  <SimpleLayout 
    :title="t('pages.uses.title')"
    :intro="t('pages.uses.intro')"
  >
    <div class="space-y-20">
      <!-- Workstation Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Workstation</h2>
          <div class="md:col-span-3">
            <ul role="list" class="space-y-16">
              <li v-for="(tool, index) in usesData.workstation" :key="index">
                <Card as="div">
                  <CardTitle as="h3">{{ tool.name }}</CardTitle>
                  <CardDescription>{{ tool.description }}</CardDescription>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Development tools Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Development tools</h2>
          <div class="md:col-span-3">
            <ul role="list" class="space-y-16">
              <li v-for="(tool, index) in usesData.development" :key="index">
                <Card as="div">
                  <CardTitle as="h3">{{ tool.name }}</CardTitle>
                  <CardDescription>{{ tool.description }}</CardDescription>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Design Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Design</h2>
          <div class="md:col-span-3">
            <ul role="list" class="space-y-16">
              <li v-for="(tool, index) in usesData.design" :key="index">
                <Card as="div">
                  <CardTitle as="h3">{{ tool.name }}</CardTitle>
                  <CardDescription>{{ tool.description }}</CardDescription>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Productivity Section -->
      <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Productivity</h2>
          <div class="md:col-span-3">
            <ul role="list" class="space-y-16">
              <li v-for="(tool, index) in usesData.productivity" :key="index">
                <Card as="div">
                  <CardTitle as="h3">{{ tool.name }}</CardTitle>
                  <CardDescription>{{ tool.description }}</CardDescription>
                </Card>
              </li>
            </ul>
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
import CardTitle from '../components/CardTitle.vue'
import CardDescription from '../components/CardDescription.vue'
import en from '../i18n/locales/en.json'
import ro from '../i18n/locales/ro.json'

const { t, locale } = useI18n()
const messages = { en, ro }

const usesData = computed(() => {
  const currentLocale = locale.value || 'en'
  return messages[currentLocale]?.data?.uses || { workstation: [], development: [], design: [], productivity: [] }
})
</script>
