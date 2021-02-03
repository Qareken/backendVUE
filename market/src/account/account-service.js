import axios from "axios";
import store from "./Store"
export  default class AccountService {
    constructor(router) {
        this.router=router
        this.init()
    }
    init(){
        const token=localStorage.getItem("market-token")||sessionStorage.getItem("market-token")
        if(!store.getters.account&&!store.getters.logon&&token){
            this.retrieveAccount()
        }
    }
    retrieveAccount(){
        store.commit("authenticate")
        axios.get("api/account")
            .then(response=>{
                const account=response.data
                console.log(account)
                if(account){
                    console.log(account)
                    store.commit("authenticate", account)
                    if(sessionStorage.getItem("request-url")){
                        this.router.replace(sessionStorage.getItem("request-url"))
                        sessionStorage.removeItem("request-url")
                    }
                }else{
                    store.commit("logout")
                    this.router.push("/")
                    sessionStorage.removeItem("request-url")
                    sessionStorage.removeItem("market-token")
                }
            })
            .catch(()=>{
                store.commit("logout")
                this.router.push("/")
                }
            )
    }
}