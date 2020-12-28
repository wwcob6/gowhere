<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://www.ie.zjut.edu.cn/xxgcxy//upload/image/2017/1214/1513218919825008358.jpg">
      <div class="banner-info">
        <div class="banner-titile">
          实验一
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe61a;</span>
          39
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))
    .banner-titile
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0,0,0,.8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
