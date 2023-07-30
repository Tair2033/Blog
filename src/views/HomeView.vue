<template>
  <div class="home">
    <div class="home__body">
      <div class="container">
        <div class="home__content header">
          <div class="header__left">
            <img src="../assets/header-element.png" alt="">
          </div>
          <div class="header__info">
            <div class="header__info-top">
              {{ postPost.topTitle }}
            </div>
            <div class="header__info-title">
              {{ postPost.title }}
            </div>
            <div class="header__info-p">
              {{ postPost.paragraph }}
            </div>

            <div class="header__tags"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { main } from '../mocks/data'

export default {
  name: 'HomeView',
  data: function () {
    return {
      postPost: main
    }
  }
}

</script>
<style lang="scss"></style>
