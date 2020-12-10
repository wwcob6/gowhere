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
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNotice,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
