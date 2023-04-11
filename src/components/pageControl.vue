<script setup lang="ts">
const props = defineProps(['postList', 'optionList'])
const emit = defineEmits(['getAtricleList'])
const optionList = props.optionList ? props.optionList : [5, 10, 20, 30, 40, 50, 100, 200]
const pageItemList: Ref<number[]> = ref([])
const leftMore = ref(true)
const rightMore = ref(true)
let atricleList = []
const postList = props.postList
const pageControl = reactive({
  pageSize: 10,
  currentPage: 1,
  pageCount: 4,
})
function changePageItemList() {
  if (pageControl.pageCount <= 5) {
    const list = new Array(pageControl.pageCount)
    for (let i = 1; i <= pageControl.pageCount; i++) {
      list[i - 1] = i
    }
    pageItemList.value = list
  } else {
    const list = new Array(5)
    if (pageControl.pageCount - pageControl.currentPage >= 2) {
      if (pageControl.currentPage > 2) {
        list[0] = pageControl.currentPage - 2
        list[1] = pageControl.currentPage - 1
        list[2] = pageControl.currentPage
        list[3] = pageControl.currentPage + 1
        list[4] = pageControl.currentPage + 2
        pageItemList.value = list
        return
      }
      if (pageControl.currentPage === 2) {
        list[0] = pageControl.currentPage - 1
        list[1] = pageControl.currentPage
        list[2] = pageControl.currentPage + 1
        list[3] = pageControl.currentPage + 2
        list[4] = pageControl.currentPage + 3
        pageItemList.value = list
        return
      }
      if (pageControl.currentPage === 1) {
        list[0] = pageControl.currentPage
        list[1] = pageControl.currentPage + 1
        list[2] = pageControl.currentPage + 2
        list[3] = pageControl.currentPage + 3
        list[4] = pageControl.currentPage + 4
        pageItemList.value = list
      }
    } else {
      if (pageControl.pageCount - pageControl.currentPage === 1) {
        list[0] = pageControl.currentPage - 3
        list[1] = pageControl.currentPage - 2
        list[2] = pageControl.currentPage - 1
        list[3] = pageControl.currentPage
        list[4] = pageControl.currentPage + 1
        pageItemList.value = list
        return
      }
      if (pageControl.pageCount - pageControl.currentPage === 0) {
        list[0] = pageControl.currentPage - 4
        list[1] = pageControl.currentPage - 3
        list[2] = pageControl.currentPage - 2
        list[3] = pageControl.currentPage - 1
        list[4] = pageControl.currentPage
        pageItemList.value = list
      }
    }

    // if (pageControl.pageCount - pageControl.currentPage > 3) {
    //   console.log('error')
    // }
  }
}
function changeMore() {
  if (pageControl.currentPage > 3 && pageControl.pageCount > 5) {
    leftMore.value = true
  } else {
    leftMore.value = false
  }
  if (pageControl.pageCount - pageControl.currentPage > 2 && pageControl.pageCount > 5) {
    rightMore.value = true
  } else {
    rightMore.value = false
  }
}
watch(
  () => pageControl.pageSize,
  (value) => {
    init()
  },
)
const changePage = function () {
  // 数据分页
  const start = (pageControl.currentPage - 1) * Number(pageControl.pageSize)
  const end = start + Number(pageControl.pageSize)
  atricleList = postList.slice(start, end)
  changeMore()
  //  控制页码的显示
  changePageItemList()
  emit('getAtricleList', atricleList)
}
function changeCurrentPage(page: number) {
  if (page < 1 || page > pageControl.pageCount) {
    return
  }
  // 修改当前页
  pageControl.currentPage = page
  changePage()
}
function init() {
  // 总页数处理
  pageControl.pageCount = Math.ceil(postList.length / Number(pageControl.pageSize))
  pageControl.currentPage = 1
  changePage()
}
onMounted(() => {
  pageControl.pageSize = optionList[0]
  init()
})
</script>

<template>
  <div class="flex flex-row items-center w-60rem kif-bg-primary p-10px b-rd m-b-1" style="color: white">
    <div class="page_count flex-1">
      {{ $t('pageCon.length') }}: {{ postList.length }} {{ $t('pageCon.pageCount') }}:
      {{ pageControl.pageCount }}
      {{ $t('pageCon.currentPage') }}:
      {{ pageControl.currentPage }}
    </div>

    <!-- <div class="page_size_select flex-1">
      <select v-model="pageControl.pageSize" class="w-6rem kif-bg-success b-rd" style="border: none; line-height: 28px; border: 1px solid white">
        <option v-for="option in optionList" :key="option">{{ Number(option) }}</option>
      </select>
    </div> -->

    <div class="flex-1 flex flex-row justify-between items-center">
      <div class="i-mdi-arrow-left text-xl m-r-1" @click="changeCurrentPage(pageControl.currentPage - 1)"></div>
      <div v-show="leftMore" class="more kif-success w-3rem">...</div>
      <div
        v-for="page in pageItemList"
        :key="page"
        class="page_item w-3rem text-center b-rd"
        :class="{
          active: pageControl.currentPage === page,
        }"
        @click="changeCurrentPage(page)">
        {{ page }}
      </div>
      <div v-show="rightMore" class="more kif-success w-3rem">...</div>
      <div class="i-mdi-arrow-right text-xl m-r-1" @click="changeCurrentPage(pageControl.currentPage + 1)"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@success: #2add9c;
.active {
  background-color: @success;
  animation: ease-in-out 1s;
}

@keyframes ease-in-out {
  0% {
    background-color: white;
  }

  100% {
    background-color: @success;
  }
}
</style>
