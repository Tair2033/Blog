<template>
  <div class="postblock">
    <div class="postblock__body">
      <div class="postblock__title" @click="updateLoaders">
        <router-link :to="'/post/' + post.id">
          {{ post.title }}
        </router-link>
      </div>
      <div class="postblock__container">
        <div class="postblock__p" @click="isOpenP = !isOpenP">
          <p v-if="!isOpenP">
            {{ post.paragraph.slice(0, 200) }}.....
          </p>
          <div class="postblock__p-hide" v-if="!isOpenP">
            <img src="../assets/down-arrow.png" alt="">
          </div>
          <p v-if="isOpenP">
            {{ post.paragraph }}
          </p>
        </div>
        <div class="postblock__preview" @click="updateLoaders" v-if="post.preview">
          <router-link class="postblock__preview-a" :to="'/post/' + post.id">
            <img :src="`${post.preview}`" alt="">
          </router-link>
        </div>
        <div class="postblock__bottom">
          <div class="postblock__tags">
            <span>Tags:</span>
            <div class="postblock__tags-tag" v-for="tag  in  post.tags " :key="tag">
              {{ tag }}
            </div>
          </div>
          <div class="postblock__stats">
            <div class="postblock__stats-author">
              {{ post.author }}
            </div>
            <div class="postblock__stats-date">
              {{ post.publishDate }}
            </div>
            <div class="postblock__stats-like" @click="isLiked = !isLiked, isDisliked = false">
              <AppLike :class="{ 'like-btn': isLiked }" type="like" :status="isLiked" />
            </div>
            <div class="postblock__stats-dis" @click="isDisliked = !isDisliked, isLiked = false">
              <AppLike type="dislike" :status="isDisliked" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import store from '@/store'
import AppLike from './AppLike.vue'

export default {
  name: 'AppPost',
  data: () => {
    return {
      isOpenP: false,
      isLiked: false,
      isDisliked: false
    }
  },
  props: ['post', 'id'],
  methods: {
    updateLoaders() {
      store.dispatch('updateAllLoaders')
    }
  },
  components: { AppLike }
}

</script>

<style lang='scss' scoped>
.like-btn {
  border-radius: 50px;
  width: 1px;
  height: 1px;
  box-shadow: 13px 15px 1px 1px none;
  background: none;
}

.like-btn {
  animation: pulse-animation 0.8s;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 13px 15px 0 0px #d70f0f72;
  }

  100% {
    box-shadow: 13px 15px 0 20px rgba(220, 12, 12, 0);
  }
}

.postblock {
  border-radius: 30px;
  transition: all 0.3s;
  background-color: white;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.097);
  margin-right: 20px;
  position: relative;
  max-width: 1400px;

  &__body {
    cursor: default;
  }

  &__container {
    padding: 10px 24px 24px 24px;
  }

  &__title {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 24px 24px 10px 24px;
    font-size: 30px;
    width: 100%;
    background-color: rgba(240, 238, 238, 0.367);
  }

  &__title a {
    transition: all 0.3s;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }

  &__title a:hover {
    color: rgba(65, 65, 195, 0.603);
  }

  &__p {
    margin-top: 10px;
    font-size: 17px;
    padding-bottom: 20px;
    word-wrap: break-word;
    line-height: 1.7;
    color: rgba(0, 0, 0, 0.646);
  }

  &__p-hide {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 70px;
    width: 97%;
    top: 130px;
    z-index: -1;
    cursor: pointer;
  }

  &__p-hide div {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.218);
    opacity: 0.5;
    filter: blur(17px);
    z-index: 4;
  }

  &__p-hide img {
    cursor: pointer;
    z-index: 6;
    position: absolute;
    left: 47%;
    top: 18px;
    opacity: 0.4;
  }

  &__preview-a {
    border-radius: 15px;
    z-index: 10;
    width: auto;
    min-height: 450px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__preview-a img {
    z-index: 10;
    max-width: 100%;
    filter: brightness(87%);
    object-fit: cover;
    transition: all 0.4s;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__tags {
    display: flex;
    align-items: center;
  }

  &__tags span {
    margin-right: 10px;
    font-weight: 500;
  }

  &__tags-tag {
    background-color: white;
    font-weight: 500;
    padding: 8px;
    border: 2px solid black;
    margin-left: 10px;
    border-radius: 20px;
    cursor: default;
  }

  &__stats {
    display: flex;
    align-items: center;
  }

  &__stats-like {
    position: relative;
    width: 33px;
    height: 33px;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 0px 0px 1px 1px none;
  }

  &__stats-like img:hover {
    fill: red;
    cursor: pointer;
  }

  &__stats-dis {
    width: 25px;
    margin-right: 20px;
    margin-top: 2px;
  }

  &__stats-dis img {
    cursor: pointer;
    margin-top: 7px;
  }

  &__stats-author {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    margin-right: 15px;
  }

  &__stats-date {
    margin-right: 20px;
  }
}

.postblock:hover {
  .postblock__preview img {
    filter: brightness(100%);
  }
}

//Adapt
@media (max-width: 1150px) {
  .postblock__bottom {
    flex-direction: column;
  }

  .postblock__tags {
    margin-bottom: 20px;
  }
}

@media (max-width: 900px) {
  .postblock__p-hide img {
    top: 30px;
  }
}

@media (max-width: 725px) {
  .postblock__p-hide img {
    display: none;
  }

  .postblock__p-hide {
    cursor: pointer;
    top: 160px;
  }
}

@media (max-width: 670px) {
  .postblock__p-hide {
    top: 180px;
  }
}
</style>
