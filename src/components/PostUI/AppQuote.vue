<template>
  <div class="wrapper-quote">
    <div class="quote">
      &#8220;{{ item.text }}&#8221;
    </div>
    <div class="author">
      &#8212; {{ item.quoteAuthor }}
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'AppQuote',
  props: ['item']
}

</script>

<style lang='scss' scoped>
.wrapper-quote {
  padding: 20px 10px;
  border-left: 3px solid rgb(26, 17, 125);
  margin-bottom: 20px;
}

.quote {
  font-size: calc(15px + 8 * (100vw / 1280));
  font-weight: bold;
  margin-left: 15px;
  line-height: 1.7;
  color: rgb(12, 4, 94);
}

.author {
  margin-top: 25px;
  margin-left: 10px;
  font-size: calc(10px + 6 * (100vw / 1280));
}
</style>
