import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
