<template>
  <div class="header">
      <div class="time">
          <span class="day">{{time.getDate()}}</span>
          <span class="week">{{aweek[time.getDay()]}}</span>
          <span class="year">{{month[time.getMonth()]}}{{time.getFullYear()}}</span>
      </div>
      <v-weather :arr=arr></v-weather>
  </div>
</template>

<script type="ecmascript-6">
import weather from 'components/todo/header/weather'
import Weather from 'components/todo/header/getWeather'

export default {
  created () {
    this.time = new Date()
    this.aweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    this.month = ['January', 'February', 'March', 'April ', 'May', 'June', 'Jul', 'August', 'September', 'October', 'November ', 'December']
    let city = typeof remote_ip_info !== 'undefined' ? remote_ip_info.city : '深圳'
    let self = this
    Weather.getJson('http://wthrcdn.etouch.cn/weather_mini?city='+city)
    .then((json) => {
      self.arr = {
        weat:json.data.forecast[0].type,
        temp:json.data.wendu,
        city:city
      }
    })
  },
  data () {
    return {
      remoteIp: {'ret': 1},
      arr: {
        city: '',
        weat:"晴",
        temp:0
      }
    }
  },
  components:{
    'v-weather': weather
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position relative
    overflow hidden
    color #fff
    height 100px
    width 100%
    .time
      float left
      width 50%
      margin-top 20px
      margin-left 20px
      & > span
        display block
        text-align left
      .day
        float left 
        font-size 4em
        margin-right 20px
        margin-top -5px
      .week
        font-size 1.3em
        font-weight 700
        margin-bottom 10px
</style>
