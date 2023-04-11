<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { mainStore } from '../stores/index'
// const logo = require('../assets/image/logo.png')
const mainSt = mainStore()
const { t, locale } = useI18n()
const { currentPath } = storeToRefs(mainSt)
const changeLanguage = function () {
  console.log('locale.value', locale.value)
  if (locale.value === 'zh') {
    locale.value = 'en'
  } else {
    locale.value = 'zh'
  }
}

const linkList = [
  {
    name: 'nav.home',
    link: '/',
  },

  {
    name: 'nav.link',
    link: '/link',
  },
  {
    name: 'nav.about',
    link: '/about',
  },
]
const nav = function (url: string) {
  navigateTo(url)
}
</script>

<template>
  <div class="float-left flex flex-row justify-center items-center w-7/10 w-100% h-100%">
    <div class="w-12vh">
      <img class="w-100%" src="../assets/image/logo.png" />
    </div>
    <div flex flex-row justify-center items-center>
      <!-- <NuxtLink class="pa-2rem" to="/"> {{ $t('nav.home') }}</NuxtLink>
      <NuxtLink class="pa-2rem" to="/classify"> {{ $t('nav.classify') }}</NuxtLink>
      <NuxtLink class="pa-2rem" to="/link"> {{ $t('nav.link') }}</NuxtLink>
      <NuxtLink class="pa-2rem" to="/about"> {{ $t('nav.about') }}</NuxtLink> -->
      <div v-for="link in linkList" :key="link.link" class="pa-2rem" @click="nav(link.link)">
        <div class="name p-2px">
          {{ $t(link.name) }}
        </div>
        <div class="line w-100% h-4px" :class="link.link === currentPath ? 'kif-bg-success' : ''"></div>
      </div>
    </div>
  </div>
  <div class="w-30% h-1/1 float-right flex flex-row justify-start items-center">
    <div class="translate p-1rem">
      <div class="i-mdi-translate text-orange-400 text-xl" @click="changeLanguage"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.name:hover {
  background-color: #2add9c;
  transition: all 0.5s;
}
.line {
  transition: all 0.5s;
  transform: translateX(10px);
}
</style>
