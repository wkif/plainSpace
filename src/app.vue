<script lang="ts" setup>
// 您可以根据API调用或登录状态来选择此选项
import { storeToRefs } from 'pinia'
import { mainStore } from './stores/index'
const mainSt = mainStore()
const { layout } = storeToRefs(mainSt)
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style lang="less">
#__nuxt {
  font-family: 'MiSansLight';
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  margin: 0px;
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
a {
  color: #2add9c;
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.navLink {
  text-decoration: none;
}
</style>
