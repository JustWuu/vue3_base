import { ref } from 'vue'
import { defineStore } from 'pinia'

export const LoadingStore = defineStore('loading', () => {
  const debounce = ref<boolean>(false)
  const appLoading = ref<boolean>(false)
  const loadingCount = ref<number>(0)

  return { debounce, appLoading, loadingCount }
})
