<template>

<!-- 首页页面 -->
<div class="home">
  <!-- 轮播图 -->
<Swiper></Swiper>
<!-- 分类 -->
<div class="home-list">
  <!-- 食谱分类 -->
<a href="#">
<img src="../../assets/images/icon_classify.png"/>
<span>食谱分类</span>
</a>
<!-- 热门食谱 -->
<a href="#">
<img src="../../assets/images/icon_hot.png"/>
<span>热门食谱</span>
</a>
<!-- 牛扒机食谱 -->
<a href="#">
<img src="../../assets/images/icon_recipe_niupa.png"/>
<span>牛扒机食谱</span>
</a>
<!-- 面包机食谱 -->
<a href="#">
<img src="../../assets/images/icon_recipe_mianbao.png"/>
<span>面包机食谱</span>
</a>
</div>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!-- 食谱类别 -->
<Recipe></Recipe>
</div>
</template>

<script>
import Swiper from './banner/banner.vue';
import Recipe from './recipe/recipe.vue';

export default {
components:{
  Swiper:Swiper,
  Recipe:Recipe
}
}
</script>

<style lang='scss'>
.home-list{
  margin: 1rem 0;
  height: auto;
  padding: 2rem 0;
  background-color: #fff;
  display: flex;
  a{
    flex: 1;
    display: block;
    width: 100%;
    text-align: center;
    img{
      height: 5rem;

    }
    span{
      display: block;
      font-size: 1.2rem;
      margin-top: 0.5rem;
      color: #4A4A4A;
    }
  }
}
</style>
