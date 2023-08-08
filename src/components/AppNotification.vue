<template>
  <div>
    <div class="notif" v-if="notifType">
      <h3>
        {{ text }}
      </h3>
    </div>
  </div>
</template>

<script lang='ts'>
import store from '@/store'

export default {
  name: 'AppNotification',
  data: () => {
    return {}
  },
  props: {
    text: String
  },
  computed: {
    notifType(): string {
      return store.getters.getNotificationStatus
    }
  }
}

</script>

<style lang='scss' scoped>
.notif {
  background-color: rgba(0, 0, 0, 0.644);
  z-index: 20;
  color: white;
  transition: top, right 0.5s;
  user-select: none;
  cursor: default;
  position: fixed;
  top: 20px;
  right: 30px;
  min-width: 100px;
  max-height: 40px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 30px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -4px 7px 29px 3px rgba(34, 60, 80, 0.322);
}
</style>
