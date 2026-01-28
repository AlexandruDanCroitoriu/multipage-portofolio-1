<template>
  <ContainerOuter :class="className">
    <ContainerInner>
      <slot />
    </ContainerInner>
  </ContainerOuter>
</template>

<script setup>
import ContainerOuter from './ContainerOuter.vue'
import ContainerInner from './ContainerInner.vue'

defineProps({
  className: String
})
</script>
