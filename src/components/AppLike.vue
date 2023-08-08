<template>
  <div>
    <svg class="hand" v-if="!isTypeButton" :class="{ 'like': !isTypeButton, 'active-like': status }" width="27px"
      height="27px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" />
    </svg>
    <svg class="hand" v-if="isTypeButton" :class="{ dislike: isTypeButton, 'active-dislike': status }" width="25px"
      height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.1 20.5c0 1.5 1.482 2.5 2.64 2.5.806 0 .869-.613.993-1.82.055-.53.121-1.174.267-1.93.386-2.002 1.72-4.56 2.996-5.325V8C15 5.75 14.25 5 11 5H7.227C5.051 5 4.524 6.432 4.328 6.964A15.85 15.85 0 0 1 4.315 7c-.114.306-.358.546-.638.82-.31.306-.664.653-.927 1.18-.311.623-.27 1.177-.233 1.67.023.299.044.575-.017.83-.064.27-.146.475-.225.671-.143.356-.275.686-.275 1.329 0 1.5.748 2.498 2.315 2.498H8.5S8.1 19 8.1 20.5zM18.5 15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5z" />
    </svg>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLike',
  props: {
    type: String,
    status: Boolean
  },
  computed: {
    isTypeButton() {
      if (this.$props.type === 'dislike') {
        return true
      }
      return false
    }
  }
})

</script>

<style lang='scss' scoped>
.hand {
  cursor: pointer;
  fill: rgba(0, 0, 0, 0.528);
  transition: all 0.25s;
}

.active-like {
  fill: red;
}

.like {
  margin-top: 5px;
}

.like:hover {
  fill: red;
}

.active-dislike {
  fill: rgb(0, 0, 0);
}

.dislike {}

.dislike:hover {
  fill: rgb(0, 0, 0);
}
</style>
