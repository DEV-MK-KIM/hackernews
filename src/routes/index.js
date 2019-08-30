import Vue from 'vue'
import VueRouter from 'vue-router'
// import NewsView from '../views/NewsView'
// import JobsView from '../views/JobsView'
// import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import createListView from '../views/CreateListView'



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: 'news'
        },
        {
            name:'news',
            path:'/news',
            component: createListView('NewsView HOC'),
        },
        {
            name:'ask',
            path:'/ask',
            component: createListView('AskView HOC')
        },
        {
            name:'job',
            path:'/job',
            component: createListView('JobsView HOC'),
        },
        {
            name:'user',
            // '/user/:params'
            path:'/user/:id',
            component: UserView,
        },
        {
            name:'item',
            // '/user/:params'
            path:'/item/:id',
            component: ItemView,
        },

    ]

})

