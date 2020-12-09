<template>
  <div class="icons">
    <swiper ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="iconfont-content" :src= "item.imgUrl" alt="">
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{ id: '0001', imgUrl: require('../../assets/home-icon.png'), desc: '主页' },
        { id: '0002', imgUrl: require('../../assets/text-icon.png'), desc: '实验内容' },
        { id: '0003', imgUrl: require('../../assets/score-icon.png'), desc: '实验成绩' },
        { id: '0004', imgUrl: require('../../assets/found-icon.png'), desc: '发现' },
        { id: '0005', imgUrl: require('../../assets/notify-icon.png'), desc: '发布通知' },
        { id: '0006', imgUrl: require('../../assets/my-setting.png'), desc: '我的' }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/styles/varibles.styl"
@import "../../assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 25%
  .icon
    height 0
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      box-sizing border-box
      padding .1rem
      top 0
      left 0
      right 0
      bottom .44rem
      .iconfont-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      left 0
      right 0
      bottom 0
      line-height .44rem
      height .44rem
      color $textColor
      text-align center
      ellipse()
</style>
