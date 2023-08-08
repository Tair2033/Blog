<template>
  <div class="default-post-text default">
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
}
</style>
