//这个是总的store，抛出各个模块的store
import Vue from 'vue'
import Vuex from 'vuex'
import detailData from './moudel/detailDataStore'
import homeData from './moudel/homeDataStore'
import listData from './moudel/listDataStore'
import compute from './moudel/compute'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        homeData,
        detailData,
        listData,
        compute
    }
})
export default store;