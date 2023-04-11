<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { mainStore } from '../stores/index'
const mainSt = mainStore()

const { bookshelfList } = storeToRefs(mainSt)!
function goto(url: string | undefined) {
  if (url) {
    window.open(url)
  }
}
</script>

<template v-if="bookshelfList.length">
  <div v-for="(ul, index) in bookshelfList" :key="index" class="bookshelf">
    <div v-if="ul.length" class="book-grid">
      <ul>
        <li v-for="(book, index) in ul" :key="index">
          <div class="p-10px">{{ book.name }}</div>
          <img :src="book.image" alt="" srcset="" @click="goto(book.url)" />
        </li>
      </ul>
      <div class="shelf-shadows"></div>
      <div class="shelf"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bookshelf {
  width: 900px;
  margin: 5rem auto;
  text-align: center;
  position: relative;
}

.book-grid {
  z-index: 2;
  position: relative;
  transform: translateY(-15px);
  // bottom: 0
  // left: 0
  // width: 100%
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    // You can use either of these to center the images

    // margin: auto

    // Should be justify-self (x-axis), not align self (y-axis)
    justify-self: center;
  }

  img {
    display: block;
    box-shadow: 0px -5px 20px 2px rgba(black, 0.3);
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
}

// .shelving
//   position: relative

// .shelf-shadows
//   height: 1rem
//   box-shadow: 0px -5px 3px 0px rgba(#aaa, 0.2), 0px 15px 20px 0px rgba(#aaa, 0.5), 0px 5px 5px 0px rgba(#777, 0.3)
//   z-index: 1
//   position: absolute
//   top: 0
//   left: 0
//   width: 100%
//   border-radius: 2px

// .bookshelf
//   width: 80vw
//   height: 50vh
//   margin: auto
//   position: relative

.shelf-shadows {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  border-radius: 2px;
  z-index: 1;
  box-shadow: 0px -5px 3px 0px rgba(#aaa, 0.2), 0px 15px 20px 0px rgba(#aaa, 0.7), 0px 5px 5px 0px rgba(#777, 0.3);
}

// .shelf
//   background:
//     color: #f9f9f9
//   height: 1rem
//   box-shadow: 0px -5px 3px 0px rgba(#aaa, 0.2), 0px 15px 20px 0px rgba(#aaa, 0.5), 0px 5px 5px 0px rgba(#777, 0.3)
//   z-index: 5
//   position: absolute
//   top: 0
//   left: 0
//   width: 100%
//   border-radius: 2px

.shelf {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #f9f9f9;
  border-radius: 2px;
  z-index: 3;
}
// box-shadow: 0px -5px 3px 0px rgba(#aaa, 0.2), 0px 15px 20px 0px rgba(#aaa, 0.5), 0px 5px 5px 0px rgba(#777, 0.3)
</style>
