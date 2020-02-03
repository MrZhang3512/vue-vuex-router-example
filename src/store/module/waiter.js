import { get } from "../http";
export default{
    namespaced:true,
    state:{
        waiters:[]
    },
    getters:{
       
    },
    mutations:{
        resetwaiters(state,waiters){
            state.waiters=waiters;
        }
    },
    actions:{
        findAllwaiters({commit}){
            get("/waiter/findAll").then((result)=>{
                commit('resetwaiters',result.data)
            })
        }
    }
}