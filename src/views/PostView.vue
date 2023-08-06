<template>
  <div class="wrapper">
    <div class="wrapper__loader" v-if="getLoaderPostStatus">
      <AppLoader />
    </div>
    <div class="content" v-if="!getLoaderPostStatus">
      <div class="content__body">
        <div class="container">
          <div class="content__top">
            <div class="content__title">
              {{ getPost?.title }}
            </div>
            <div class="content__p">
              {{ getPost?.paragraph }}
            </div>
            <div class="content__tags">
              <div class="content__tags-title">
                Tags:
              </div>
              <div class="content__tags-tag" v-for="tag in getPost?.tags" :key="tag">
                {{ tag }}
              </div>
            </div>
            <div class="content__preview">
              <img :src="getPost?.preview" alt="">
            </div>
          </div>

          <div class="content__main">
            <!-- main text -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import AppLoader from '@/components/AppLoader.vue'
import { useRoute } from 'vue-router'
import { main, posts } from '../mocks/data'
import store from '@/store'

export default {
  name: 'PostView',
  data: () => {
    return {
      posts
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.dispatch('changePostLoadingStatus')
      clearTimeout(timeout)
    }, 1200)
  },
  computed: {
    getPost(): object | null {
      const route = useRoute()
      const index = route.params.id
      const allPosts = [{ ...main }, ...posts]
      let post = {}

      for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].id.toString() === index) {
          post = { ...allPosts[i] }
          console.log(post)
          return post
        }
      }

      return null
    },
    getLoaderPostStatus() {
      return store.getters.isLoadingPost
    }
  },
  methods: {},
  components: { AppLoader }
}

</script>

<style lang='scss' scoped>
.wrapper {
  width: 100%;
  padding: 0 50px;

  &__loader {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
}

.default-text {
  font-size: 20px;
  line-height: 1.4;
}

.content {
  padding-top: 60px;

  &__body {}

  &__top {}

  &__title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 13px;
  }

  &__p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 1.7;
  }

  &__tags {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__tags-title {
    font-size: 20px;
    font-weight: 400;
    margin-right: 10px;
  }

  &__tags-tag {
    font-size: 20px;
    font-weight: 400;
    padding: 8px;
    border: 3px solid black;
    cursor: default;
    border-radius: 19px;
    user-select: none;
    max-height: 42px;
    font-weight: 500;
    word-wrap: break-word;
  }

  &__preview {
    max-width: 1290px;
    max-height: 700px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
  }

  &__preview img {
    object-fit: cover;
  }

  &__main {
    margin-top: 70px;
  }
}
</style>
