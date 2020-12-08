<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display : flex
    line-height: .86rem
    background: #00bcd4;
    color #fff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align center
        font-size 0.4rem
    .header-right
      width : 1.24rem
      float : right
      text-align center
    .header-input
      flex : 1
      background: #fff
      line-height .64rem
      border-radius .1rem
      height .64rem
      margin 0.12rem 0 0 0.2rem
      color #ccc
      .search-icon
        padding-left .1rem
</style>
