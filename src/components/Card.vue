<template>
  <component
    :is="as"
    :class="['group relative flex flex-col items-start', className]"
  >
    <slot />
  </component>
</template>

<script setup>
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import CardCta from './CardCta.vue'
import CardLink from './CardLink.vue'
import CardEyebrow from './CardEyebrow.vue'

defineProps({
  as: {
    type: String,
    default: 'div'
  },
  className: String
})
</script>

<script>
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import CardCta from './CardCta.vue'
import CardLink from './CardLink.vue'
import CardEyebrow from './CardEyebrow.vue'

export default {
  components: {
    CardTitle,
    CardDescription,
    CardCta,
    CardLink,
    CardEyebrow,
  }
}
</script>
