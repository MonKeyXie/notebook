<template>
<div class="weather">
      <div class="temp">{{`${arr.city} ${arr.temp} °C ${arr.weat}`}}</div>
</div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Object
    }
  }
  // data () {
  //   city: remote_ip_info.city
  // }
};
</script>

<style>
.weather {
  margin: 0 auto;
}
.svg {
  float: right;
  width: 60px;
  margin: 0 auto;
  padding: 5px 10px 0 20px;
}
.temp {
  font-size: 13px;
  float: right;
  margin: 10px, 5px;
  padding-top: 0px;
  padding-right: 10px;
}
</style>