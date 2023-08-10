<template>
  <div class="default">
    {{ text }}
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppDefaultText',
  props: ['text']
}

</script>

<style lang='scss' scoped>
.default {
  margin-bottom: 30px;
  font-size: calc(15px + 5 * (100vw / 1280));
  line-height: 1.7;
  font-family: 'Montserrat', sans-serif;
}
</style>
