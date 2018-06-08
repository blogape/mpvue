import Vue from "vue";
import Router from "vue-router";
import Home from "../view/Home.vue";
// import User from '../view/User/User.vue'
// import Form from '../view/User/Form.vue'
import Login from "../view/Login/Login.vue";
import Upload from "../view/User/Upload.vue";
import Recipesearch from "../view/User/Recipesearch.vue";
import entryrec from "../view/User/entryrecipe.vue";
import category from "../view/Category/category.vue";
// import tempdeta from '../view/Template/tempdeta.vue'
// import controltem from '../view/Template/controltem.vue'
import ctbanner from "../view/App/ctbanner.vue";
import ctnavber from "../view/App/ctnavber.vue";
import addsecat from "../view/Category/addsecond.vue";
import firsttree from "../view/Category/addfitree.vue";
import FoodAdst from "../view/Category/FoodAdst.vue";
import  viewmgt   from '../view/App/viewmgt.vue';
import AddRecipes from "../view/User/AddRecipes.vue";
import FoodStep from "../view/User/FoodStep.vue";
import CookeryStage from "../view/User/CookeryStage.vue";
import AddFood from "../view/User/AddFood.vue";
import ctview from '../view/App/ctview.vue';
import sssx from "../view/shiyan/sssx.vue";
import softlist from '../view/App/softlist.vue'
import addsoft from '../view/App/addsoft.vue'
import terpes from '../view/App/terpes.vue';
import addthem from '../view/App/addthem.vue';
import tembind from '../view/App/tembind.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/login",
      name: "",
      component: Login,
      hidden: true
    },
    {
      path: "/",
      name: "首页",
      component: Home,
      iconCls: "el-icon-menu", //图标样式class
      children: [
        // { path: '/user', component: User, name: '首页' },
        // { path: '/demo', component: demo, name: 'demo' },
        // { path: '/form', component: Form, name: '发布食谱' },
        // { path: '/form', component: Form, name: '搜索食谱' },
        // { path: '/upload', component: Upload, name: '上传图片' },
        // { path: '/recipesearch', component: Recipesearch, name: '搜索食谱' },
        // { path: '/entryrec', component: entryrec, name: '食谱详情' },
      ]
    },
    // 食谱分类
    {
      path: "/",
      name: "食谱管理",
      component: Home,
      iconCls: "el-icon-menu", //图标样式class
      children: [
        // 创建食谱
        { path: "/AddRecipes", component: AddRecipes, name: "创建食谱" },
        {
          path: "/FoodStep",
          component: FoodStep,
          name: "添加食谱烹饪步骤",
          hidden: true
        },
        {
          path: "/CookeryStage",
          component: CookeryStage,
          name: "食谱烹饪阶段",
          hidden: true
        },
        {
          path: "/AddFood",
          component: AddFood,
          name: "添加食材",
          hidden: true
        },
        // 管理食谱
        { path: "/category", component: category, name: "管理分类食谱" },
        {
          path: "/firsttree:id:pid",
          component: firsttree,
          name: "添加一级分类",
          hidden: true
        },
        {
          path: "/addsecat:id",
          component: addsecat,
          name: "添加二级分类",
          hidden: true
        },
        { path: "/FoodAdst", component: FoodAdst, name: "食谱管理" }
      ]
    },
    // 模板管理
    // {
    //   path: '/',
    //   name: '模板管理',
    //   component: Home,
    //   iconCls: 'el-icon-menu',//图标样式class
    //   children: [
    //     { path: '/tempdeta', component: tempdeta, name: '模板详情' },
    //     { path: '/controltem', component: controltem, name: '控制模板' },
    //   ]
    // },
    {
      path: "/",
      name: "页面管理",
      component: Home,
      iconCls: "el-icon-menu", //图标样式class
      children: [
        {
          path: "/ctbanner",
          component: ctbanner,
          name: "Banner展示",
          hidden: true
        },
        {
          path: "/ctview",
          component: ctview,
          name: "添加视图管理",
          hidden: true
        },
        {
          path: "/viewmgt",
          component: viewmgt,
          name: "视图管理",
        },
        {
          path: "/addsoft",
          component: addsoft,
          name: "添加软文",
          hidden: true
        },
        {
          path: "/tembind/:id",
          component: tembind,
          name: "绑定食谱",
          hidden: true
        },
        { path: "/ctnavber", component: ctnavber, name: "Banner图管理" },
        { path: "/softlist", component: softlist, name: "软文管理" },
        { path: "/terpes", component: terpes, name: "主题食谱" },
        { path: "/addthem", component: addthem, name: "添加主题食谱",hidden: true },

      ]
    },
    {
      path: "/",
      name: "试验模板",
      component: Home,
      iconCls: "el-icon-menu",
      children: [{ path: "/sssx", component: sssx, name: "试验模板2" }]
    }
  ]
});
