<template>
  <div class="header">
      <div class="time">
          <span class="day">{{time.getDate()}}</span>
          <span class="week">{{aweek[time.getDay()]}}</span>
          <span class="year">{{month[time.getMonth()]}}{{time.getFullYear()}}</span>
      </div>
  </div>
</template>

<script type="ecmascript-6">
export default {
  created () {
    this.time = new Date()
    this.aweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    this.month = ['January', 'February', 'March', 'April ', 'May', 'June', 'Jul', 'August', 'September', 'October', 'November ', 'December']
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
