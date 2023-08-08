<template>
  <div class="modal__wrapper">
    <div class="modal">
      <div class="modal__content">
        sadas
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppModal'
})

</script>

<style lang='scss' scoped>
.modal__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.443);
}

.modal {
  padding: 20px 40px;
  max-width: 400px;
  max-height: 300px;
  border-radius: 20px;
  background-color: white;
  margin-top: 190px;
  z-index: 30;
}
</style>
