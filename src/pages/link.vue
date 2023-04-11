<script setup lang="ts">
import { mainStore } from '../stores/index'
import linkData from '../data/link'
const mainSt = mainStore()
const { data } = await useAsyncData('page-data', () => queryContent('/base/link').findOne())!
const linkList = ref(linkData.linkList)
if (data.value) {
  mainSt.updateLoadingFlag(false)
}
function goto(url: string) {
  window.open(url)
}
</script>

<template>
  <div>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>

    <!-- <ContentList v-slot="{ list }" path="/about">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
    <ContentDoc :excerpt="true" path="/about" /> -->

    <div class="flex flex-row flex-wrap">
      <div
        v-for="(user, index) in linkList"
        :key="index"
        class="user flex flex-row w-13vw h-8vh kif-bg-white p-10px m-10px b-rd"
        @click="goto(user.url)">
        <div class="avatar w-90px h-90px">
          <waterStripeImg :img-url="user.img" />
        </div>
        <div class="right">
          <div class="name">
            {{ user.name }}
          </div>
          <div class="desc">
            {{ user.desc }}
          </div>
        </div>
      </div>
    </div>
    <div id="commit" class="w-80% p-10px">
      <valineCommit path="/page/links/" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.user {
  .right {
    .name {
      font-size: larger;
    }
    .desc {
      // 单行 文字溢出显示省略号
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.user:hover {
  background-color: #2add9c;
  transition: 0.5s;
  .avatar {
    width: 0px;
    height: 0px;
    transition: 0.5s;
  }
  .right {
    .name {
    }
  }
}
</style>
