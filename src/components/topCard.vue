<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const props = defineProps(['topPostList'])
const { t } = useI18n()
const url = 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212282307226.png'
const navTo = function (path: string) {
  navigateTo(path) //
}
</script>

<template>
  <div class="card">
    <input id="slide_1" type="radio" name="select" checked />
    <input id="slide_2" type="radio" name="select" />
    <input id="slide_3" type="radio" name="select" />
    <input id="slideImg" type="checkbox" />

    <div class="slider">
      <label for="slide_1" class="slide slide_1"></label>
      <label for="slide_2" class="slide slide_2"></label>
      <label for="slide_3" class="slide slide_3"></label>
    </div>

    <div v-for="(item, index) in props.topPostList" class="inner_part">
      <label for="slideImg" class="img">
        <img class="object-cover" :class="`img_${index + 1}`" :src="item.cover" />
      </label>
      <div class="content" :class="`content_${index + 1}`">
        <div class="title">{{ item.title }}</div>
        <div class="text"></div>
        <button @click="navTo(item.path)">{{ $t('more') }}</button>
      </div>
    </div>

    <!-- <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_2" :src="url" />
      </label>
      <div class="content content_2">
        <div class="title">Ankara</div>
        <div class="text">
          Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region and home to the Grand National Assembly of
          Turkey.
        </div>
        <button>Read More</button>
      </div>
    </div>

    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_3" :src="url" />
      </label>
      <div class="content content_3">
        <div class="title">İzmir</div>
        <div class="text">Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is the third-largest city in Turkey.</div>
        <button>Read More</button>
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.card {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 100%;
  max-width: 850px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 10px 0 50px rgba(0, 0, 0, 0.5);
}

.card .inner_part {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 30px;
  height: 350px;
  position: absolute;
}

#slideImg:checked ~ .inner_part {
  padding: 0;
  transition: 0.1s ease-in;
}

.inner_part .img {
  height: 260px;
  width: 260px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
}

#slideImg:checked ~ .inner_part .img {
  height: 350px;
  width: 850px;
  z-index: 99;
  transition: 0.3s 0.2s ease-in;
}

.img img {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  transition: 0.6s;
}

#slide_1:checked ~ .inner_part .img_1,
#slide_2:checked ~ .inner_part .img_2,
#slide_3:checked ~ .inner_part .img_3 {
  opacity: 1;
  transition-delay: 0.2s;
}

.content {
  padding: 0 20px 0 35px;
  width: 530px;
  margin-left: 50px;
  opacity: 0;
  transition: 0.6s;
}

#slideImg:checked ~ .inner_part .content {
  display: none;
}

#slide_1:checked ~ .inner_part .content_1,
#slide_2:checked ~ .inner_part .content_2,
#slide_3:checked ~ .inner_part .content_3 {
  opacity: 1;
  margin-left: 0;
  z-index: 3;
  transition-delay: 0.3s;
}

.content .title {
  font-size: 30px;
  font-weight: 700;
  color: #0d0925;
  margin: 0 0 20px 0;
}

.content .text {
  font-size: 19px;
  color: #4e4a67;
  margin: 0 auto 30px auto;
  line-height: 1.5em;
  text-align: justify;
}

.content button {
  padding: 15px 20px;
  border: none;
  font-size: 16px;
  color: #fff0e6;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  background: #000000;
  float: right;
}

.content button:hover {
  background: #cecece;
  color: #000000;
}

.slider {
  position: relative;
  bottom: -125px;

  // transform: translateX(-50%);
  z-index: 1;
}

#slideImg:checked ~ .slider {
  display: none;
}

.slider .slide {
  position: relative;
  height: 10px;
  width: 50px;
  background: #d9d9d9;
  border-radius: 5px;
  display: inline-flex;
  margin: 0 3px;
  cursor: pointer;
}

.slider .slide:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: -100%;
  background: #000000;
  border-radius: 10px;
  transform: scaleX(0);
  transition: transform 0.6s;
  transform-origin: left;
}

#slide_1:checked ~ .slider .slide_1:before,
#slide_2:checked ~ .slider .slide_2:before,
#slide_3:checked ~ .slider .slide_3:before {
  transform: scaleX(1);
  width: 100%;
}

input {
  display: none;
}
</style>
