import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
// import createListView from '../views/CreateListView'

import bus from '../utils/bus';
import store from '../store/store';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      name: 'news',
      path: '/news',
      // component: createListView('NewsView HOC'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          // PROMISE CHAINING FROM VUEX ACTIONS (return res)
          .then(() => {
            next();
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    },
    {
      name: 'ask',
      path: '/ask',
      // component: createListView('AskView HOC')
      component: AskView,
      beforeEnter: (to, from, next) =>{
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          // PROMISE CHAINING FROM VUEX ACTIONS (return res)
          .then(() => {
            next();
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    },
    {
      name: 'jobs',
      path: '/jobs',
      // component: createListView('JobsView HOC'),
      component: JobsView,
      beforeEnter: (to, from, next) =>{
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          // PROMISE CHAINING FROM VUEX ACTIONS (return res)
          .then(() => {
            next();
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    },
    {
      name: 'user',
      // '/user/:params'
      path: '/user/:id',
      component: UserView
    },
    {
      name: 'item',
      // '/user/:params'
      path: '/item/:id',
      component: ItemView
    }
  ]
});
