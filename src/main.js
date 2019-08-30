import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import vuetify from './plugins/vuetify';
import store from './store/store'
import moment from 'moment'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  moment,
  render: h => h(App),
}).$mount('#app') 
