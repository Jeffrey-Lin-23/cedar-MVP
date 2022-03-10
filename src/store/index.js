import {createStore} from "vuex";

const url = "http://localhost:3000/user";
const headers = {Accept :"apllication/json"};

const store = createStore({
    state:{
        user:'',
    },
    getters:{
        getCurrentUser:state => state.user
    },
    actions:{
        async connectWallet(state){
            const user = await fetch(url, { headers});
            const u = await user.json();
            state.commit("saveUser", u[0].id);
        },
        disconnectWallet(state){
            state.commit("saveUser", '');
        }
    },
    mutations:{
        saveUser(state,payload){
            state.user = payload;
        }
    },
    modules:{},
})

export default store;