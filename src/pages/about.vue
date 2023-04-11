<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
const mainSt = mainStore()

const { description, title } = storeToRefs(mainSt)
const { data } = await useAsyncData('page-data', () => queryContent('/base/about').findOne())!

if (description.value && data.value) {
  mainSt.updateLoadingFlag(false)
}
</script>

<template>
  <div>
    <div class="container h-18vh">
      <h1>Hi, 这里是 {{ title }}</h1>
      <h1>{{ description }}</h1>
    </div>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
    <div class="book m-t-50px">
      <div class="tracking-in-expand-fwd">书籍</div>
      <div class="w-50% h-1rem kif-bg-success m-1rem"></div>
      <BookShelf />
    </div>
    <div class="film">
      <div class="tracking-in-expand-fwd">电影</div>
      <div class="w-50% h-1rem kif-bg-success m-1rem"></div>
      <Film />
    </div>
    <div id="commit" class="w-80% p-10px">
      <valineCommit path="/page/message-board" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.container h1:nth-child(1) {
  color: #355c7d;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 20px;
  margin: 0 0 0 35%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  animation: type 2s steps(40, end) forwards;
}

.container h1:nth-child(2) {
  opacity: 0;
  font-family: 'Work Sans', sans-serif;
  margin: 0 auto auto auto;
  background: linear-gradient(to right, #f8b195, #f67280, #c06c84);
  font-weight: 800;
  font-size: 30px;
  width: 430px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  animation: shring-animation 2.2s steps(40, end) 2s forwards, blink 0.5s step-end infinite alternate;
}

@keyframes shring-animation {
  0% {
    background-position: 0 0;
    opacity: 0;
    width: 0;
  }
  1% {
    background-position: 0 0;
    opacity: 1;
    border-right: 1px solid orange;
  }
  50% {
    background-position: 150px 0;
    opacity: 1;
    border-right: 1px solid orange;
  }
  100% {
    background-position: 400px 0;
    opacity: 1;
    border-right: 1px solid orange;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
  1%,
  99% {
    border-right: 1px solid orange;
  }
  100% {
    border-right: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
