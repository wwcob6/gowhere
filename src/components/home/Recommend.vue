<template>
  <div>
    <div class="recommend-title">主要实验</div>
    <ul v-for=" (item, index) of itemList" :key="index">
      <router-link :to="'/detail/' + item.id" class="item" tag="li">
        <img class="item-img" :src="item.imgUrl" alt=""/>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [{ id: '0001', title: '物联网实验一11111111111111111111111111111111111111111111', desc: '这是第一个实验,这是第一个实验,这是第一个实验,这是第一个实验', imgUrl: require('../../assets/text-icon.png') },
        { id: '0002', title: '物联网实验二', desc: '这是第二个实验,这是第二个实验,这是第二个实验,这是第二个实验,这是第二个实验', imgUrl: require('../../assets/text-icon.png') },
        { id: '0001', title: '物联网实验三', desc: '这是第三个实验,这是第三个实验,这是第三个实验,这是第三个实验,这是第三个实验', imgUrl: require('../../assets/text-icon.png') },
        { id: '0001', title: '物联网实验四', desc: '这是第四个实验,这是第三个实验,这是第三个实验,这是第三个实验,这是第三个实验', imgUrl: require('../../assets/text-icon.png') }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/mixins.styl"
.recommend-title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  border-bottom 1px solid #ccc
  .item-img
    widht: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .item-desc
      line-height: .4rem
      color: #ccc
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .item-btn
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
