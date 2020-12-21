<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick(item)"
        @touchstart="handleTouchStart"
        @handleTouchMove="handleTouchMove"
        @handleTouchEnd="handleTouchEnd">{{ item }}</li>
  </ul>
</template>

<script>
import { EventBus } from '../../../bus/event-bus'

export default {
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  name: 'CityAlphabet',
  methods: {
    handleLetterClick: function (e) {
      console.log(e)
      EventBus.$emit('alphabetMsg', e)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        const startY = this.$refs['通'][0].offsetTop
        console.log(startY)
        const touchY = e.touches[0].clientY
        console.log(touchY)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
