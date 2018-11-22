import axios from 'axios'
const listData = {
    namespaced:true,
    state:{
       List:[],
       count: 0,
       compoentData:[]
    },
    actions:{
        getListData(context){
            new Promise((resolve,reject)=>{
                axios.get('../../../static/listData.json').then((res)=>{
                    context.commit('ListData',{'listDatas': res.data.listData})
                })
            })
        },
        listComponent(context,paylod){
            debugger;
        }
    },
    mutations:{
        ListData(state, paylod){
            state.List = paylod.listDatas
        },
        // listComponent(state, paylod){
        //     debugger;
        //     state.compoentData = paylod.listdata
        // }
        increment: state => state.count++,
        decrement: state => state.count--
    },
    getters: {
        List: state => state.List,
        count: state => state.count,
    }
}
export default listData;