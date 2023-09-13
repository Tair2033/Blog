<template>
  <div class="fresh">
    <div class="fresh__container">
      <div class="fresh__body">
        <div class="fresh__content">
          <div
            v-if="loadingStatus"
            class="fresh__loader"
          >
            <AppLoader />
          </div>

          <div v-if="!loadingStatus">
            <div
              class="fresh__filter"
              :class="{ 'toggle-filter': isListActive }"
            >
              <div class="fresh__filter-title">
                <i class="fa-solid fa-calendar-plus" />
                <span> Last </span>
              </div>
              <div
                :class="{ 'toggle-list': isListActive }"
                class="fresh__flex"
              >
                <div
                  v-for="(item, index) in filterItems"
                  :key="index"
                  class="fresh__filter-item"
                  :class="{ 'active-filter': index == activeFilter }"
                  @click="toggleFilter(item, index)"
                >
                  {{ item }}
                </div>
              </div>
              <div
                class="fresh__btn toggle-btn"
                :class="{ 'active-arrow': isListActive }"
                @click="isListActive = !isListActive"
              >
                <i class="fa-solid fa-chevron-down" />
              </div>
            </div>
            <div class="fresh__box">
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
import store from '@/store'
import { defineComponent } from 'vue'
import { posts } from '../mocks/data'

export default defineComponent({
  name: 'NewPostsView',
  components: { AppLoader, AppPost },
  data: () => {
    return {
      posts,
      isListActive: true,
      activeFilter: 0,
      filterItems: ['Hour', 'Day', 'Week', 'Month', 'Year']
    }
  },
  computed: {
    loadingStatus(): boolean {
      return store.getters.isLoadingNew
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.dispatch('changeNewLoadingStatus')
      clearTimeout(timeout)
    }, 700)
  },
  methods: {
    toggleFilter(item: string, index: number) {
      this.activeFilter = index
    }
  }
})
</script>

<style lang="scss" scoped>
.fresh__container {
  max-width: 1000px;
  margin: 0 auto;
}

.toggle-btn {
  display: none;
  cursor: pointer;
  font-size: 21px;
}

.toggle-btn:hover {
  color: rgba(16, 16, 253, 0.901);
}

.toggle-filter {
  flex-direction: column;
}

.active-arrow {
  transform: rotateX(180deg);
}

.fresh {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  &__body {
    width: 100%;
  }

  &__filter {
    margin-top: 30px;
    display: flex;
    position: relative;
    align-items: center;
  }

  &__flex {
    display: flex;
    transition: all 1s;
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
    font-size: calc(19px + (100vw / 1280));
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  &__filter-item:hover {
    color: white;
    background-color: rgba(16, 4, 187, 0.333);
  }

  &__filter-item:focus {
    background-color: rgba(16, 4, 187, 0.333);
  }

  .active-filter {
    color: white;
    background-color: rgba(16, 4, 187, 0.568);
  }

  .active-filter:hover {
    background-color: rgba(16, 4, 187, 0.568);
  }

  &__content {
    width: 100%;
  }

  &__loader {
    width: 100%;
    padding-top: 135px;
  }

  &__box {
    padding-top: 30px;
  }
}

@media (max-width: 580px) {
  .fresh__filter {
    align-items: center;
    overflow: hidden;
  }

  .fresh__flex {
    flex-direction: column;
    position: absolute;
    transition: all 1s;
    top: -190px;
  }

  .fresh__filter-title {
    align-self: flex-start;
    background-color: white;
    z-index: 20;
    width: 100%;
  }

  .toggle-btn {
    display: flex;
    align-self: flex-end;
  }
}

.toggle-list {
  // padding-bottom: 200px;
  transition: all 1s;
  position: static;
  top: 150px;
}
</style>
