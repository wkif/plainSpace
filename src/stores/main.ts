import { defineStore } from 'pinia'
import data from '@/config'
const state = {
  loadingFlag: true,
  layout: '',
  currentPath: '',
  valineData: data.valineData,
}
export const mainStore = defineStore('main', {
  state: () => {
    return Object.assign(state, data.info)
  },
  actions: {
    updateLoadingFlag(a: boolean) {
      this.loadingFlag = a
    },
    changeLayout(layout: string) {
      this.layout = layout
    },
    changeCurrentPath(path: string) {
      this.currentPath = path
    },
  },
  persist: true,
})
