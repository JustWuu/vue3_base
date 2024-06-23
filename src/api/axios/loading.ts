import { LoadingStore } from '@/stores'
const loadingStore = LoadingStore()

export class AxiosLoading {
  constructor() {}

  addLoading() {
    loadingStore.loadingCount++
  }

  closeLoading() {
    if (loadingStore.loadingCount > 0) {
      loadingStore.loadingCount--
    }
  }
}
