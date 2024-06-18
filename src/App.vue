<script setup lang="ts">
import { LoadingStore } from '@/stores'
import { storeToRefs } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const loadingStore = LoadingStore()

//data
const loading = storeToRefs(loadingStore)
</script>

<template>
  <router-view />
  <Loading v-model:active="loading.appLoading.value" :opacity="0.7" />
</template>

<style scoped></style>
