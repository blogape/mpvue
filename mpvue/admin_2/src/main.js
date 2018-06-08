// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from './config/api.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';


Vue.config.productionTip = false
//使用Element UI 框架
Vue.use(ElementUI);
Vue.prototype.Ajax = Ajax;
Vue.prototype.axios = axios;


//路由守卫拦
var storage = window.localStorage;
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user')
  }
  let user = storage["user"];
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
