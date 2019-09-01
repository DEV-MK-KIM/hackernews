// API
import { fetchUserList, fetchItemList, fetchList } from "../api/index";



export default {
    
    // FETCH_USER({commit},user){
    //     fetchUserList(user)
    //     .then(({data}) => {
    //         console.log(data)
    //       commit('SET_USER', data)
    //     })
    //     .catch(err => {
    //       console.log(err.message);
    //     });
    //   },

      async FETCH_USER(context, user){
        try{
        const response = await fetchUserList(user)
        context.commit('SET_USER', response.data)
        }
        catch(error){
          console.log(error)
        }
      },


      // FETCH_ITEM({commit},item){
      //   fetchItemList(item)
      //   .then(({data}) => {
      //       console.log(data)
      //     commit('SET_ITEM', data)
      //   })
      //   .catch(err => {
      //     console.log(err.message);
      //   });
      // },

      async FETCH_ITEM({commit}, item){
        try{
        const {data} = await fetchItemList(item)
        commit('SET_ITEM', data)
        }
        catch(error){
          console.log(error)
        }
      },
      // Promise

      // FETCH_LIST({commit},name){
      //   // use return for promie chaning
      //   return fetchList(name)
      //   .then((response) => {
      //     commit('SET_LIST', response.data)
      //     return response;
      //   })
      //   .catch(err => {
      //     console.log(err.message);
      //   });
      // },

      // Async/Await

      async FETCH_LIST({commit}, name){
        try{
        const response = await fetchList(name)
        commit('SET_LIST', response.data)
        return response
        }
        catch(err){
          console.log(err)
        }
      }
   
}