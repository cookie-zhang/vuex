import axios from 'axios'
const homeData = {
    namespaced:true,
    state:{
        homeList:[]
    },
    actions:{
        getDetailListData(context){
            new Promise((resolve, reject)=>{
                axios.get('../../../static/homeDate.json').then((res)=>{
                    context.commit('getHomeDataList', {"homeList": res.data.homeData})
                })
            })
        }
    },
    mutations:{
        getHomeDataList(state,payload){
            state.homeList = payload.homeList
        }
    },
    getters: {
        homeList: state=> state.homeList
    }
}
export default homeData;