import axios from 'axios'
const listData = {
    namespaced:true,
    state:{
       List:[],
       count: 0,
       compoentData:[],
       number:0
    },
    actions:{
        getListData(context){
            new Promise((resolve,reject)=>{
                axios.get('../../../static/listData.json').then((res)=>{
                    context.commit('ListData',{'listDatas': res.data.listData})
                })
            })
        },
        handleAdd(context){
            context.commit("handleAddState")
        }
       
    },
    mutations:{
        ListData(state, paylod){
            state.List = paylod.listDatas
        },
        handleAddState(state){
            state.number++;
        }
    },
    getters: {
        List: state => state.List,
        count: state => state.count,
        number: state => state.number
    }
}
export default listData;