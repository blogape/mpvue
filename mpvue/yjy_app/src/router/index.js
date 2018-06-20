import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index/index";
import VueAwesomeSwiper from "vue-awesome-swiper";
import Category from "../components/Category/category.vue";
import Hotrecipe from "../components/Hotrecipes/hotrecipe.vue";
import Breadrecipe from "../components/Breadrecipes/breadrrecipes.vue";
import Themerecipe from "../components/Themerecipes/themerecipe.vue";
import Article from "../components/Article/article.vue";
import Recipedetail from "../components/Recipedetail/recipedetail.vue";
import Steakrecipes from "../components/Steakrecipe/steakrecipes.vue";
import Recipecat  from '../components/Recipecat/recipecat.vue';
import Search  from '../components/Search/search.vue';
import Seresult from '../components/Search/searchresult.vue';
require("swiper/dist/css/swiper.css");
Vue.use(VueAwesomeSwiper);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      //食谱分类
      path: "/category",
      name: "Category",
      component: Category
    },
    {
      // 热门食谱
      path: "/hotrecipe",
      name: "Hotrecipe",
      component: Hotrecipe
    },
    {
      // 面包机食谱
      path: "/breadrecipe",
      name: "Breadrecipe",
      component: Breadrecipe
    },
    {
      // 主题食谱
      path: "/themerecipe/:recipesid",
      name: "Themerecipe",
      component: Themerecipe
    },
    {
      // 食谱软文
      path: "/article",
      name: "Article",
      component: Article
    },
    {
      // 食谱详情
      path: "/recipedetail/:recipesid",
      name: "Recipedetail",
      component: Recipedetail
    },
    {
      // 牛排机食谱
      path: "/steakrecipes",
      name: "Steakrecipes",
      component: Steakrecipes
    },
    {
      // 分类食谱
      path: "/recipecat/:recipesid",
      name: "Recipecat",
      component: Recipecat
    },
    {
      // 搜索
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      // 搜索
      path: "/seresult/:id",
      name: "Seresult",
      component: Seresult
    }
  ]
});
