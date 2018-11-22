import axios from 'axios'
const detailData = {
    namespaced:true,
    state:{
        detailList:[]
    },
    actions:{
        getDetailListData(context){
            new Promise((resolve,reject)=>{
                axios.get('../../../static/detailData.json').then((res)=>{
                    context.commit('getDetailDataList',{'detailList': res.data.detailData})
                })
            })
        }
    },
    mutations:{
        getDetailDataList(state, payload){
            state.detailList = payload.detailList
        }
    },
    getters: {
        detailList: state => state.detailList
    }
}
export default detailData;