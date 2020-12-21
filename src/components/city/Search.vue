<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入专业班级或拼音"
             v-model="keyword"/>
    </div>
    <div class="search-content"
         ref="search"
          v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id"
            class="search-item border-bottom">{{item.name}}
        </li>
        <li class="search-item border-bottom"
        v-show="hasNoData">
          没有匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background: $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      padding 0 .1rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background: #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background: #fff;
</style>
