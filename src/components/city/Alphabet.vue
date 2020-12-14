<template>
  <ul class="list">
    <li class="item" v-for="(item, index) of cities" :key="index">{{ index }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  name: 'CityAlphabet'
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
