import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutaions'
import actions from './actions'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},

  },
  // mutations: mutations,
  mutations, actions,

  // actions: actions,
})
