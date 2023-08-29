<template>
  <div class="wrapper">
    <div class="wrapper__loader" v-if="getLoaderPostStatus">
      <AppLoader />
    </div>
    <div class="content" v-if="!getLoaderPostStatus">
      <div class="content__body">
        <div class="container">
          <div class="content__top">
            <div class="content__titlebox">
              <div class="content__titlebox-title">
                {{ post?.title }}
              </div>
              <div class="content__titlebox-buttons">
                <div class="star" @click="bookmark">
                  <i :class="{ 'active-bookmark': isBookmarked }" class="fa-solid fa-star"></i>
                </div>
                <div class="setting" @click="settings">
                  <i :class="{ 'active-settings': isSettings }" class="fa-solid fa-ellipsis"></i>
                  <AppPopover ref="pop" v-if="isSettings" :content="popoverSettings" />
                </div>
              </div>
            </div>
            <div class="content__p">
              {{ post?.paragraph }}
            </div>
            <div class="content__preview-top">
              <div class=" content__tags">
                <div class="content__tags-title">
                  Tags:
                </div>
                <div class="content__tags-tag" v-for="tag in post?.tags" :key="tag">
                  {{ tag }}
                </div>
              </div>

              <div class="content__info">
                <div class="content__info-date">
                  {{ post?.publishDate }}
                </div>
                <div class="content__info-author">
                  {{ post?.author }}
                </div>
              </div>
            </div>
            <div class="content__preview">
              <img :src="post?.preview" alt="">
            </div>
          </div>

          <div class="content__main">
            <div class="content__main-item" v-for="item in post.content" :key="item">
              <AppQuote v-if="item?.sectionType == 'quote'" :item="item" />

              <AppDefaultText v-if="item?.sectionType == 'text'" :text="item.text" />

              <AppImage v-if="item?.sectionType == 'image'" :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import AppLoader from '@/components/AppLoader.vue'
import AppQuote from '@/components/PostUI/AppQuote.vue'
import AppDefaultText from '@/components/PostUI/AppDefaultText.vue'
import AppImage from '@/components/PostUI/AppImage.vue'
import { useRoute } from 'vue-router'
import { main, posts } from '../mocks/data'
import { defineComponent } from 'vue'
import store from '@/store'
import AppPopover from '@/components/AppPopover.vue'

export default defineComponent({
  name: 'PostView',
  data: function () {
    return {
      popoverSettings: {
        list: ['Share', 'Complain'],
        position: {
          x: 0,
          y: 0
        }
      },
      posts,
      post: this.getPost()
    }
  },
  beforeMount() {
    const timeout = setTimeout(() => {
      store.dispatch('changePostLoadingStatus')
      clearTimeout(timeout)
    }, 1200)
  },
  computed: {
    getLoaderPostStatus() {
      return store.getters.isLoadingPost
    },
    isBookmarked() {
      return store.getters.isBookmarked
    },
    isSettings() {
      return store.getters.isSettings
    }
  },
  methods: {
    settings(e: Event) {
      store.dispatch('isSettings')

      this.popoverSettings.position = {
        x: -100,
        y: (e.target as HTMLElement).getBoundingClientRect().top - 99
      }
    },
    bookmark() {
      store.dispatch('isBookmarked')
    },
    getPost(): object | null {
      const route = useRoute()
      const index = route.params.id
      const allPosts = [{ ...main }, ...posts]
      let post = {}

      for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].id.toString() === index) {
          post = { ...allPosts[i] }
          return post
        }
      }

      return null
    }
  },
  components: { AppLoader, AppQuote, AppDefaultText, AppImage, AppPopover }
})

</script>

<style lang='scss' scoped>
.active-bookmark {
  color: rgb(248, 224, 7);
  box-shadow: 1px 5px 1px 1px none;
  animation: pulse-animation 1s;
  border-radius: 50%;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 1px 6px 0 0px #f2f605a4;
  }

  100% {
    box-shadow: 1px 6px 0 20px rgba(220, 12, 12, 0);
  }
}

.active-settings {
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.142);
}

.wrapper {
  width: 100%;
  padding: 0 20px;
  padding-top: 100px;

  &__loader {
    display: flex;
    justify-content: center;
    padding-top: 120px;
  }
}

.default-text {
  font-size: 20px;
  line-height: 1.4;
}

.content {
  padding-top: 30px;
  padding-bottom: 40px;

  &__main {
    padding-bottom: 60px;
  }

  &__titlebox {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  &__titlebox-buttons {
    display: flex;
    align-items: center;
  }

  &__titlebox-title {
    font-size: calc(12px + 2.3vw);
    font-weight: 600;
    padding-right: 20px;
  }

  .star {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
    font-size: 26px;
    padding: 5px;
    border-radius: 50%;
  }

  .star i {
    background-color: none;
    transition: all 0.3s;
  }

  .setting {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 26px;
    cursor: pointer;
  }

  .star a {
    width: 10px;
    height: 10px;
  }

  &__p {
    font-size: calc(15px + 5 * (100vw / 1280));
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 1.7;
  }

  &__preview-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    margin-bottom: 40px;
  }

  &__info {
    display: flex;
    font-size: 18px;
  }

  &__info-date {
    margin-right: 30px;
    font-size: calc(10px + 6 * (100vw / 1280));
  }

  &__info-author {
    font-weight: 500;
    font-size: calc(10px + 6 * (100vw / 1280));
  }

  &__tags {
    display: flex;
    align-items: center;
  }

  &__tags-title {
    font-size: calc(14px + 6 * (100vw / 1280));
    font-weight: 400;
    margin-right: 10px;
  }

  &__tags-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(11px + 5 * (100vw / 1280));
    font-weight: 400;
    padding: 8px;
    cursor: default;
    border-radius: 19px;
    user-select: none;
    font-weight: 500;
    word-wrap: break-word;
    margin-left: 10px;
  }

  &__preview {
    max-width: 1500px;
    max-height: 700px;
    height: auto;
    overflow: hidden;
    border-radius: 14px;
  }

  &__preview img {
    object-fit: contain;
    border-radius: 14px;
    width: 100%;
  }

  &__main {
    margin-top: 30px;
  }
}

@media (max-width: 820px) {
  .content__titlebox {
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }

  .content__titlebox-buttons {
    margin-bottom: 20px;
    align-self: flex-end;
  }
}

@media (max-width: 620px) {
  .content__preview-top {
    display: block;
  }

  .content__info {
    margin-top: 15px;
  }
}
</style>
