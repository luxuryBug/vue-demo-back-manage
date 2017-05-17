<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{'header-fixed': headerFixed}">
      <el-row>
        <el-col :span="24">
          <el-menu :default-active="currNav" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>  
    </header>
    <div v-show="headerFixed" style="position:relative;height:60px;width:100%;"></div>

    <main>
      <!-- 左侧树 -->
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/activePublic">活动发布</el-menu-item>
          <el-menu-item index="/activeManage">活动管理</el-menu-item>
        </el-menu>
      </div>
      <!-- 右侧内容 -->
      <div class="main-right">
        <transition>
          <router-view class="view"></router-view>
        </transition>  
      </div>
    </main>

  </div>
</template>

<script>
import Vue from 'vue'
// 输入Element
import Element from 'element-ui'
// 输入jquery
import $ from 'jquery'
// 输入Element-css
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

export default {
  name: 'app',
  data () {
    return {
      currNav: '5',
      headerFixed: true
    }
  },
  created () {
    console.log(this.$router);
    this.$router.push('./activePublic');
  },
  watch: {
    '$route': function(to,from){

    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  min-width: 1200px;
  margin: 0 auto;
}
/*头部导航*/
header {
 /* min-width: 1200px;*/
  background-color: #fff;
  border-top: solid 4px #3091F2;
  z-index: 1000;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left:0;
  right: 0;
}
header .el-menu {
  padding-left: 300px;
}
/*主内容区*/
main {
  display: flex;
  min-height: 800px;
  border: 40px solid #E9ECF1;
  background-color: #FCFCFC;
}
main .main-left {
  display: flex;
  flex: 0 0 200px;
  text-align: center;
}
main .main-right {
  display: flex;
  flex: 1;
  text-align: center;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background: transparent !important;
}
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }
</style>
