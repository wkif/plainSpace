<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,800&display=swap" rel="stylesheet" />
    <h1 class="rainbow-text font-800 w-13em m-l-a m-r-a" style="font-family: 'Work Sans', sans-serif; font-size: 5em; line-height: 0.9em">
      {{ props.title }}
    </h1>
  </div>
</template>

<style lang="less" scoped>
/* Style the rainbow text element. */
.rainbow-text {
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #ca4246;
  background-color: #ca4246;
  background: conic-gradient(
    #ca4246 16.666%,
    #e16541 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #4b5cc4 83.333%,
    #a7489b 83.333%
  );

  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animate the text when loading the element. */
  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 0.5s ease forwards;

  cursor: pointer;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}
</style>
