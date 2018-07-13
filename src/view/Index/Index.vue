<template>
   <div class="detail">
     <header-component></header-component>
     <el-row>
       <el-col :span="24" class="banner">
       </el-col>
     </el-row>
     <el-row>
       <el-col :span="3" style="height: 1px;"></el-col>
       <el-col :span="18">
          <el-table  :data="tableData" :header-cell-class-name="headerStyle">
          <el-table-column  prop="count"  :label="$t('message.pair')">
            <template slot-scope="scope">
              <el-icon name="star-off"></el-icon>
              <span style="color:#000"> {{scope.row.count}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="price" :label="$t('message.last_price')" >
            <template slot-scope="scope">
              <span style="color:#000" >
                 <span></span>
                {{scope.row.last}}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="address" :label="$t('message.24h_change')">
            <template slot-scope="scope">
              <span  :class="scope.row.rate.indexOf('-') == -1?'addressUp':'addressDown' " > {{scope.row.rate}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="low" :label="$t('message.24h_low')">
            <template slot-scope="scope">
              <span style="color:#000"> {{scope.row.low}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="height" :label="$t('message.24h_high')">
            <template slot-scope="scope">
              <span style="color:#000"> {{scope.row.high}} </span>
            </template>
          </el-table-column>
          <el-table-column prop="volume" :label="$t('message.24h_volume')">
            <template slot-scope="scope">
              <span style="color:#000"> {{scope.row.vol}} </span>
            </template>
          </el-table-column>
         <el-table-column prop="set" :label="$t('message.operation')">
           <template slot-scope="scope">
              <!--({path: 'oldDetail', query: {id: ids}})-->
              <router-link style="color:#4f84c8" :to="{path:'/kline',query: {count: scope.row.count}}" @click.native="emitTob"> {{scope.row.set}} </router-link>
            </template>
          </el-table-column>
         </el-table>
       </el-col>
      <el-col :span="3" style="height: 1px;"></el-col>
     </el-row>
   </div>
</template>

<script>
  // import $ from 'jquery'
  import HeaderComponent from "../../components/Header"
  // import {socket} from '../api/websocket'
  // import Vue from "vue"
  // import VueWebsocket  from "vue-websocket"
  // import {websocket} from "../api/api";
  // Vue.use(VueWebsocket)
  export default {
    name: "Detail",
    data() {
      return {
        tableData: [{
          count: 'ETH_USDT',
          last: '',
          low: '',
          high: '',
          vol: '',
          set: 'k 线',
          rate: ''
        }],
        data: {
          // buy(double): 买一价
          "high": '', //最高价
          "last": '', //最新成交价
          "low": '', //最低价
          "sell": '', //卖一价
          "timestamp": '', // 时间戳
          "vol": '', //成交量(最近的24小时)
        }
      }
    },
    components: {
      HeaderComponent
    },
    methods: {
      emitTob() {
        this.$emit('aevent', 'i am vue')
      },
      headerStyle(row, rowIndex) {
        return 'table-th'
      },
      formataddress(row, column, cellValue) {
        console.log(cellValue)
      },
      websocket () {
        let ws = new WebSocket('ws://192.168.3.79:7000/websocket')
        // let ws = new WebSocket('ws://192.168.44.129:7000/websocket')
        // let ws = new WebSocket('wss://real.okex.com:10441/websocket')
        ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
          // Web Socket 已连接上，使用 send() 方法发送数据
          let parms = 'eth_usdt'
          // let parms2 = 'etc_btc'
          let channel = 'ok_sub_spot_' + parms + '_ticker'
          // let channel2 = 'ok_sub_spot_' + parms2 + '_ticker'
          let param1 = JSON.stringify({'event': 'addChannel', 'channel': channel})
          // var param1 = JSON.stringify({'event': 'addChannel', 'channel': 'ok_sub_spot_eth_usdt_ticker'})
          // var param2 = JSON.stringify({'event': 'addChannel', 'channel': channel2})
          ws.send(param1);
          // ws.send(param2);
          // ws.send("{'event':'addChannel','channel':'ok_sub_spot_LTC_btc_ticker'}");
          console.log('数据发送中...')
        }

        ws.onmessage = evt => {
          if(evt.data) {
            var data = JSON.parse(evt.data)
            console.log(data)
            console.log(data[0].channel)
            var result = data[0].data

            if(data[0].channel == "ok_sub_spot_eth_usdt_ticker") {
              this.tableData[0].high = "₮" + result.highPrice
              this.tableData[0].last = "₮" + result.lastPrice
              this.tableData[0].low = "₮" + result.lowPrice
              this.tableData[0].vol = Number(result.volume).toFixed(2)
              this.tableData[0].rate = Number(result.rate * 100).toFixed(2) + "%"
            }else{
              this.tableData[1].high = "฿" + result.highPrice
              this.tableData[1].last = "฿" + result.lastPrice
              this.tableData[1].low = "฿" + result.lowPrice
              this.tableData[1].vol = Number(result.vol).toFixed(2)
              this.tableData[1].rate = Number(result.rate).toFixed(2)
            }

            console.log('数据已接收...')
          }
        }
        ws.onclose = function () {
            // 关闭 websocket
          console.log('连接已关闭...')
        }
          // 路由跳转时结束websocket链接
        this.$router.afterEach(function () {
          ws.close()
        })
      }
    },
    mounted() {
      this.websocket()
      // console.log("3333333333333333333333333333333333")
      // var ws = socket()
      // // ws.connect()
      // console.log(ws.connect())
      // console.log("--------------------------")
      // // ws.onMessage(evt)
      // if(ws.connected){
      //   console.log(ws.data)
      //   this.data = ws.data
      // }
      // ws.subscribeSpotTicker('eth_btc')
      // ws.subscribeSpotTicker('eth_usdt')
    }
  }
</script>

<style >
.table-th{
    font-weight: 500;
    font-size: 13px;
  }
.table-td{
  color:#000
}
.el-table th > .cell span{
  color: #000;
}
.detail .addressUp{
  color:#4db872
}
.detail .addressDown{
  color:#ee6560
}
.banner{
  min-height: 350px;
  background: no-repeat 50% #242933;
  /*background-image:linear-gradient(to right, #073584, #0c2b65) ;*/
  /*background: url("../assets/image/banner.jpg") center no-repeat ;*/
  background-position: center center;
  background-size: cover;
}
</style>
