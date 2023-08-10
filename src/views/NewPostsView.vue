<template>
  <div class="fresh">
    <div class="container">
      <div class="fresh__body">
        <div class="fresh__content">
          <div class="fresh__loader" v-if="loadingStatus">
            <AppLoader />
          </div>

          <div v-if="!loadingStatus">
            <div class="fresh__filter">
              <div class="fresh__filter-title">
                <i class="fa-solid fa-calendar-plus"></i>
                <span>
                  Last
                </span>
              </div>
              <div class="fresh__filter-item" @click="toggleFilter(item, index)"
                :class="{ 'active-filter': index == activeFilter }" v-for="(item, index) in filterItems" :key="index">
                {{ item }}
              </div>
            </div>
            <div class="fresh__box">
              <AppPost v-for="(post, index) in posts" :key="index" :post="post" />
            </div>
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
import { defineComponent } from 'vue'
import { posts } from '../mocks/data'

export default defineComponent({
  name: 'NewPostsView',
  data: () => {
    return {
      posts,
      activeFilter: 0,
      filterItems: [
        'hour',
        'day',
        'week',
        'month',
        'year'
      ]
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
  },
  methods: {
    toggleFilter(item: string, index: number) {
      this.activeFilter = index
    }
  }
})

</script>

<style lang='scss' scoped>
.active-filter {
  color: white;
  background-color: rgba(16, 4, 187, 0.568);
}

.fresh {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  &__body {
    width: 100%;
  }

  &__filter {
    padding-top: 30px;
    display: flex;
    align-items: center;
  }

  &__filter-title {
    cursor: default;
    font-size: 25px;
    margin-right: 20px;
    font-weight: 600;
  }

  &__filter-title span {
    margin-left: 10px;
  }

  &__filter-item {
    transition: all 0.15s;
    cursor: pointer;
    margin-left: 10px;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
  }

  &__filter-item:hover {
    color: white;
    background-color: rgba(16, 4, 187, 0.333);
  }

  &__content {
    width: 100%;
  }

  &__loader {
    width: 100%;
    padding-top: 220px;
  }

  &__box {
    padding-top: 30px;
  }

}
</style>
