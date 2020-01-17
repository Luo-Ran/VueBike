// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '../static/js/flexible.js'
import axios from 'axios'

/* eslint-disable */
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 监听点击浏览器的返回按钮
/* eslint-disable */
window.addEventListener('popstate', function(e) {
  router.togoback()
}, false)


