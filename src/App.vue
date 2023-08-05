<template>
  <div class="app">
    <TheNavbar />
    <AppNotification :text="getNotifText" :type="getNotifType" />
    <router-view />
  </div>
</template>

<script lang='ts'>
import AppNotification from './components/AppNotification.vue'
import TheNavbar from './components/TheNavbar.vue'
import store from './store'

export default {
  name: 'App',
  components: { TheNavbar, AppNotification },
  computed: {
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
}

.container {
  max-width: 1300px;
  margin: 0 auto;
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
