import axios from 'axios'
const compute = {
    namespaced:true,
    state:{
        compute:0
    },
    actions:{
        addComp(context){
            context.commit('aaa',{"addOne": 1})
        }
    },
    mutations:{
        aaa(state,payload){
            state.compute += payload.addOne
        }
    },
    getters: {
        compute: state => state.compute
    }
}
export default compute;