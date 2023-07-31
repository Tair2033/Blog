<template>
  <div class="home">
    <div class="home__body">
      <div class="container">
        <div class="home__content">
          <TheHeaderPost :mainPost="mainPost" />
          <TheHomePosts :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheHeaderPost from '@/components/homepage/TheHeaderPost.vue'
import TheHomePosts from '@/components/homepage/TheHomePosts.vue'
import { main, posts } from '../mocks/data'

export default {
  name: 'HomeView',
  data: function () {
    return {
      mainPost: main,
      posts
    }
  },
  components: { TheHeaderPost, TheHomePosts }
}

</script>
<style lang="scss" scoped>
.home {
  padding-top: 20px;
}
</style>
