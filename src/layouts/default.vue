<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
import Plum from '../composables/Plum'

const mainSt = mainStore()
const { loadingFlag } = storeToRefs(mainSt)
const colorMode = useColorMode()
const toggleTheme = function (e: any) {
  colorMode.preference = e
}

const el = ref<HTMLCanvasElement>()
const el2 = ref<HTMLCanvasElement>()
function initFlower() {
  // const canvas = el.value!
  const canvasList = []
  canvasList.push(el.value!)
  canvasList.push(el2.value!)
  const branchList = [
    {
      start: {
        x: 0,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
    {
      start: {
        x: 1900,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
  ]
  canvasList.forEach((canvas, index) => {
    const plum = new Plum(canvas)
    const branch = branchList[index]
    plum.startPlum(branch)
  })
}
function init() {
  setTimeout(() => {
    initFlower()
  }, 1000)
}

onMounted(() => {
  window.addEventListener('beforeunload', () => mainSt.updateLoadingFlag(true))

  init()
})
</script>

<template>
  <div class="z--1 absolute w-87vw h-screen">
    <canvas ref="el" class="absolute" height="880" width="1900"></canvas>
    <canvas ref="el2" class="absolute" height="880" width="1900"></canvas>
  </div>
  <!-- <video class="bg-video fixed z--1 top-0 left-0" src="https://www.5i21.cn/walls/assets/qm1-a88b07bc.mp4" loop autoplay data-v-f6f44d3d=""></video> -->
  <div v-show="loadingFlag" class="w-100% h-100% fixed z-99" :class="colorMode.preference === 'light' ? 'kif-bg-white' : 'kif-bg-black'">
    <loading />
  </div>
  <div class="">
    <nightMode @toggleTheme="toggleTheme" />
  </div>
  <div id="layout" class="flex flex-col">
    <div id="header" class="h-16 box-sha m-t-1rem">
      <headerCom />
    </div>

    <!-- <div id="header" class="h-16 box-sha m-t-1rem">
      <div class="float-left flex flex-row justify-center items-center w-7/10 w-1/1 h-100%">
        <div class="w-12vh">
          <img class="w-1/1" :src="logo" />
        </div>
        <div>
          <NuxtLink class="pa-2rem" to="/"> {{ $t('nav.home') }}</NuxtLink>
          <NuxtLink class="pa-2rem" to="/classify"> {{ $t('nav.classify') }}</NuxtLink>
          <NuxtLink class="pa-2rem" to="/link"> {{ $t('nav.link') }}</NuxtLink>
          <NuxtLink class="pa-2rem" to="/about"> {{ $t('nav.about') }}</NuxtLink>
        </div>
      </div>
      <div class="w-30% h-1/1 float-right flex flex-row justify-start items-center">
        <div class="translate p-1rem">
          <div class="i-mdi-translate text-orange-400 text-xl" @click="changeLanguage"></div>
        </div>
      </div>
    </div> -->
    <div id="content" class="p-t-2vh p-l-8vw p-r-1vw flex flex-row">
      <div class="p-9 w-23%">
        <PersonCard />
        <ImageCard />
      </div>
      <div class="p-10px rightContent w-90%">
        <slot />
      </div>
    </div>
    <div id="footer" class="h-3vh text-center">
      <FooterCom />
    </div>
  </div>
</template>

<style>
waterStripeImg:hover {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}
</style>
