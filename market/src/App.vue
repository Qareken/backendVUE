<template>
  <div id="app">

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-col :span="2" :offset="0"><div class="grid-content bg-purple">
          <el-aside width="200px">
            <Aside></Aside>
          </el-aside>
        </div></el-col>
        <el-col :span="22" :offset="1"><div class="grid-content bg-purple">
          <el-main>
            <router-view></router-view>
          </el-main>
        </div></el-col>

      </el-container>
      <el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>


import Header from "./layout/header";
import Aside from "./layout/Aside";
export default {
  name: 'App',
  components: {
    Aside,
    Header
  }
}
</script>

<style>
  .el-header,.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: 	#FFFFFF;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
