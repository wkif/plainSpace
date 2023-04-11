<script setup lang="ts">
const props = defineProps<{
  username: string
  userImg: string
  description: string
}>()
</script>

<template>
  <div class="bounce-in-top box-sha flex flex-col items-center rounded-lg kif-bg-primary p-10 m-r-4">
    <div class="w-8.4rem">
      <waterStripeImg :img-url="props.userImg" />
    </div>
    <h2 class="text-center kif-success tracking-in-expand-fwd">{{ props.username }}</h2>
    <div class="line h-2 w-40 kif-bg-success rounded"></div>

    <div class="description w-30 text-white-400 kif-bg-success rounded p-3 text-center tracking-in-expand-fwd">
      {{ props.description }}
    </div>
  </div>
</template>

<style lang="less" scoped></style>
