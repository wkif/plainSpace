<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
const props = defineProps(['path'])
const mainSt = mainStore()
const { valineData } = storeToRefs(mainSt)
onMounted(() => {
  if (process.client) {
    import('valine').then((res) => {
      const Valine = res.default
      new Valine(
        Object.assign(
          {
            el: '#comentario',
            path: props.path,
            visitor: true, // 阅读量统计
          },
          valineData.value,
        ),
      )
    })
  }
})
</script>

<template>
  <div id="comentario"></div>
  <span :id="props.path" class="leancloud_visitors">
    <em class="post-meta-item-text">阅读量 </em>
    <i class="leancloud-visitors-count">1000000</i>
  </span>
</template>
