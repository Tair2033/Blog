<template>
  <div class="post-image">
    <img :src="item.link" alt="">
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppImage',
  props: ['item']
}

</script>

<style lang='scss'>
.post-image {
  max-width: auto;
  max-height: 700px;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding-bottom: 35px;
}

.post-image img {
  object-fit: contain;
  border-radius: 14px;
}
</style>
