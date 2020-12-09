<template>
  <div class="notice">
    <span class="iconfont notice-icon">&#xe6c5;</span>
    <p class="notice-word">公告：本周实验正常进行！！</p>
  </div>
</template>

<script>
export default {
  name: 'HomeNotice'
}
</script>

<style scoped lang="stylus">
  .notice
    margin .1rem 0 .1rem 0
    display flex
    .notice-icon
      padding-top .07rem
      padding-right 0.1rem
    .notice-word
      padding-top .1rem
</style>
