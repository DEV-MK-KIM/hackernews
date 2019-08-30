// API
import { fetchUserList, fetchItemList, fetchList } from "../api/index";



export default {
    // FETCH_NEWS(context){
    //   fetchNewsList()
    //   .then(res=>{
    //     context.commit('SET_NEWS', res.data)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // },
    // FETCH_JOBS({commit}){
    //   fetchJobsList()
    //   .then(({data}) => {
    //     commit('SET_JOBS', data)
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    // },
    // FETCH_ASK({commit}){
    //   fetchAskList()
    //   .then(({data}) => {
    //     commit('SET_ASK', data)
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    // },
    FETCH_USER({commit},user){
        fetchUserList(user)
        .then(({data}) => {
            console.log(data)
          commit('SET_USER', data)
        })
        .catch(err => {
          console.log(err.message);
        });
      },
      FETCH_ITEM({commit},item){
        fetchItemList(item)
        .then(({data}) => {
            console.log(data)
          commit('SET_ITEM', data)
        })
        .catch(err => {
          console.log(err.message);
        });
      },
      FETCH_LIST({commit},name){
        // use return for promie chaning
        return fetchList(name)
        .then((res) => {
          commit('SET_LIST', res.data)
          console.log(4)
          return res;
        })
        .catch(err => {
          console.log(err.message);
        });
      },
   
}