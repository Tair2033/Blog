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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

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
