<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layout-helper'

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
})

const style = computed(() => handleBackground(props.image, false, true))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="w-full w-full" :style="style" />
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
  </div>
</template>
