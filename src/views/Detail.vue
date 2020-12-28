<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from '@/components/detail/Banner'
import Header from '@/components/detail/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner: Banner,
    DetailHeader: Header
  }
}
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
