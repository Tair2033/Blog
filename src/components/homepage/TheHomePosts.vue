<template>
  <div class="infoblocks">
    <div class="infoblocks__body">
      <div class="infoblocks__container">
        <div class="infoblocks__content">

          <div class="infoblocks__posts">
            <AppPost v-for="post in posts" :post="post" :key="post.id" />
          </div>

          <div class="infoblocks__news">asdas</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import AppPost from '../AppPost.vue'

export default {
  name: 'TheHomePosts',
  props: ['posts'],
  components: { AppPost }
}

</script>

<style lang='scss'>
.infoblocks {
  padding: 20px;

  &__body {}

  &__container {}

  &__content {
    display: flex;
  }

  &__posts {}

  &__news {
    width: 300px;
  }
}
</style>
