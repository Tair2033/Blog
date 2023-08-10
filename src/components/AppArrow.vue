<template>
  <div class="arrow">
    <div class="arrow__body">
      &#8593;
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppArrow'
}

</script>

<style lang='scss' scoped>
.arrow {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: rgba(55, 55, 55, 0.562);
  color: white;
}
</style>
