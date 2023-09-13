<template>
  <div class="wrapper">
    <div
      v-if="changeHomeLoadingStatus"
      class="wrapper__loader"
    >
      <AppLoader />
    </div>
    <div
      v-if="!changeHomeLoadingStatus"
      class="home"
    >
      <div class="home__body">
        <div class="home__container">
          <div class="home__content">
            <TheHeaderPost :main-post="mainPost" />
            <TheHomePosts
              :posts="posts"
              :news="news"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheHeaderPost from '@/components/homepage/TheHeaderPost.vue'
import TheHomePosts from '@/components/homepage/TheHomePosts.vue'
import store from '@/store'
import { main, posts, news } from '../mocks/data'
import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'HomeView',
  components: { TheHeaderPost, TheHomePosts, AppLoader },
  data: function () {
    return {
      mainPost: main,
      posts,
      news
    }
  },
  computed: {
    changeHomeLoadingStatus() {
      return store.getters.isLoadingHome
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.commit('changeHomeLoadingStatus')
      clearTimeout(timeout)
    }, 700)
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
}

.wrapper__loader {
  display: flex;
  justify-content: center;
  padding-top: 220px;
}

.home__container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
