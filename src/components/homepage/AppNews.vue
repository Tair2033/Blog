<template>
  <div class="news">
    <div class="news__body">
      <div
        v-if="!subscribe"
        class="news__wrapper"
      >
        <div class="news__title">
          {{ news?.title }}
        </div>
        <div class="news__p">
          {{ news?.text }}
        </div>
        <div class="news__date">
          {{ news?.publishDate }}
        </div>
      </div>

      <div
        v-if="subscribe"
        class="news__subscribe"
      >
        <div class="news__subscribe-title">
          {{ subscribe?.title }}
        </div>
        <div class="news__subscribe-p">
          {{ subscribe?.text }}
        </div>
        <div class="news__subscribe-input">
          <input
            ref="email"
            type="email"
          >
        </div>
        <div class="news__subscribe-button">
          <button
            type="button"
            @click="changeNotif"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNews',
  props: ['subscribe', 'news'],
  methods: {
    changeNotif() {
      const inputElement = this.$refs.email as HTMLInputElement

      if (inputElement.value.length) {
        store.dispatch('changeNotifText', 'You have been subscribed!')
        store.dispatch('changeNotifStatus')

        inputElement.value = ''

        const timeout = setTimeout(() => {
          store.dispatch('changeNotifStatus')
          clearTimeout(timeout)
        }, 2000)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  cursor: default;
  margin-bottom: 10px;

  &__body {
    font-family: 'Montserrat', sans-serif;
    padding: 12px;
    border-radius: 10px;
  }

  &__title {
    font-size: calc(12px + 6 * (100vw / 1280));
    font-weight: bold;
    padding-bottom: 10px;
    color: rgba(10, 40, 85, 0.88);
  }

  &__wrapper {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.267);
  }

  &__p {
    font-size: calc(9px + 5 * (100vw / 1280));
    word-wrap: break-word;
    line-height: 1.5;
  }

  &__date {
    text-align: end;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    font-size: calc(7px + 5 * (100vw / 1280));
  }

  &__subscribe {
    margin-top: 20px;
    border: 1px solid rgba(57, 57, 57, 0.308);
    padding: 12px;
    border-radius: 17px;
  }

  &__subscribe-title {
    color: rgb(16, 16, 91);
    font-weight: 600;
    font-size: calc(13px + 5 * (100vw / 1280));
    margin-bottom: 15px;
    text-align: center;
  }

  &__subscribe-p {
    font-size: 15px;
    font-size: calc(9px + 5 * (100vw / 1280));
    word-break: break-word;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  &__subscribe-input {
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
  }

  &__subscribe-input input {
    touch-action: manipulation;
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
    font-size: 17px;
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    background-color: rgb(14, 8, 78);
    color: white;
    transition: all 0.3s;
  }

  &__subscribe-button button:hover {
    background-color: rgb(37, 27, 153);
  }
}
</style>
