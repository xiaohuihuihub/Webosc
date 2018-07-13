// # 根级别的 mutation
import * as types from './mutation-type.js';

export default {
  nameAsyn({commit}, {age, name}) {
    commit(types.SET_NAME, name);
  }
};
