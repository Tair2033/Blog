<template>
  <div>
    <div class="notif notif__danger" v-if="notifType === 'danger'">
      <h3>
        {{ text }}
      </h3>
    </div>
    <div class="notif notif__success active" v-if="notifType === 'success'">
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
      return store.getters.getNotifType
    }
  }
}

</script>

<style lang='scss'>
.notif {
  z-index: 20;
  transition: top, right 0.5s;
  user-select: none;
  cursor: default;
  position: fixed;
  top: 20px;
  right: 30px;
  min-width: 100px;
  max-height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 40px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notif__danger {
  background-color: rgba(249, 32, 32, 0.501);
}

.notif__success {
  background-color: rgba(56, 207, 56, 0.533);
}
</style>
