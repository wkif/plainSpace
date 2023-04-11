<script setup lang="ts">
onMounted(() => {})
const { data } = await useAsyncData('page-data', () => queryContent('/base/classify').findOne())!
</script>

<template>
  <div>
    coding...
    <ContentRenderer :value="data">
      <!-- <h1>{{ data.title }}</h1> -->
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>

    <!-- <ContentList v-slot="{ list }" path="/about">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
    <ContentDoc :excerpt="true" path="/about" /> -->

    <div id="commit" class="w-80% p-10px">
      <valineCommit path="/classify" />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
