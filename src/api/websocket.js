class OKCoinApi {
  constructor(host, apiKey, secretKey, message) {
    // this.ws = ws
    this.host = host
    this.connected = false
    this.data = ""
    this.message = message
  };
  connect() {
    // var result;
     //  连接服务器
    this.ws = new WebSocket(this.host)
    this.ws.onopen = function (evt) {
      this.onOpen(evt)
    }.bind(this)
    this.ws.onmessage = this.message.bind(this)
    this.ws.onclose = function (evt) {
      this.onClose(evt)
    }.bind(this)
    this.ws.onerror = function (evt) {
      this.onError(evt)
    }.bind(this)
  };
  onOpen(evt) {
     // 接口打开
    console.log("open")
    this.connected = true
     // TODO: load symbol list from config file
    // this.subscribeSpotTicker("eth_btc")
    this.subscribeSpotTicker("eth_usdt")
  };
  onMessage(evt) {
     //信息推送
     // return evt.data
    return evt.data
     // console.log(data)
  };
  onClose(evt) {
     // 接口断开
    this.connected = false
    console.log(close)
  };

  onError(evt) {
     // 错误推送
    console.log(evt)
  }
  close() {
    console.log("close")
  }
   // 发送行情请求
  sendMarketDataRequest(channel) {
    if(this.connected) {
      var d = {}
      d['event'] = 'addChannel'
      d['channel'] = channel
      console.log(d)
      var payload = JSON.stringify(d)
      this.ws.send(payload)
    }
  }
   // 订阅现货普通报价
  subscribeSpotTicker(symbol) {
    if(this.connected) {
      this.sendMarketDataRequest('ok_sub_spot_' + symbol + '_ticker')
    }
  }
 }
// ws://127.0.0.1:7000/websocket
// apiKey = '7aa2f5ad-ff87-4366-a2e8-014703f84950'
// secretKey = '2CC1C9785444084F2E2130B875D9BEF4'
var host = 'ws://192.168.3.79:7000/websocket';
var apiKey = "7aa2f5ad-ff87-4366-a2e8-014703f84950"
var secretKey = "2CC1C9785444084F2E2130B875D9BEF4"
var message = function (evt) {
  console.log(evt)
}
var api = new OKCoinApi(host, apiKey, secretKey, message());
api.connect()

// api.subscribeSpotTicker("eth_usdt")
export const socket = params => {
  let ws = new WebSocket(host)
  var result = api.connect()
  ws.onmessage = params.message
  return result
  // console.log(api)
};

socket()
