<template>
  <div>
    <city-header></city-header>
    <city-search :cities="allCities"></city-search>
    <city-list :cities="allCities" :hot="hotCities"></city-list>
    <city-alphabet :cities="allCities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/components/city/cityHeader'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      allCities: { },
      hotCities: []
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.allCities = data.cities
            this.hotCities = data.hotCities
          }
        })
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
