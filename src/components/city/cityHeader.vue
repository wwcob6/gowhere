<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    班级选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
@import "../../assets/styles/varibles.styl"
  .header
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color white
    background: $bgColor;
    font-size .33rem
    position relative
    .back-icon
      top 0
      left 0
      position absolute
      text-align center
      font-size 0.4rem
      margin-left 0.1rem
      color white
</style>
