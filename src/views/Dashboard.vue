<script setup lang="ts">
import { Example, Ipify } from '@/api'
import { DebounceButton } from '@/components'
const example = new Example()
const ipify = new Ipify()

const get = (id?: string, params?: object) => {
  if (id) {
    example
      .get(id, params)
      .then((res) => {
        console.log('ok', res)
      })
      .catch((e) => {
        console.log('error', e)
      })
  } else {
    ipify
      .get(id, params)
      .then((res) => {
        console.log('ok', res)
        alert(res.ip)
      })
      .catch((e) => {
        console.log('error', e)
      })
  }
}
</script>

<template>
  <debounce-button
    label="測試"
    type="button"
    severity="warning"
    @click="get('', { format: 'json', text: 'many' })"
  />
</template>

<style scoped></style>
