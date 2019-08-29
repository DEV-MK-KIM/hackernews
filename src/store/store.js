import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from "../api/index";
import { fetchJobsList } from "../api/index";
import { fetchAskList } from "../api/index";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],

  },
  mutations: {
    SET_NEWS(state, news){
      state.news= news
    },
    SET_JOBS(state, jobs){
      state.jobs= jobs
    },
    SET_ASK(state, ask){
      state.ask= ask
    },
    


  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()
      .then(res=>{
        context.commit('SET_NEWS', res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    FETCH_JOBS({commit}){
      fetchJobsList()
      .then(({data}) => {
        commit('SET_JOBS', data)
      })
      .catch(err => {
        console.log(err.message);
      });
    },
    FETCH_ASK({commit}){
      fetchAskList()
      .then(({data}) => {
        commit('SET_ASK', data)
      })
      .catch(err => {
        console.log(err.message);
      });
    }


  }
})
