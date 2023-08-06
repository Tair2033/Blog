<template>
  <div class="fresh">
    <div class="container">
      <div class="fresh__body">
        <div class="fresh__content">
          <div class="fresh__loader" v-if="loadingStatus">
            <AppLoader />
          </div>

          <div class="fresh__box" v-if="!loadingStatus">
            <AppPost v-for="(post, index) in posts" :key="index" :post="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import AppLoader from '@/components/AppLoader.vue'
import AppPost from '@/components/AppPost.vue'
import store from '@/store'
import { posts } from '../mocks/data'

export default {
  name: 'NewPostsView',
  data: () => {
    return {
      posts
    }
  },
  components: { AppLoader, AppPost },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.dispatch('changeNewLoadingStatus')
      clearTimeout(timeout)
    }, 1300)
  },
  computed: {
    loadingStatus(): boolean {
      return store.getters.isLoadingNew
    }
  }
}

</script>

<style lang='scss' scoped>
.fresh {
  position: relative;
  padding-top: 140px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  &__body {
    width: 100%;
  }

  &__content {
    width: 100%;
  }

  &__loader {
    width: 100%;
  }

  &__box {}

}
</style>
