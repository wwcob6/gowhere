<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-notice></home-notice>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeNotice from '@/components/home/Notice'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNotice
  }
}
</script>
