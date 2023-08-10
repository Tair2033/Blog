<template>
  <div class="wrapper">
    <div class="wrapper__loader" v-if="changeHomeLoadingStatus">
      <AppLoader />
    </div>
    <div class="home" v-if="!changeHomeLoadingStatus">
      <div class="home__body">
        <div class="container">
          <div class="home__content">
            <TheHeaderPost :mainPost="mainPost" />
            <TheHomePosts :posts="posts" :news="news" />
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
  data: function () {
    return {
      mainPost: main,
      posts,
      news
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.dispatch('changeHomeLoadingStatus')
      clearTimeout(timeout)
    }, 700)
  },
  computed: {
    changeHomeLoadingStatus() {
      return store.getters.isLoadingHome
    }
  },
  components: { TheHeaderPost, TheHomePosts, AppLoader }
}

</script>
<style lang="scss" scoped>
.home {
  padding-top: 20px;
}

.wrapper__loader {
  display: flex;
  justify-content: center;
  padding-top: 220px;
}
</style>
