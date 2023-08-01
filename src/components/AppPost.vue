<template>
  <div class="postblock">
    <div class="postblock__body">
      <div class="postblock__container">
        <div class="postblock__title">
          <router-link to="/post/:id">
            {{ post.title }}
          </router-link>
        </div>
        <div class="postblock__p" @click="isOpenP = !isOpenP">
          <p v-if="!isOpenP">
            {{ post.mainText.slice(0, 200) }}.....
          </p>
          <div class="postblock__p-hide" v-if="!isOpenP">
            <div v-if="post.preview"></div>
            <img src="../assets/down-arrow.png" alt="">
          </div>
          <p v-if="isOpenP">
            {{ post.mainText }}
          </p>
        </div>
        <div class="postblock__preview" v-if="post.preview">
          <router-link to="/post/:id">
            <img :src="require(`../assets/${post.preview}`)" alt="">
          </router-link>
        </div>
        <div class="postblock__tags">
          <span>Tags:</span>
          <div class="postblock__tags-tag" v-for="tag in post.tags" :key="tag">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppPost',
  data: () => {
    return {
      isOpenP: false
    }
  },
  props: ['post', 'id']
}

</script>

<style lang='scss' scoped>
.postblock {
  padding: 20px;
  border-radius: 30px;
  transition: all 0.3s;
  background-color: white;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.097);
  margin-right: 20px;
  position: relative;

  &__body {
    cursor: default;
  }

  &__title {
    font-size: 30px;
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
    min-width: 900px;
    word-wrap: break-word;
    line-height: 1.7;
    color: rgba(0, 0, 0, 0.646);
  }

  &__p-hide {
    display: flex;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    height: 70px;
    width: 97%;
    top: 120px;
    z-index: -1;
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
    z-index: 6;
    position: absolute;
    left: 47%;
    top: 0px;
    opacity: 0.4;
  }

  &__preview {
    border-radius: 15px;
    z-index: 10;
    min-width: 900px;
    max-height: 450px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__preview img {
    z-index: 10;
    max-width: 100%;
    filter: brightness(87%);
    object-fit: cover;
    transition: all 0.4s;
  }

  &__tags {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  &__tags span {
    margin-right: 10px;
    font-weight: 500;
  }

  &__tags-tag {
    background-color: white;
    font-weight: 500;
    padding: 7px;
    border: 2px solid;
    margin-left: 10px;
    border-radius: 10px;
    cursor: default;
  }
}

.postblock:hover {
  .postblock__preview img {
    filter: brightness(100%);
  }
}

//Adapt

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
    top: 160px;
  }
}

@media (max-width: 670px) {
  .postblock__p-hide {
    top: 180px;
  }
}
</style>
