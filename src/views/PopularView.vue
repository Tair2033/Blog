<template>
  <div class="popular">
    <div class="popular__body">
      <div class="container">
        <div class="popular__box">
          <div class="popular__filter">
            <div
              v-for="(item, index) in filterItems"
              :key="index"
              class="popular__filter-item"
            >
              <img
                :src="`/images/${item}`"
                alt="logo"
              >
              <span>{{ index }}</span>
            </div>
          </div>
          <div class="popular__content">
            <div
              v-if="loadingStatus"
              class="popular__loader"
            >
              <AppLoader />
            </div>
            <div v-if="!loadingStatus">
              <AppPost
                v-for="(post, index) in posts"
                :key="index"
                :post="post"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppLoader from '@/components/AppLoader.vue'
import AppPost from '@/components/AppPost.vue'
import { posts } from '@/mocks/data'
import store from '@/store'

export default {
  name: 'PolulalView',
  components: { AppPost, AppLoader },
  data: () => {
    return {
      posts,
      filterItems: {
        All: 'all.png',
        Interesting: 'interesting.png',
        Games: 'games.png',
        Cinema: 'cinema.png',
        Travel: 'travel.png',
        Gamedev: 'gamedev.png'
      }
    }
  },
  computed: {
    loadingStatus(): boolean {
      return store.getters.isLodingPopular
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.commit('changePopularLoadingStatus')
      clearTimeout(timeout)
    }, 700)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.popular {
  padding-top: 100px;

  &__box {
    padding-top: 20px;
    display: flex;
  }

  &__loader {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
  }

  &__filter {
    min-width: 250px;
  }

  &__filter-item {
    user-select: none;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    width: 95%;
    border-radius: 10px;
  }

  &__filter-item:hover {
    background-color: rgba(0, 0, 0, 0.061);
    color: blue;

    span {
      background-size: 100% 2px;
    }
  }

  &__filter-item img {
    max-width: 35px;
    margin-right: 20px;
  }

  &__filter-item span {
    font-size: 20px;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;
  }

  &__content {
    flex-grow: 1;
  }
}

@media (max-width: 1024px) {
  .popular__filter {
    display: none;
  }
}
</style>
