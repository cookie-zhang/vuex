//这个是总的store，抛出各个模块的store
import Vue from 'vue'
import Vuex from 'vuex'
import homeData from './moudel/homeDataStore'
import listData from './moudel/listDataStore'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        homeData,
        listData,
      
    }
})
export default store;