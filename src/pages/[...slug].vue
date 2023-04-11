<script setup lang="ts">
import { mainStore } from '../stores/index'
const mainSt = mainStore()
const route = useRoute()
const path = ref(route.path)

const { data } = await useAsyncData('page-data', () => queryContent(path.value).findOne())!
const title = ref(data.value ? data.value.title : '')
if (data.value) {
  setTimeout(() => {
    mainSt.updateLoadingFlag(false)
  }, 600)
} else {
  navigateTo('/404')
  mainSt.updateLoadingFlag(false)
}

const navBack = async function () {
  mainSt.updateLoadingFlag(true)
  await navigateTo('/')
}
const idList = [
  {
    id: 'top',
    iconClass: 'i-mdi-arrow-top',
    ifShowInTopView: false,
  },
  {
    id: 'commit',
    iconClass: 'i-mdi-message',
    ifShowInTopView: true,
  },
]
console.log(data.value!.title, 'kkk')
</script>

<template>
  <div id="top" class="flex kif-success w-10% text-center p-t" @click="navBack">
    <div class="i-mdi-arrow-left text-xl m-r-1"></div>
    返回
  </div>
  <div class="w-30% h-0.5rem kif-bg-primary"></div>
  <!-- 跳转锚点  -->
  <toTop :list="idList" />
  <articleTitle :title="title" />
  <main>
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </main>
  <div id="commit" class="w-80% p-10px">
    <valineCommit :path="path" />
  </div>
</template>
