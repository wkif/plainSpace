<template>
  <div>
    <div class="container">
      <div class="tabs">
        <div v-for="(link, index) in props.NuxtLinkList">
          <input type="radio" :id="`radio-${index + 1}`" name="tabs" />
          <label class="tab" :for="`radio-${index + 1}`">
            <NuxtLink :to="link.to"> {{ link.name }}</NuxtLink>
          </label>
        </div>

        <!-- <input type="radio" id="radio-2" name="tabs" />
        <label class="tab" for="radio-2">Development</label>
        <input type="radio" id="radio-3" name="tabs" />
        <label class="tab" for="radio-3">Completed</label> -->
        <span class="glider"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['NuxtLinkList'])
</script>

<style lang="less" scoped>
@primary-color: #2add9c;
@secondary-color: #e6eef9;
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  display: flex;
  position: relative;

  * {
    z-index: 2;
  }
}

input[type='radio'] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px; // just a high number to create pill effect
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: @secondary-color;
  transition: 0.15s ease-in;
}

input[type='radio'] {
  &:checked {
    & + label {
      color: @primary-color;
      & > .notification {
        background-color: @primary-color;
        color: #4b5cc3;
      }
    }
  }
}

input[id='radio-1'] {
  &:checked {
    & ~ .glider {
      transform: translateX(0);
    }
  }
}

input[id='radio-2'] {
  &:checked {
    & ~ .glider {
      transform: translateX(100%);
    }
  }
}

input[id='radio-3'] {
  &:checked {
    & ~ .glider {
      transform: translateX(200%);
    }
  }
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: @secondary-color;
  z-index: 1;
  border-radius: 99px; // just a high number to create pill effect
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}
</style>
