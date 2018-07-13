// # 根级别的 mutation
import * as types from './mutations-type.js'
export default {
  [types.SET_NAME](state, name) {
    state.name = name
  }
}
