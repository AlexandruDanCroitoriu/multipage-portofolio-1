<template>
  <div :class="['sm:px-8', className]">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  className: String
})
</script>
