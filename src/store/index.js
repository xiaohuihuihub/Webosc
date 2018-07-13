 // # 我们组装模块并导出 store 的地方
import vue from 'vue';
import vuex from 'vuex';
// import state from './state.js';
// import * as getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';
// import m1 from './modules/m1.js';
// import m2 from './modules/m2.js';
// import createLogger from 'vuex/dist/logger'; // 修改日志

vue.use(vuex);

// const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

export default new vuex.Store({
  state: {
    useInfo: ''
  },
  getters: {
    toFixed: state => {     //如果需要用到其他getters上的数据，接受第二个参数(state, getters) => {return getters.XXX}
      return state.count.toFixed(2)
    },
    addCount: function(state) {    //也可以返回一个函数，由调用的组件来决定输出
      return function(num) {
        return state.count + num
      }
    }
  },
  mutations: {
    setUseInfo (state, data) {
      state.useInfo = data
    },
  },
  actions: {      //actions和mutations的功能类似，其实触发的就是mutations方法，而不是直接去改变state。同时也支持异步。
    incrementAsync ({ commit }) {    //参数解构,了解一下
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
});
