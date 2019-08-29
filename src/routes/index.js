import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'


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
            component: NewsView,
        },
        {
            name:'ask',
            path:'/ask',
            component: AskView
        },
        {
            name:'job',
            path:'/job',
            component: JobsView,
        },
    ]

})

