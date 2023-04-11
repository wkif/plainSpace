import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import zh from '@/locales/zh.json'
import en from '@/locales/en.json'
const message = {
  zh,
  en,
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Cookies.get('lang') || 'zh',
  warnHtmlMessage: false,
  messages: message,
})
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
