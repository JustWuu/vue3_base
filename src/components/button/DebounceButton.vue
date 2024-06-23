<script setup lang="ts">
import { type PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { LoadingStore } from '@/stores'

const loadingStore = LoadingStore()

//define
defineProps({
  label: {
    type: String
  },
  buttonClass: {
    type: String
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  severity: {
    type: String
  },
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'button'
  },
  text: {
    type: Boolean
  },
  raised: {
    type: Boolean
  },
  rounded: {
    type: Boolean
  },
  ariaLabel: {
    type: String
  },
  ariaHaspopup: {
    type: Boolean
  },
  ariaControls: {
    type: String
  },
  size: {
    type: String as PropType<'small' | 'large' | undefined>
  }
})

// data
const loading = storeToRefs(loadingStore)
</script>

<template>
  <Button
    :icon="icon"
    :label="label"
    :class="buttonClass"
    :type="type"
    :loading="loading.loadingCount.value > 0"
    :severity="severity"
    :text="text"
    :raised="raised"
    :rounded="rounded"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-haspopup="ariaHaspopup"
    :aria-controls="ariaControls"
    :size="size"
  >
    <slot
  /></Button>
</template>
