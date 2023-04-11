<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
const mainSt = mainStore()
const { github, beian } = storeToRefs(mainSt)
</script>

<template>
  <div>
    <a target="_blank" style="color: #5c6b77" href="https://beian.miit.gov.cn/">{{ beian }}</a>
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY-NC-SA 4.0</a>
    2021-PRESENT ©
    <a :href="github.link">{{ github.name }}</a>
    <a class="w-10px"></a>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100vw;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 74vh;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 1vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 1 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>
