<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
const mainSt = mainStore()
const { github } = storeToRefs(mainSt)
</script>

<template>
  <div class="">
    <!-- <div class="flex w-100vw p-t-4% p-b-4% p-l-2% p-r-2% h-74vh">
      <div class="box">
        <img src="https://source.unsplash.com/1000x800" />
        <span>CSS</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x802" />
        <span>Image</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x804" />
        <span>Hover</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x806" />
        <span>Effect</span>
      </div>
    </div> -->
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY-NC-SA 4.0</a>
    2021-PRESENT ©
    <a :href="github.link">{{ github.name }}</a>
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
