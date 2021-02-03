<template>
    <div style="margin-top: 200px">
        <el-row :gutter="20">
            <el-col :span="4" :offset="8"><div class="grid-content bg-purple">
                <el-input
                        size="small"
                        v-model="loginVM.username"
                        placeholder="Login">
                </el-input>
                <el-input placeholder="Please input password" size="small" v-model="loginVM.password" show-password style="margin-top: 15px"> </el-input>
            </div></el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 15px">
            <el-col :span="4" :offset="8">
                <el-col :span="8" :offset="0">
                    <el-checkbox v-model="loginVM.checked">Save</el-checkbox>
                </el-col>
                <el-col :span="8" :offset="8">
                    <el-button type="primary" plain @click="login">Login</el-button>
                </el-col>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    import axios from 'axios'
    import AccountService from "../account/account-service";

    export default {
        name:"login",
        data(){
            return {

                loginVM:{
                    login:null,
                    password:null
                },
                checked:false
            }
        },
        methods:{
            login(){
                axios.post('api/login', this.loginVM)
                .then(res=>{
                    const token=res.data.token
                    if(this.checked){
                        console.log("checked true: ",this.checked)
                        localStorage.setItem('market-token', token)
                    }else{
                        console.log(this.checked)
                        sessionStorage.setItem('market-token', token)
                    }
                    new AccountService(this.$route).retrieveAccount()
                })
            }
        }

    }
</script>
<style scoped>

</style>