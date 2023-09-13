<template>
  <div>
    <div
      v-if="notifType"
      class="notif"
    >
      <h3>
        {{ text }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'

export default {
  name: 'AppNotification',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {}
  },
  computed: {
    notifType(): string {
      return store.getters.getNotificationStatus
    }
  }
}
</script>

<style lang="scss" scoped>
.notif {
  background-color: rgb(8, 10, 47);
  z-index: 20;
  color: white;
  animation-name: activeNotif;
  animation-duration: 0.3s;
  user-select: none;
  cursor: default;
  position: fixed;
  bottom: 20px;
  right: 30px;
  min-width: 100px;
  max-height: 40px;
  border-radius: 10px;
  font-size: calc(1vw);
  font-weight: 500;
  padding: 30px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -4px 7px 29px 3px rgba(34, 60, 80, 0.322);
}

@keyframes activeNotif {
  0% {
    right: -390px;
  }

  100% {
    // top: -100px;
    right: 30px;
  }
}
</style>
