 import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store(
    {
        state:{
            logon:false,
            userIdentity:null,
            authenticated: false
        },

    mutations:{
        authenticate(state){
        state.logon=true
     },
     authenticated(state, identity){
         state.userIdentity=identity
         state.authenticated=true
         this.state.logon=true
     },
     logout(state){
         state.userIdentity=null
         state.authenticated=false
         state.logon=false
     }
 },
 getters: {
     logon: state => state.logon,
     account:state => state.userIdentity,
     authenticated: state => state.authenticated
 }
 });
