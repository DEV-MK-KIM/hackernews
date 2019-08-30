// MIXINS
import bus from '../utils/bus'
export default {
    // component

    created(){
        bus.$emit('start:spinner')
        this.$store.dispatch("FETCH_LIST", this.$route.name)
        // PROMISE CHAINING FROM VUEX ACTIONS (return res)
        .then(()=>{
            bus.$emit('end:spinner')
            console.log(5)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },
    
}


// HOC
// export default function create(){
     // component
// }

