<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前班级</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.$store.state.classNumber }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">主要实验</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
          @click="handleClassClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../../bus/event-bus'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  data: function () {
    return {
      letter: '通'
    }
  },
  methods: {
    handleClassClick: function (item) {
      this.$store.dispatch('changeClass', item)
      alert('选择成功，请返回！')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    console.log(this.scroll)
  },
  updated () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    EventBus.$on('alphabetMsg', (msg) => {
      this.letter = msg
    })
  },
  watch: {
    // letter () {
    //   if (this.letter) {
    //     const element = this.$refs[this.letter][0]
    //     this.scroll.scrollToElement(element)
    //   }
    // }
    letter: function (oldValue, newValue) {
      console.log(oldValue)
      console.log(newValue)
      const element = this.$refs[newValue][0]
      console.log(element)
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/styles/varibles.styl"
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow: hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height .54rem
    background: #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        padding .1rem 0
        margin .1rem
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      color #666
      padding-left  .2rem
</style>
