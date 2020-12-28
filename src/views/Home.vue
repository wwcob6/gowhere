<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-notice></home-notice>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'
import HomeNotice from '@/components/home/Notice'
import HomeRecommend from '@/components/home/Recommend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNotice,
    HomeRecommend
  },
  computed: {
    ...mapState(['classNumber'])
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      lastClass: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?classNumber=' + this.classNumber)
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastClass = this.classNumber
  },
  activated () {
    console.log('activited')
    if (this.lastClass !== this.classNumber) {
      this.getHomeInfo()
    }
  }
}
</script>
