<script setup lang="ts">
import getImageAndTitle from '../composables/getImageAndTitle'
import type { queryContentResType } from '../types/base'
import { mainStore } from '../stores/index'
const mainSt = mainStore()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const postList: Ref<queryContentResType[]> = ref([])
for (const link of navigation.value!) {
  if (link.title !== 'Base' && link._path !== '/') {
    postList.value.push(await getImageAndTitle(link._path))
  }
}
const sortBy = function (attr: string, rev: number) {
  if (rev === undefined) {
    rev = 1
  } else {
    // eslint-disable-next-line no-unused-expressions
    rev ? 1 : -1
  }
  return function (a: any, b: any) {
    a = a[attr] === 'without date' ? '1949-10-01' : a[attr].split('T')[0]
    b = b[attr] === 'without date' ? '1949-10-01' : b[attr].split('T')[0]
    if (a < b) {
      return rev * -1
    }
    if (a >= b) {
      return rev * 1
    }
    return 0
  }
}
postList.value.sort(sortBy('date', -1))

const navTo = function (path: string, index: number) {
  mainSt.updateLoadingFlag(true)
  navigateTo(path) //
}
function getStyle(color: string, x = 119, y = -79, deg = 45) {
  return {
    background: `linear-gradient(-45deg, transparent 33.33%, ${color} 33.33%, ${color} 66.66%, transparent 66.66%),linear-gradient(45deg, transparent 33.33%, ${color} 33.33%, ${color} 66.66%, transparent 66.66%)`,
    transform: `translate(${x}px, ${y}px) rotate(${deg}deg)`,
  }
}
const atricleList: Ref<queryContentResType[]> = ref([])
const getAtricleList = function (val: queryContentResType[]) {
  atricleList.value = val
  mainSt.updateLoadingFlag(false)
}
const topPostList: Ref<queryContentResType[]> = ref([])
postList.value.forEach((item) => {
  if (item.top) {
    topPostList.value.push(item)
  }
})
</script>

<template>
  <TopCard v-if="topPostList.length" :top-post-list="topPostList" />
  <div class="post_list flex flex-wrap">
    <div v-for="(link, index) of atricleList" :key="link.path" class="post_item scale-up-center w-18rem p-4 b-rd-4 m-3rem">
      <!-- <NuxtLink :to="link.path"> -->
      <div class="relative" @click="navTo(link.path, index)">
        <div v-if="index % 2 === 0" class="tape block w-24px h-164px absolute z-2 opacity-80" :style="getStyle(link.color_1, link.deg_1)"></div>
        <div v-else class="tape_1 w-24px h-238px absolute z-2 opacity-80" :style="getStyle(link.color_1, 12, -97, link.deg_1)"></div>
        <div
          v-if="index % 2 !== 0"
          class="tape_2 w-24px h-452px absolute z-2 opacity-80"
          :style="getStyle(link.color_2, 237, -206, link.deg_2)"></div>
        <img class="post_cover swing-in-top-fwd h-68 b-rd-t-4 w-18rem object-cover" :src="link.cover" />
        <div class="post_title p-4 overflow-hidden text-ellipsis kif-primary">
          {{ link.title }}
        </div>
        <div class="post_content"></div>
        <div class="date float-right font-20 text-sm kif-info">发布于 {{ link.date }}</div>
      </div>
      <!-- </NuxtLink> -->
    </div>
  </div>
  <pageControl :post-list="postList" :option-list="[6, 9, 12, 18, 21, 30, 60, 90]" @getAtricleList="getAtricleList" />
</template>

<style lang="less" scoped>
.post_list {
  .post_item {
    box-shadow: 0px 0px 17.2px rgba(0, 0, 0, 0.012), 0px 0px 43.4px rgba(0, 0, 0, 0.023), 0px 0px 88.6px rgba(0, 0, 0, 0.033),
      0px 0px 182.5px rgba(0, 0, 0, 0.043), 0px 0px 500px rgba(0, 0, 0, 0.07);

    .post_title {
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
    }
    .post_title:hover {
      -webkit-animation: vibrate-1 0.3s linear infinite both;
      animation: vibrate-1 0.3s linear infinite both;
    }
    .post_cover:hover {
    }
  }
  .post_item:hover {
    transition: all 0.4s;
    box-shadow: 6.6px 9.7px 4.4px rgba(0, 0, 0, 0.042), 16.7px 24.6px 11.2px rgba(0, 0, 0, 0.079), 34px 50.2px 22.9px rgba(0, 0, 0, 0.112),
      70.1px 103.3px 47.1px rgba(0, 0, 0, 0.147), 192px 283px 129px rgba(0, 0, 0, 0.24);
  }
}
</style>
