<template>
  <div class="infoblocks">
    <div class="infoblocks__body">
      <div class="infoblocks__container">
        <div class="infoblocks__content">
          <div class="infoblocks__posts">
            <div class="infoblocks__title">Fresh Posts</div>

            <AppPost v-for="(post, index) in posts" :post="post" :key="index" />

            <div class="infoblocks__redirect">
              <router-link to="/new-posts">
                Watch more fresh posts...
              </router-link>
            </div>
          </div>

          <div class="infoblocks__news">
            <div class="infoblocks__news-title">News</div>

            <div class="infoblocks__newsblock">
              <AppNews v-for="section in news" :news="section" :key="section" />

              <div class="infoblocks__news-subscribe">
                <AppNews :subscribe="subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppNews from '../AppNews.vue'
import AppPost from '../AppPost.vue'

export default {
  name: 'TheHomePosts',
  data: () => {
    return {
      subscribe: {
        title: 'Weekly newsletter',
        text: 'No spam. Just the latest releases and tips, interesting artiles, and exclusive interviews in your inbox every week.'
      }
    }
  },
  props: ['posts', 'news'],
  components: { AppPost, AppNews }
}
</script>

<style lang="scss">
.infoblocks {
  display: flex;

  &__title {
    font-size: calc(16px + 6 * (100vw / 1280));
    margin-bottom: 20px;
    text-decoration: underline;
    margin-left: 20px;
    cursor: default;
    user-select: none;
  }

  &__news-title {
    text-align: start;
    text-decoration: underline;
    font-size: calc(16px + 6 * (100vw / 1280));
    margin-bottom: 20px;
    margin-left: 12px;
    font-weight: 600;
    cursor: default;
    user-select: none;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__redirect {
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: calc(12px + 6 * (100vw / 1280));
  }

  &__redirect a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid white;
    transition: all 0.3s;
  }

  &__redirect a:hover {
    color: blue;
    border-bottom: 1px solid blue;
  }

  &__news {
    max-width: 300px;
  }

  &__newsblock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 1020px) {
  .infoblocks__content {
    flex-direction: column;
  }

  .infoblocks__news {
    max-width: 100%;
  }

  .postblock {
    margin-right: 0;
  }
}
</style>
