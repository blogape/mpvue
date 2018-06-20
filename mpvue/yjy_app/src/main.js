// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import VueAwesomeSwiper from "vue-awesome-swiper"
import axios from 'axios'
import MintUI from 'mint-ui'
import stores from './store/store.js'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

require("swiper/dist/css/swiper.css");
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.prototype.Ajax = axios;
/* eslint-disable no-new */



router.beforeEach((to, from, next) => {
  // if (to.path == '/themerecipe') {
  //   // sessionStorage.removeItem('user')

  // }
  let pathisfalse=to.path.indexOf('themerecipe')
  let articpath=to.path.indexOf('article')
  if (pathisfalse==1||articpath==1) {
    window.scrollTo(0, 0);
    next()
  } else {
    next()
  }
})





new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
