<template>
  <div class="kline">
    <el-container>
      <el-main>
         <el-row :gutter="24">
          <el-col :span="2" style="min-height: 1px"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple logo">
              <span class="easy">
                <router-link :to="{path: '/'}">
                  <img src="../../assets/image/logo.png" alt="">
                </router-link>
                <router-link :to="{path: '/'}">
                  East
                </router-link>
              </span>
              <span class="mask">
                 <span style="float: left">市场: </span>
                <ul class="item" >
                  <span> {{this.item}} <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i></span>
                  <ul style="display: none">
                      <li>ETC/USDT</li>
                      <li>BTC/USDT</li>
                  </ul>
                </ul>
              </span>
              <span class="h-price h">
                价格:
                <span>{{Number(lastPrice).toFixed(4)}} USDT </span>
              </span>
              <span class="h-increase h">
                涨幅:
                <span>{{rate}}</span>
              </span>
              <span class="h-high h">
                24h最高价:
                <span> {{Number(highPrice).toFixed(3)}}</span>
              </span>
              <span class="h-low h">
                24h最低价:
                <span> {{Number(lowPrice).toFixed(3)}}</span>
              </span>
              <span class="h-all h">
                总量:
                <span>{{Number(Volume).toFixed(2)}}</span>
              </span>
              <span @click="show = !show" class="own">
                 18516283230 <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <ul v-if="show" id="myPanel">
                <li>
                  <router-link  :to="{path: '/Property'}">
                    资产管理
                  </router-link>
                </li>
                <li>
                  <router-link  :to="{path: '/Property'}">
                    退出登录
                  </router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="2" style="min-height: 1px"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
    <!--<div class="title" >-->
      <!--<div class="logo">-->
        <!--<span class="easy">-->
          <!--<router-link :to="{path: '/'}">-->
            <!--<img src="../assets/image/logo.png" alt="">-->
          <!--</router-link>-->
          <!--<router-link :to="{path: '/'}">-->
            <!--East-->
          <!--</router-link>-->
        <!--</span>-->
        <!--<span class="mask" style="padding-left: 20px;color: #838EA1;width: 250px">-->
           <!--<span style="float: left">市场: </span>-->
          <!--<ul class="item" >-->
            <!--<span> ETH/USDT <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i></span>-->
            <!--<ul style="display: none">-->
                <!--<li>ETC/USDT</li>-->
                <!--<li>BTC/USDT</li>-->
            <!--</ul>-->
          <!--</ul>-->
        <!--</span>-->
        <!--<span class="h-price h">-->
          <!--价格:-->
          <!--<span>{{Number(lastPrice).toFixed(4)}} USDT </span>-->
        <!--</span>-->
        <!--<span class="h-increase h">-->
          <!--涨幅:-->
          <!--<span>{{rate}}</span>-->
        <!--</span>-->
        <!--<span class="h-high h">-->
          <!--24h最高价:-->
          <!--<span> {{Number(highPrice).toFixed(3)}}</span>-->
        <!--</span>-->
        <!--<span class="h-low h">-->
          <!--24h最低价:-->
          <!--<span> {{Number(lowPrice).toFixed(3)}}</span>-->
        <!--</span>-->
        <!--<span class="h-all h">-->
          <!--总量:-->
          <!--<span>{{Number(Volume).toFixed(2)}}</span>-->
        <!--</span>-->
        <!--<span @click="show = !show" class="own">-->
           <!--18516283230 <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
        <!--<ul v-if="show" id="myPanel">-->
          <!--<li>-->
            <!--<router-link  :to="{path: '/Property'}">-->
              <!--资产管理-->
            <!--</router-link>-->
          <!--</li>-->
          <!--<li>-->
            <!--<router-link  :to="{path: '/Property'}">-->
              <!--退出登录-->
            <!--</router-link>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <div style="width:100%;height: calc(100vh - 88px);">
      <div  id="chart" style="width: 60%;height:100%;float: left" >
       <ul class="limit">
         <li v-for="(item,index) in this.time" :key="item" @click="addClass(index)" :class="{active:index == Active}">{{item}}</li>
        </ul>
        <div class="box" style="width:100%;height: calc(100vh - 118px);overflow: hidden">
            <div id="con" class="con" style="width:100%;height: 100%"></div>
        </div>
      </div>
      <div style="width: 40%;height:100%;float: left;border-left: 2px solid #101C24;box-sizing: border-box">
          <div class="aside">
             <div class="history">
                <div class="header">
                  <span class="active">
                    交易历史
                  </span>
                  <span>

                  </span>
                  <span>

                  </span>
                </div>
                <ul>
                <li class="tab-pane">
                    <span>价格</span>
                    <span>数量</span>
                    <span>时间</span>
                </li>
                 <li class="active">
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li class="active">
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li class="active">
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
               <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li class="active">
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li class="active">
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
               <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                <li>
                    <span>6.5678</span>
                    <span>100.64</span>
                    <span>15:39:41</span>
                 </li>
                </ul>
      </div>
             <div class="trade">
                <div class="header">
                   <span class="active">限价</span>
                    <span>市价</span>
                </div>
                <div class="limits">
                  <div class="buy">
                    <h5>
                      USDT资产:  <span> 0.00</span>
                    </h5>
                    <form action="">
                      <div class="input">
                        <label for="">价格</label>
                        <input type="text" placeholder="价格">
                        <span>USDT</span>
                      </div>
                      <div class="input">
                        <label for="">数量</label>
                        <input type="text" placeholder="数量">
                        <SPAN>ETH</SPAN>
                      </div>
                      <div class="btn">
                        <button>25%</button>
                        <button>50%</button>
                        <button>75%</button>
                        <button>100%</button>
                      </div>
                      <p>
                        Total USDT
                      </p>
                      <input type="submit" value="买入 ETH">
                    </form>
                  </div>
                  <!--<div class="buy sale">-->
                    <!--<h5>-->
                      <!--USDT资产:  <span> 0.00</span>-->
                    <!--</h5>-->
                    <!--<form action="">-->
                      <!--<div class="input">-->
                        <!--<label for="">价格</label>-->
                        <!--<input type="text" placeholder="价格">-->
                        <!--<span>USDT</span>-->
                      <!--</div>-->
                      <!--<div class="input">-->
                        <!--<label for="">数量</label>-->
                        <!--<input type="text" placeholder="数量">-->
                        <!--<SPAN>ETH</SPAN>-->
                      <!--</div>-->
                      <!--<div class="btn">-->
                        <!--<button>25%</button>-->
                        <!--<button>50%</button>-->
                        <!--<button>75%</button>-->
                        <!--<button>100%</button>-->
                      <!--</div>-->
                      <!--<p>-->
                        <!--Total USDT-->
                      <!--</p>-->
                      <!--<input type="submit" value="卖出 ETH">-->
                    <!--</form>-->
                  <!--</div>-->
                </div>
             </div>
          </div>
          <div class="price">
              <div class="header">
                <span class="active">
                  <img src="../../assets/image/priceAll.png" alt="">
                </span>
                <span>
                  <img src="../../assets/image/ask.png" alt="">
                </span>
                <span>
                  <img src="../../assets/image/bid.png" alt="">
                </span>
                <span>
                </span>
              </div>
              <ul class="detail-header">
                <li>
                  <span>价格(USDT)</span>
                  <span>数量(BTC)</span>
                </li>
              </ul>
            <div class="scroll">
              <ul class="asks">
                <li v-for="(item,index) in asks">
                  <span>{{Number(item[0]).toFixed(4)}}</span>
                  <span>{{Number(item[1]).toFixed(3)}}</span>
                </li>
              </ul>
              <ul class="current">
                <li>
                  <span>{{Number(lastPrice).toFixed(4)}}</span>
                  <span></span>
                </li>
              </ul>
              <ul class="bids">
             <li v-for="(item,index) in bids">
                  <span>{{Number(item[0]).toFixed(4)}}</span>
                  <span>{{Number(item[1]).toFixed(3)}}</span>
                </li>
            </ul>
            </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueScrollbar from 'vue2-scrollbar'
import HeaderComponent from '../../components/Header'
import HighchartsComponent from '../../components/HighCharts.vue'
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import {getKline} from '../../api/api.js'
require("vue2-scrollbar/dist/style/vue2-scrollbar.css")
// import '../api/websocket.js'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
export default{
  name: "kLine",
  data() {
    let num = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('数量不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('格式错误'));
        } else {
          callback();
        }
      }, 1000);
    };
    let price = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('价格不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('格式错误'));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm2: {
        num: '',
        price: '',
      },
      rules2: {
        num: [
            { validator: num, trigger: 'blur' }
        ],
        price: [
            { validator: price, trigger: 'blur' }
        ]
      },
      time: ["1min", "3min", "15min", "30min", "1hour", "2hour", "4hour", "6hour", "1day", "1week"],
      Active: 0,
      stockChart: null,
      type: 'columnrange',
      chart: null,
      options: {
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Temperature'
          },
          lineWidth: 1,
          lineColor: '#F33',
          id: 'temperature-axis'
        },
        series: [{
          name: 'Temperature',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          color: '#F33'
        },
        {
          name: 'MA30',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          color: '#F33'
        }]
      },
      styles: {
        width: 600,
        height: 1000
      },
      data: [],
      crrentData: [],
      asks: [],
      bids: [],
      lastPrice: "",
      highPrice: "",
      lowPrice: "",
      Volume: "",
      rate: "",
      parms: "",
      show: false,
      item: ""
    }
  },
  components: {
    HighchartsComponent, HeaderComponent, VueScrollbar
  },
  mounted() {
    this.item = this.$route.query.count
    console.log(this.item)
    console.log(this.$route.query)
    this.websocket()
    this.kLine("1min", 0)
    let that = this
    let ws = new WebSocket('ws://192.168.3.79:7000/websocket')
    ws.onopen = () => {
      // Web Socket 已连接上，使用 send() 方法发送数据
      let parms = 'eth_usdt'
      let channel2 = 'ok_sub_spot_' + parms + '_kline_' + parms
      let param2 = JSON.stringify({'event': 'addChannel', 'channel': channel2})
      ws.send(param2);
      console.log('数据发送中...')
    }
    ws.onmessage = (evt) => {
      let data = JSON.parse(evt.data)[0]['data']
      let date = data["timestamp"]
      let open = data["open"]
      let high = data["high"]
      let low = data["low"]
      let close = data["close"]
      let volume = data["volume"]
      let current = [date, open, high, low, close, volume]
      that.crrentData = current
      //把当前最新K线数据加载进来
      let length = that.data.length - 1;
      let time = parseFloat(that.data[length][0]);
      let crrentTime = that.crrentData[0];
      if(that.crrentData[1] != 0 || that.crrentData[2] != 0 || that.crrentData[3] != 0 || that.crrentData[4] != 0) {
        if(time < crrentTime) {
          // that.data.push(that.crrentData);
          that.stockChart.series[0].addPoint([date, open, high, low, close], true, true)
          that.stockChart.series[1].addPoint([date, volume])
        }else if(time == crrentTime) {
          that.data[length] = that.crrentData;
        }
      }
    }
    // this.$nextTick(function () {
    //   this.$on("aevent", (val) => { //监听事件aevent，回调函数要使用箭头函数;
    //     console.log(val);//打印结果：我是a组件的数据
    //   // this.msg = val;
    //   })
    // })
  },
  methods: {
    websocket() {
      let ws = new WebSocket('ws://192.168.3.79:7000/websocket')
      ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        let parms = 'eth_usdt'
        let channel = 'ok_sub_spot_' + parms + '_ticker'
        // let channel2 = 'ok_sub_spot_' + parms + '_kline'
        let param1 = JSON.stringify({'event': 'addChannel', 'channel': channel})
        // let param2 = JSON.stringify({'event': 'addChannel', 'channel': channel2})
        // kline_obj = re.compile(r'ok_sub_spot_(\S+)_kline_(\S+)')
        ws.send(param1);
        // ws.send(param2);
        console.log('数据发送中...')
      }
      ws.onmessage = (evt) => {
        if(evt.data) {
          this.asks = []
          let data = JSON.parse(evt.data)
          let result = data[0].data
          let asks = result.asks
          this.lastPrice = result.lastPrice
          this.highPrice = result.highPrice
          this.lowPrice = result.lowPrice
          this.Volume = Number(result.volume).toFixed(2)
          this.asks = asks
          this.rate = (result.rate * 100).toFixed(2) + "%"
          this.bids = result.bids
          if(result.bids) {
            let bids = result.bids
            this.bids = bids
          }
        }
      }
    },
    kLine(type, index) {
      Highcharts.setOptions({
        lang: {
          rangeSelectorZoom: '',
        }
      });
      let para = {
        symbol: 'btc_usdt',
        type: type
      };
      function GetAvgData(curIndex, interval, data) {
        var avgData = 0;
        var reallyCount = 0;
        for (var i = curIndex; i >= 0 && (curIndex - i) < interval; i--) {
          avgData += parseFloat(data[i][4]); //收盘价数据

          reallyCount++;
        }
        //取平均收盘价
        avgData = Number((avgData / reallyCount).toFixed(2));
        return avgData;
      }
      function GetSeriesDataByDateRange(interval, data, beforePointLength) {
        var seriesData = [];

        for (var i = beforePointLength; i < data.length; i++) {
          seriesData.push([data[i][0], GetAvgData(i, interval, data)]);
        }
        return seriesData;
      }
      //修改colum条的颜色（重写了源码方法）
      let originalDrawPoints = Highcharts.seriesTypes.column.prototype.drawPoints;
      Highcharts.seriesTypes.column.prototype.drawPoints = function () {
        var series = this
        var chart = this.chart
        var points = series.points
        var i = points.length;
        while (i--) {
          var candlePoint = chart.series[0].points[i];
          if(candlePoint.open != undefined && candlePoint.close != undefined) {  //如果是K线图 改变矩形条颜色，否则不变
            var color = (candlePoint.open < candlePoint.close) ? '#B33120' : '#17A245';   // todo 空心
            points[i].color = color
          }
        }
        originalDrawPoints.call(this);
      }
      getKline(para).then((res) => {
        let data = JSON.parse(res.data)
        this.data = data
        let ohlc = []
        let volume = []
        let dataLength = data.length
        let groupingUnits = [[
          'millisecond', // unit name
          [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
        ], [
          'second',
          [1, 2, 5, 10, 15, 30]
        ], [
          'minute',
          [1, 2, 5, 10, 15, 30]
        ], [
          'hour',
          [1, 2, 3, 4, 6, 8, 12]
        ], [
          'day',
          [1]
        ], [
          'week',
          [1]
        ], [
          'month',
          [1, 3, 6]
        ], [
          'year',
          null
        ]]
        for (var i = 0; i < dataLength; i += 1) {
          ohlc.push([
            this.data[i][0], // the date
            parseFloat(this.data[i][1]), // open
            parseFloat(this.data[i][2]), // high
            parseFloat(this.data[i][3]), // low
            parseFloat(this.data[i][4]) // close
          ]);
          volume.push([
            this.data[i][0], // the date
            parseFloat(this.data[i][5]) // the volume
          ]);
        }
        // create the chart
        this.stockChart = new Highcharts.StockChart('con', {
          rangeSelector: {
            buttons: [{
              type: 'hour',
              count: 3,
            }, {
              type: 'hour',
              count: 7,
            }, {
              type: 'hour',
              count: 10,
            }, {
              type: 'hour',
              count: 16,
            }, {
              type: 'hour',
              count: 30,
            }, {
              type: 'day',
              count: 4,
            }, {
              type: 'day',
              count: 12,
            }, {
              type: 'day',
              count: 30,
            }, {
              type: 'month',
              count: 2,
            }, {
              type: 'month',
              count: 3,
            }, {
              type: 'month',
              count: 8,
            }, {
              type: 'all',
              text: 'All'
            }],
            selected: index,
            buttonTheme: {
              display: 'none' // 不显示按钮
            },
            inputDateFormat: '%Y-%m-%d',
            inputEnabled: false //  不显示日期输入框
          },
          title: {
            text: ''
          },
          chart: {
            backgroundColor: '#1F2B34',
            type: 'line'
          },
          //去除水印
          credits: {
            enabled: false
          },
          //数据提示框
          tooltip: {
            positioner: function () {
              return {x: 90, y: 30};
            },
            crosshairs: [true, true],
            shared: true, //是否共享提示，也就是X一样的所有点都显示出来
            useHTML: true, //是否使用HTML编辑提示信息
            // headerFormat: '<small>{point.key}</small><table>',
            // shadow: true,
            // borderWidth: 1,
            shape: 'square',
            // borderColor: '#006cee',
            // backgroundColor: '#f9f9f9'
          },
          xAxis: {
            type: 'datetime',
            lineColor: '#FFFFFF',
            tickLength: 0, //X轴下标长度
            // 如果X轴刻度是日期或时间，该配置是格式化日期及时间显示格式
            dateTimeLabelFormats: {
              millisecond: '%H:%M:%S.%L',
              second: '%H:%M:%S',
              minute: '%H:%M',
              hour: '%H:%M',
              day: '%m-%d',
              week: '%m-%d',
              month: '%y-%m',
              year: '%Y'

            },
            visible: true,
            crosshairs: [true, true],
          },
          yAxis: [{
            labels: {
              align: 'right',
              x: 0,
            },
            title: {
              text: ''
            },
            // minTickInterval:5,
            // tickInterval:50,//主要表示间隔多少个刻度值显示下一个刻度；允许为正整数；
            // tickPixelInterval: 72 ,
            height: '70%',
            lineWidth: 1,
            zIndex: 3,
            visible: true,
            gridLineWidth: 0, //横向网格线宽度
            // tooltip: {
            //   shared: false,
            //   crosshairs: true,
            //   plotOptions: {
            //     spline: {
            //       marker: {
            //         radius: 4,
            //         lineColor: '#666666',
            //         lineWidth: 1
            //       }
            //     }
            //   }
            // },
            crosshairs: [true, true]
          }, {
            labels: {
              align: 'right',
              x: -3
            },
            title: {
              text: ''
            },
            top: '71%',
            height: '29%',
            offset: 0,
            lineWidth: 1,
            gridLineColor: '#346691',
            gridLineWidth: 0, //横向网格线宽度
            visible: true,
          }],
          navigator: {
            enabled: false  //不显示下方刻度游标尺
          },
          scrollbar: {
            enabled: false//不显示下方刻度滚动条
          },
          // plotOptions: {
          //   series: {
          //     colorByPoint: true
          //   }
          // },
          series: [{
            type: 'candlestick',
            name: 'AAPL',
            color: 'transparent', // 空心
            lineColor: '#17A245',
            upColor: '#B33120',
            upLineColor: '#B33120',
            tooltip: {},
            data: ohlc,
            dataGrouping: {
              units: groupingUnits
            },
          }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            turboThreshold: 0,
            yAxis: 1,
            dataGrouping: {
              units: groupingUnits
            }
          }, {
            type: 'spline',
            name: 'MA30',
            data: GetSeriesDataByDateRange(20, data, 0),
            threshold: null,
            lineWidth: 1,
            dataGrouping: {
              enabled: false
            }

          }, {
            type: 'spline',
            name: 'MA60',
            data: GetSeriesDataByDateRange(60, data, 0),
            threshold: null,
            lineWidth: 1,
            dataGrouping: {
              enabled: false
            }
          }]
        });
      }).catch((err) => {
        console.log(err);
      });
    },
    addClass(index) {
      this.Active = index
      var type = this.time[index]
      this.kLine(type, index)
    }
  }
}
</script>
<style scoped>
.logo{
  width:100%;
  color: #838EA1;
  display:flex;
  justify-content:space-around;
  border-bottom: 2px solid #101C24;
  position: relative;
  line-height: 36px;
}
.logo .h{
  padding-right: 20px;
}
.logo .easy{
  color:#fff;
  font-size: 14px;
  float: left;
}
.el-main{
  overflow: unset;
}
.logo .easy>a{
  padding-left: 10px;
  float: left;
  color: #838EA1;
}
.logo .easy>a>img{
  width:30px;
  margin-top: 16px;
}
.logo .mask{
  float: left;
}
.logo>span{
  line-height: 64px;
  float: left;
}
.own{
  min-width: 144px;

  display: inline-block;
  float: right;
  text-align: center;
  cursor: pointer;
}
#myPanel{
    width: 144px;
    position: absolute;
    right: 0;
    top: 45px;
    padding: 0;
    z-index: 999;
    background: rgb(50, 56, 69);
    border-radius: 5px;
  text-align: center;

}
.item{
  padding: 0;
  margin: 0;
  padding-left: 5px;
  float: left;
}
#myPanel>li{
  width: 120px;
  line-height: 40px;
  display: block;
  color: #fff;
  height: 40px;
}
#myPanel>li>a {
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: #fff;
  display: block;
}
.kline{
  background: #1F2B34;
  height: 100%;
  width: 100%;
  float: left;

}
ul,li{
 list-style: none;
}
.limit{
  width: 100%;
  height: 30px;
  line-height: 30px;
  /*background: #232323;*/
  /*border-bottom: 1px solid #666666;*/
  margin: 0;
}
.limit>li{
  float: left;
  margin-right: 20px;
  cursor: pointer;
  color: #698395;
}
.limit>li.active{
  color:#FF514F;
}
.box{
  background: #1F2B34;
}
  .aside{
    width: 50%;
    height: 100%;
    float: left;
  }
  .history{
    width: 100%;
    height: 50%;
    float: left;
    overflow: hidden;
    /*display: flex;*/
    /*justify-content:sp ;*/
  }
   .price{
     width: 50%;
      height: 100%;
      float: left;
   }
   ::-webkit-scrollbar
    {
        width: 6px;
        height: 6px;
        background-color: #1C283E;
    }
   ::-webkit-scrollbar-track
{
    /*-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);*/
    /*border-radius: 10px;*/
    /*background-color: #495365;*/
}
   ::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #495365;
}
   .price .scroll{
     width: 100%;
     height: 88%;
     overflow-y:scroll ;
   }
  .price>ul,.history>ul{
    width: 100%;
    overflow: hidden;
    line-height: 16px;
    color: #fff;

  }
  .price .detail-header{
    margin-top: 16px;
    color: #7291A1;
  }
  .price .current>li>span{
    font-size: 15px;
     color:#FF514F;
  }
  .price>ul>li{
    /*width: 100%;*/
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
   .price .asks>li,.price .bids>li,.price .detail-header>li{
     font-size: 13px;
     display: flex;
     justify-content: space-between;
     padding: 0 5px;
     color: rgba(255,255,255,0.5);
   }
  .price .asks>li>span:first-child{
      color:#FF5353 ;
    }
  .price .bids>li>span:first-child{
      color:#00B07C ;
    }
  /*The Wrapper*/
  .my-scrollbar{
    width: 35%;
    min-width: 300px;
    max-height: 450px;
  }

  /*The Content*/
  .scroll-me{
    min-width: 750px;
  }
  .history>ul>li{
    width: 100%;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .history>ul>li>span:first-child{
      color: #00B07C;
    }
    .history>ul>li.active>span:first-child{
      color: #FF5353;
    }
    .history>ul>li:first-child>span{
       color:#7291A1 ;
    }
  .history>ul>li>span{
    width: 33.33%;
  }
 .kline .history>ul>li:first-child{
   font-size: 13px;
   margin-top: 16px;
   margin-bottom: 10px;
 }
  .buy,.sale{
    width:100%;
    /*height: 100%;*/
    float: left;
    padding: 0 15px;
    overflow: hidden;
    /*margin: 0 10px;*/
  }
  .detail-header{
    padding: 0 5px;
  }
  .buy>h5{
    font-weight: bolder;
     color: rgb(114, 145, 161);
  }
  .buy>h5>span{
    color: #fff;
  }
  .buy .input{
    margin-top: 10px;
    float: left;
    width: 100%;
    position: relative;
  }
  .buy .input>span{
    font-size: 12px;
    color: rgb(114, 145, 161);
    position: absolute;
    /*top: 0;*/
    bottom: 5px;
    right: 10px;
    margin: auto;
  }
  .buy .input>label{
    margin: 0;
  }
  .buy p{
    line-height: 30px;
    font-size: 12px;
     color: rgb(114, 145, 161);
  }
  .buy .input input[type='text']{
    border: none;
    width: 100%;
    font-size: 14px;
    line-height: 1.75;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    color: white;
    background: transparent;
    outline: none;
    border-width: 0px 0px 3px;
    border-image: initial;
    border-bottom: 2px solid rgb(65, 94, 109);
    float: left;
  }
  .buy label{
    width: 100%;
    line-height: 20px;
    font-size: 12px;
    display: block;
    color: rgb(114, 145, 161);
  }
  .btn{
    width: 100%;
        display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-around;
    color: rgb(114, 145, 161);
    padding: 0;
    margin: 10px 0;
    float: left;
  }
  .btn>button{
    width: 23%;
    text-align: center;
    /*color: #fff;*/
    background-color: rgba(255, 255, 255, 0.1);
    height: 30px;
    line-height:30px;
    font-size: 12px;
    flex: 1 1 auto;
    margin: 2px;
    transition: background-color 0.2s ease-in-out;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
  }
  .buy input[type='submit']{
    transform: translateZ(0px);
    will-change: transform;
    display: block;
    width: 100%;
    color: white;
    font-weight: bold;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    background: rgb(6, 176, 124);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    transition: all 0.3s ease-in-out;
  }
  .buy.sale input[type='submit']{
    background: #FF5353;
  }
  .price .header{
    width: 100%;
    height: 32px;
    line-height: 32px;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-box-pack: start;
    /*justify-content: flex-start;*/
    justify-content: space-around;
    background: rgb(47, 61, 69);
  }
  .price .header>span{
    display: block;
    width: 25%;
    text-align: center;


  }
  .price .header>span.active{
    border-top: 2px solid #06B07C;
    background:#1F2B34;
  }
   .history .header{
      width: 100%;
      height: 32px;
      line-height: 32px;
      display: flex;
      -webkit-box-flex: 0;
      -webkit-box-pack: start;
      /*justify-content: flex-start;*/
      justify-content: space-around;
      background: rgb(47, 61, 69);
   }
  .history .header>span{
    display: block;
    width: 33.33%;
    text-align: center;
    color: rgb(114, 145, 161);
    font-size: 12px;
    font-weight: bold;
  }
  .history .header>span.active{
    border-top: 2px solid #06B07C;
    background:#1F2B34;
  }
   .trade .header{
    float: left;
    width: 100%;
    display: flex;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 32px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 0px;
    margin: 0px;
    background: rgb(47, 61, 69);
  }
  .trade .header>span {
    color: rgb(114, 145, 161);
    list-style-type: none;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    padding-left: 30px;
    padding-right: 30px;
    text-transform: uppercase;
    border-top: 3px solid transparent;
    transition: all 0.3s ease-in-out;
}
  .trade .header>span.active{
    border-top: 2px solid #06B07C;
    background:#1F2B34;
  }
  .trade .limits{
    overflow:hidden ;
    width: 100%;
  }
  .el-main{
    padding: 0;
  }
</style>
