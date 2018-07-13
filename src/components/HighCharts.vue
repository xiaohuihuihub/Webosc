<template>
  <div class="highcharts-container chart"></div>
</template>
<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import {chart} from 'highcharts-vue'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
export default{
  props: ['options', 'styles'],
  name: 'highcharts',
  data() {
    return{
      chart: null
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      alert(this.$el);
      this.$el.style.width = (this.styles.width || 800) + 'px'
      this.$el.style.height = (this.styles.height || 1000) + 'px'
      this.chart = new Highcharts.Chart(this.$el, this.options);
    }
  }
}
</script>
<style>
  body,html{
    width: 100%;
    height: 100%;
  }
  .highcharts-container {
    width: 800px;
    height: 100%;
  }
</style>
