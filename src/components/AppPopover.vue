<template>
  <div
    class="popover-wrapper"
    :style="{ top: content.position.y + 'px', left: content.position.x + 'px' }"
  >
    <div class="popover">
      <div class="popover__body">
        <div class="popover__list" :v-if="content.list">
          <div
            class="popover__list-item"
            @click="itemAction(item)"
            v-for="item in content.list"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'

export default {
  name: 'AppPopover',
  methods: {
    itemAction(item: string) {
      if (item === 'Exit') {
        store.dispatch('login')
        location.reload()
      }
    }
  },
  props: ['content']
}
</script>

<style lang="scss" scoped>
.popover-wrapper {
  z-index: 40;
  position: absolute;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(243, 242, 242);
  border: 1px solid rgba(68, 68, 68, 0.153);
  box-shadow: 0px 4px 20px 4px rgba(34, 60, 80, 0.2);
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
    cursor: pointer;
  }

  &__list-item:hover {
    background-color: rgba(0, 0, 0, 0.095);
    color: black;
  }
}
</style>
