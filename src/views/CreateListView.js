// HOC

import CommonList from './CommonList'
import bus from '../utils/bus'


export default function createListView(name){
    return{
        // 재사용할 인스턴스
        name,
        created(){
            bus.$emit('start:spinner')
            this.$store.dispatch("FETCH_LIST", this.$route.name)
            
        },
        render(createElement){
            return createElement(CommonList);
        }

    }
}