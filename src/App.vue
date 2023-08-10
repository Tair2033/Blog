<template>
  <div class="app">
    <TheNavbar />
    <AppModal v-if="isModal" />
    <AppNotification :text="getNotifText" :type="getNotifType" />
    <router-view />
  </div>
</template>

<script lang='ts'>
import AppModal from './components/AppModal.vue'
import AppNotification from './components/AppNotification.vue'
import TheNavbar from './components/TheNavbar.vue'
import store from './store'

export default {
  name: 'App',
  components: { TheNavbar, AppNotification, AppModal },
  computed: {
    isModal() {
      return store.getters.isModal
    },
    getNotifText(): string {
      return store.getters.getNotifText
    },
    getNotifType(): string {
      return store.getters.getNotifType
    }
  }
}

</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}

.app {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.active-modal {
  overflow: hidden;
}

// Adapt

@media (min-width: 1980px) {
  .container {
    max-width: 1850px;
    margin: 0 auto;
  }
}

@media (min-width: 1760px) {
  .container {
    max-width: 1450px;
    margin: 0 auto;
  }
}
</style>
