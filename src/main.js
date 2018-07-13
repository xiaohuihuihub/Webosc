import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from './store/index.js';
import i18n from './i18n/i18n';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import 'bootstrap'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
})
