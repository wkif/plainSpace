import { mainStore } from '../stores/index'
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('middleware-global-auth', to, from)
  const mainSt = mainStore()
  mainSt.changeCurrentPath(to.path)
  if (to.path === '/404') {
    mainSt.changeLayout('custom')
  } else {
    mainSt.changeLayout('default')
  }
})
