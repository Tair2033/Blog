<template>
  <div class="postblock">
    <div class="postblock__body">
      <div class="postblock__container">
        <div class="postblock__title">
          <router-link to="/post/:id">
            {{ post.title }}
          </router-link>
        </div>
        <div class="postblock__p">
          {{ post.mainText }}
        </div>
        <div class="postblock__preview">
          <img :src="require(`../assets/${post.preview}`)" alt="">
        </div>
        <div class="postblock__tags">
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
  props: ['post']
}

</script>

<style lang='scss'>
.postblock__container {}

.postblock {
  padding: 20px;
  border-radius: 30px;
  transition: all 0.15s;
  background-color: white;

  &__body {}

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
    margin-bottom: 30px;
    max-width: 900px;
    word-wrap: break-word;
    line-height: 1.4;
  }

  &__preview {
    border-radius: 15px;
    max-width: 900px;
    height: 450px;
    overflow: hidden;
    position: relative;
  }

  &__preview img {
    max-width: 100%;
    // height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__tags {}

  &__tags-tag {}
}

.postblock:hover {
  background-color: rgba(0, 0, 0, 0.097);
}
</style>
