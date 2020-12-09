<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-notice></home-notice>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeNotice from '@/components/home/Notice'
import HomeRecommend from '@/components/home/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNotice,
    HomeRecommend
  }
}
</script>
