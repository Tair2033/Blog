<template>
  <div class="header">
    <div class="header__container">
      <div class="header__content header">
        <div class="header__left">
          <img src="/images/header-element.png" alt="" />
        </div>
        <div class="header__info">
          <div class="header__info-top">
            <span>&#128293;</span>
            Post of the day
          </div>
          <div class="header__info-title">
            <router-link :to="'/post/' + mainPost.id">
              {{ mainPost.title }}
            </router-link>
          </div>
          <div class="header__info-p">
            {{ mainPost.paragraph }}
          </div>

          <div class="header__tags">
            <div
              class="header__tags-tag"
              v-for="tag in mainPost.tags"
              :key="tag"
            >
              {{ tag }}
            </div>
            <div class="header__tags-tag" v-if="mainPost.readTime !== ''">
              {{ mainPost.readTime }}
            </div>
          </div>
        </div>
      </div>

      <div class="header__postinfo">
        <div class="header__preview">
          <img :src="mainPost.preview" alt="" />
        </div>

        <div class="header__post post">
          <div class="post__leftside">
            <div class="post__username">
              <div class="post__username-text italic">Written by</div>
              <div class="post__username-name">
                {{ mainPost.author }}
              </div>
            </div>
            <div class="post__publish">
              <div class="post__publish-text italic">Published on</div>
              <div class="post__publish-date">
                {{ mainPost.publishDate }}
              </div>
            </div>
          </div>
          <div class="post_rightside">
            <div class="post__copy" @click="isCopy = !isCopy">
              <i class="fa-regular fa-clone"></i>
              <span v-if="!isCopy">Copy Link</span>
              <span v-if="isCopy">Copied!</span>
            </div>
            <div
              class="post__social"
              v-for="social in mainPost.socialLinks"
              :key="social.id"
            >
              <a :href="social.link">
                <img :src="`/images/${social.icon}`" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheHeaderPost',
  data: () => {
    return {
      isCopy: false
    }
  },
  props: ['mainPost']
}
</script>

<style lang="scss">
.header {
  &__left {
    margin-right: 180px;
    min-width: 237px;
  }

  &__container {
    max-width: 1100px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    margin: 0 15px;
  }

  &__left img {
    width: auto;
    margin-top: 20px;
  }

  &__hyperlink {
    display: block;
    text-align: end;
    font-size: 20px;
  }

  &__hyperlink-link a {
    transition: all 0.3s;
    color: blue;
  }

  &__hyperlink-link a:hover {
    color: rgba(0, 0, 255, 0.556);
  }

  &__info {
    margin-top: 70px;
  }

  &__info-top {
    font-style: italic;
    font-weight: 600;
    font-size: calc(13px + 5 * (100vw / 1280));
  }

  &__info-top span {
    font-style: normal;
  }

  &__info-title {
    margin: 25px 0;
    font-size: calc(19px + 8 * (100vw / 1280));
    font-weight: bold;
    color: black;
    transition: all 0.3s;
  }

  &__info-title a {
    color: black;
    transition: all 0.3s;
  }

  &__info-title a:hover {
    color: rgba(65, 65, 195, 0.603);
  }

  &__info-p {
    font-size: calc(14px + 5 * (100vw / 1280));
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  &__tags {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  &__tags-tag {
    cursor: default;
    border: 3px solid black;
    border-radius: 19px;
    font-size: calc(10px + 4 * (100vw / 1280));
    padding: 8px;
    margin-left: 10px;
    user-select: none;
    // min-height: 42px;
    font-weight: 500;
  }

  &__tags-tag:first-child {
    margin-left: 0;
  }

  &__info-title a {
    text-decoration: none;
    color: black;
  }

  &__postinfo {
    padding-top: 70px;
  }

  &__preview {
    width: 100%;
    max-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 180px;
  }

  &__preview img {
    transition-property: filter;
    transition-duration: 1s;
    filter: brightness(50%);
    width: 100%;
    object-fit: cover;
  }

  &__preview img:hover {
    filter: brightness(100%);
  }
}

.post {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;

  &_rightside {
    display: flex;
  }

  &__leftside {
    display: flex;
  }

  &__username {
    display: flex;
    flex-direction: column;
  }

  &__publish {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
  }

  &__username-text {
    margin-bottom: 15px;
    font-size: calc(11px + 5 * (100vw / 1280));
  }

  &__username-name {
    font-weight: bold;
    font-size: calc(11px + 5 * (100vw / 1280));
  }

  &__publish-text {
    margin-bottom: 15px;
    font-size: calc(11px + 5 * (100vw / 1280));
  }

  &__publish-date {
    font-weight: bold;
    font-size: calc(11px + 5 * (100vw / 1280));
  }

  &__copy {
    cursor: pointer;
    border: 3px solid black;
    border-radius: 19px;
    padding: 8px;
    margin-left: 10px;
    user-select: none;
    max-height: 42px;
    font-weight: 600;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: background-color, color;
    transition-duration: 0.4s;
    font-size: calc(9px + 4 * (100vw / 1280));
  }

  &__copy:hover {
    color: white;
    background-color: black;
  }

  &__copy i {
    margin-right: 5px;
  }

  &__social {
    cursor: pointer;
    margin-left: 20px;
    border-bottom: 3px solid white;
    transition: all 0.4s;
  }

  &__social:hover {
    border-bottom: 3px solid black;
  }

  .italic {
    font-style: italic;
    font-weight: 500;
  }
}

//Adaptive

@media (max-width: 980px) {
  .header__left {
    display: none;
  }
}

@media (max-width: 570px) {
  .header__post {
    flex-direction: column;
    align-items: center;
  }

  .post_rightside {
    margin-top: 20px;
  }
}
</style>
