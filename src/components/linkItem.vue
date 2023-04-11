<script setup lang="ts">
const props = defineProps<{
  linkList: {
    name: string
    desc: string
    img: string
    link: string
  }[]
}>()
</script>

<template>
  <div>
    <div class="flex w-100% p-t-4% p-b-4% p-l-2% p-r-2% h-24vh">
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
    </div>
    <!-- <div v-for="user in props.linkList" :key="user.link" class="w-230px"></div> -->
    <!-- <div class="flip">
      <div
        class="front"
        style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
        <h1 class="text-shadow">LAKE</h1>
      </div>
      <div class="back">
        <h2>Angular</h2>
        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
      </div>
    </div>
    <div class="flip">
      <div
        class="front"
        style="
          background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb);
        ">
        <h1 class="text-shadow">OCEAN</h1>
      </div>
      <div class="back">
        <h2>Angular</h2>
        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
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
