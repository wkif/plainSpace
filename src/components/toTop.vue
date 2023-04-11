<script setup lang="ts">
interface List {
  id: string
  iconClass: string
  ifShowInTopView: boolean
  show?: boolean
}
const props = defineProps({
  list: Array<List>,
})
const list: Ref<List[]> = ref(props.list!)
const goAnchor = function (id: string) {
  const anchor = document.getElementById(id)!
  anchor.scrollIntoView()
}

const oldScrollTop = ref<number>(0) // 记录当前的滚动距离

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const scroll = scrollTop - oldScrollTop.value
  oldScrollTop.value = scrollTop
  if (scroll < 0) {
    list.value.forEach((element) => {
      if (!element.ifShowInTopView) {
        element.show = true
      } else {
        element.show = false
      }
    })
  } else {
    list.value.forEach((element) => {
      if (element.ifShowInTopView) {
        element.show = true
      } else {
        element.show = false
      }
    })
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {}) // 离开当前组件别忘记移除事件监听
})
</script>

<template>
  <div class="tools fixed top-80vh left-80vw z-2 kif-success b-rd">
    <div
      v-for="item in list"
      :key="item.id"
      class="text-5xl m-r-1"
      :class="[item.iconClass, item.show ? '' : 'hidden']"
      @click="goAnchor(item.id)"></div>
  </div>
</template>

<style lang="less" scoped></style>
