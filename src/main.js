// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 定义的路由结构
import routerConfig from './router-config'

Vue.config.productionTip = false

// 加载路由中间件
Vue.use(VueRouter)

// 定义路由
const router = new VueRouter({
	routes: routerConfig
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // render: h => h(App)
  // render: function(h){
  // 	return h(App);
  // }
  render: function(createElement){
  	return createElement(App);
  }
})
