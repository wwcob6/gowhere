<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入实验主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.$store.state.classNumber }}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    className: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/varibles.styl"
  .header
    display : flex
    line-height: $headerHeight
    background: $bgColor;
    color #fff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align center
        font-size 0.4rem
        margin-left 0.1rem
    .header-right
      width : 1.8rem
      float : right
      text-align center
      color #ffffff
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
