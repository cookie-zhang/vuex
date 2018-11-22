import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
import Detail from '@/components/detail'
import Compute from '@/components/compute'


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
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/compute',
      name: 'Compute',
      component: Compute
    }
  ]
})
