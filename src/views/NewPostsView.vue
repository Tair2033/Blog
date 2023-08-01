<template>
  <div class="fresh">
    <AppLoader />
  </div>
</template>

<script lang='ts'>
import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'NewPostsView',
  components: { AppLoader }
}

</script>

<style lang='scss' scoped>
.fresh {
  padding-top: 140px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
