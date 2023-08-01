<template>
  <div class="news">
    <div class="news__body">
      <div class="news__title">
        {{ news?.title }}
      </div>
      <div class="news__p">
        {{ news?.text }}
      </div>
      <div class="news__date">
        {{ news?.publishDate }}
      </div>

      <div class="news__subscribe" v-if="subscribe">
        <div class="news__subscribe-input">
          <input type="email">
        </div>
        <div class="news__subscribe-button">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppNews',
  props: ['news', 'subscribe']
}

</script>

<style lang='scss' scoped>
.news {
  width: 100%;
  cursor: default;
  margin-bottom: 30px;

  &__body {
    font-family: 'Montserrat', sans-serif;
    // background-color: aquamarine;
    padding: 12px;
    border-radius: 10px;
  }

  &__title {
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 10px;
    color: rgba(6, 60, 141, 0.829);
  }

  &__p {
    font-size: 15px;
    // word-break: break-all;
    word-wrap: break-word;
    line-height: 1.5;
  }

  &__date {
    text-align: end;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }

  &__subscribe {
    margin-top: 20px;
  }

  &__subscribe-input {
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
  }

  &__subscribe-input input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    font-size: 19px;
    padding: 3px;
    border: 1px solid black;
  }

  &__subscribe-button {
    width: 100%;
  }

  &__subscribe-button button {
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    background-color: rgb(16, 9, 93);
    color: white;
  }
}
</style>
