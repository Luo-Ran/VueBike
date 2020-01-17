import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout/index.vue'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: (resolve) => require(['@/pages/login/login'], resolve)
    },
    {
      path: '/rentBike',
      component: layout,
      children: [{
        path: '/',
        name: '扫码租车',
        component: (resolve) => require(['@/pages/sys/rentBike/rentBike'], resolve)
      }]
    },
    {
      path: '/dashboard',
      component: layout,
      children: [{
        path: '/',
        name: '车辆管理',
        component: (resolve) => require(['@/pages/dashboard/dashboard'], resolve)
      }]
    },
    {
      path: '/personal',
      component: layout,
      children: [{
        path: '/',
        name: '个人中心',
        component: (resolve) => require(['@/pages/sys/mine/index'], resolve)
      }]
    },
    // 搜索页面
    {
      path: '/search',
      name: 'search',
      component: (resolve) => require(['@/pages/sys/search'], resolve)
    },
    // 车辆维修
    {
      path:'/repairBike',
      name:'车辆维修',
      component: (resolve) => require(['@/pages/sys/repairBike/index'],resolve)
    }
  ]
})

// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
