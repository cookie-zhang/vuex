import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
