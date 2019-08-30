import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
// import createListView from '../views/CreateListView'



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
            // component: createListView('NewsView HOC'),
            component: NewsView
        },
        {
            name:'ask',
            path:'/ask',
            // component: createListView('AskView HOC')
            component: AskView

        },
        {
            name:'jobs',
            path:'/jobs',
            // component: createListView('JobsView HOC'),
            component: JobsView

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

