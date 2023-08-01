<template>
  <div class="popular">
    <div class="popular__body">
      <div class="container">
        <div class="popular__content">
          <AppPost v-for="(post, index) in posts" :post="post" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import AppPost from '@/components/AppPost.vue'
import { posts } from '@/mocks/data'

export default {
  name: 'PolulalView',
  data: () => {
    return {
      posts
    }
  },
  components: { AppPost }
}

</script>

<style lang='scss'></style>
