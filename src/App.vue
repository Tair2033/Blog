<template>
  <div class="app">
    <TheNavbar />
    <router-view />
  </div>
</template>

<script lang='ts'>
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'App',
  components: { TheNavbar }
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

.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
