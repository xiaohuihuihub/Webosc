<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  /*margin-top: 60px;*/
}
body,html{
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
  /*overflow: hidden;*/
  }

.highcharts-spline-series>path.highcharts-tracker{
  stroke: #DED42C;
  stroke-width: 2px;
}
.highcharts-series-2.highcharts-spline-series>path.highcharts-tracker{
  stroke: #C3C3C3;
}

</style>
