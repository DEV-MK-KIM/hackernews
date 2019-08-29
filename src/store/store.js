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

  },
  getters: {
    get_news: (state)=> state.news,
    get_jobs: (state)=> state.jobs,
    get_ask: (state)=> state.ask,

  },
  // mutations: mutations,
  mutations, actions,

  // actions: actions,
})
