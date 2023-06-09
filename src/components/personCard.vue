<script setup lang="ts">
import { storeToRefs } from 'pinia'
import JSConfetti from 'js-confetti'
import { mainStore } from '../stores/index'

const mainSt = mainStore()
const { userImg, username, address, occupation, email, github, description, studyAndWorkExperience } = storeToRefs(mainSt)
let showConfetti = () => {}
if (process.client) {
  const buttons = document.querySelectorAll('.card-buttons button')
  const sections = document.querySelectorAll('.card-section')
  const card = document.querySelector('.card')!

  const handleButtonClick = (e: any) => {
    const targetSection = e.target.getAttribute('data-section')
    const section = document.querySelector(targetSection)
    targetSection !== '#about' ? card.classList.add('is-active') : card.classList.remove('is-active')
    card.setAttribute('data-state', targetSection)
    sections.forEach((s) => s.classList.remove('is-active'))
    buttons.forEach((b) => b.classList.remove('is-active'))
    e.target.classList.add('is-active')
    section.classList.add('is-active')
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', handleButtonClick)
  })

  const confetti = new JSConfetti()
  showConfetti = function () {
    confetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 20,
    })
  }
}
onMounted(() => {
  showConfetti()
})
</script>

<template>
  <div class="card h-420px" data-state="#about">
    <div class="card-header">
      <div class="card-cover" :style="`background-image: url('${userImg}')`"></div>
      <waterStripeImg class="card-avatar" :img-url="userImg" @click="showConfetti" />
      <!-- <img
        class="card-avatar"
        src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt="avatar" /> -->
      <h1 class="card-fullname">{{ username }}</h1>
      <h2 class="card-jobtitle">{{ occupation }}</h2>
    </div>
    <div class="card-main">
      <div id="about" class="card-section is-active">
        <div class="card-content">
          <div class="card-subtitle">{{ $t('person.introduction') }}</div>
          <p class="card-desc">{{ description }}</p>
        </div>
      </div>
      <div id="experience" class="card-section">
        <div class="card-content">
          <div class="card-subtitle">{{ $t('person.exp') }}</div>
          <div class="card-timeline">
            <div v-for="item in studyAndWorkExperience" :key="item.id" class="card-item" :data-year="item.time">
              <div class="card-item-title">
                {{ item.title }} <span>{{ item.companyOrSchool }}{{ item.address }}</span>
              </div>
              <div class="card-item-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" class="card-section">
        <div class="card-content">
          <div class="card-subtitle">{{ $t('person.contact') }}</div>
          <div class="card-contact-wrapper">
            <div class="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {{ address }}
            </div>
            <div class="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>

              {{ github.link }}
            </div>
            <div class="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              {{ email }}
            </div>
            <!-- <button class="contact-me">WORK TOGETHER</button> -->
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button data-section="#about" class="is-active">{{ $t('person.about') }}</button>
        <button data-section="#experience">{{ $t('person.exp') }}</button>
        <button data-section="#contact">{{ $t('person.contact') }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// @import url('https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap');

* {
  box-sizing: border-box;
}
// body {
//   color: #2b2c48;
//   font-family: 'Jost', sans-serif;
//   background-image: url(https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80);

//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   min-height: 100vh;
//   display: flex;
//   flex-wrap: wrap;
//   padding: 20px;
// }

.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;

  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.card[data-state='#about'] {
  // height: 450px;
  .card-main {
    padding-top: 0;
  }
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname,
  .card-jobtitle {
    left: 86px;
    transform: none;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
  }
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.card-buttons {
  display: flex;
  // background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;

  button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;

    &.is-active,
    &:hover {
      color: #2b2c48;
      border-bottom: 3px solid #8a84ff;
      background: linear-gradient(to bottom, rgba(127, 199, 231, 0) 0%, rgba(207, 204, 255, 0.2) 44%, rgba(211, 226, 255, 0.4) 100%);
    }
  }
}

.card-section {
  display: none;
  &.is-active {
    display: block;
    animation: fadeIn 0.6s both;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;
  &:after {
    background: linear-gradient(to top, rgba(134, 214, 243, 0) 0%, rgba(81, 106, 204, 1) 100%);
    content: '';
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: '';
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(to bottom, lighten(#516acc, 20%) 0%, #516acc 100%);
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(to right, rgba(83, 200, 239, 0.8) 0%, rgba(81, 106, 204, 0.8) 96%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Jost', sans-serif;
  transition: 0.3s;
}
</style>
