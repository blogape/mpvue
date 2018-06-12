import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Category from '../components/Category/category.vue'
import Hotrecipe from '../components/Hotrecipes/hotrecipe.vue'
import Breadrecipe  from '../components/Breadrecipes/breadrrecipes.vue'
import Themerecipe   from '../components/Themerecipes/themerecipe.vue'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      //食谱分类
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      // 热门食谱
      path: '/hotrecipe',
      name: 'Hotrecipe',
      component: Hotrecipe
    },
    {
      // 面包机食谱
      path: '/breadrecipe',
      name: 'Breadrecipe',
      component: Breadrecipe
    },{
      // 主题食谱
      path: '/themerecipe',
      name: 'Themerecipe',
      component: Themerecipe
    }
  ]
})
