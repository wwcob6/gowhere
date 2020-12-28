<template>
  <div>
    <div class="header-abs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </div>
    <div class="header-fixed"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style scoped lang="stylus">
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
</style>
