<template>
  <div class="popover-wrapper" :style="{ 'top': content.position.y - 100, 'left': content.position.x - 100 }">
    <div class="popover">
      <div class="popover__body">
        <div class="popover__list" :v-if="content.list">
          <div class="popover__list-item" v-for="item in content.list" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppPopover',
  props: ['content']
}

</script>

<style lang='scss' scoped>
.popover-wrapper {
  z-index: 40;
  position: absolute;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(243, 242, 242);
  border: 1px solid rgba(68, 68, 68, 0.153);
}

.popover {
  &__body {
    font-size: 19px;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__list-item {
    padding: 10px 10px;
    border-radius: 10px;
    color: rgb(51, 50, 50);
  }

  &__list-item:hover {
    background-color: rgba(0, 0, 0, 0.095);
    color: black;
  }
}
</style>
