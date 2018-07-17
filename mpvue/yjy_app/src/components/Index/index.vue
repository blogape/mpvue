<template>

<!-- 首页页面 -->
<div class="home">
  <!-- 搜索头部 -->
  <div class="search-header">
  <span class="saoma"><i class="icon iconfont icon-saoyisao"></i></span>
  <div class="input">
    <div class="searchClick" @click='handelsearch'>
      <i class="icon-sousuo icon iconfont"></i>食谱、食材等
    </div>
  </div>
  <div class="more">
      <span class="more_icon"><i class="icon iconfont icon-more"></i></span>

  </div>
  </div>
  <!-- 轮播图 -->
<Swiper></Swiper>
<!-- 分类 -->
<div class="home-list">
  <!-- 食谱分类 -->
<router-link to='/category'>
<img src="../../assets/images/icon_classify.png"/>
<span>食谱分类</span>
</router-link>
<!-- 热门食谱 -->
<router-link to='/hotrecipe'>
<img src="../../assets/images/icon_hot.png"/>
<span>热门食谱</span>
</router-link>
<!-- 牛扒机食谱 -->
<router-link to='/steakrecipes'>
<img src="../../assets/images/icon_recipe_niupa.png"/>
<span>牛扒机食谱</span>
</router-link>
<!-- 面包机食谱 -->
<router-link to='/breadrecipe'>
<img src="../../assets/images/icon_recipe_mianbao.png"/>
<span>面包机食谱</span>
</router-link>
</div>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!-- 食谱类别 -->
<Recipe></Recipe>
</div>
</template>

<script>
import Swiper from "./banner/banner.vue";
import Recipe from "./recipe/recipe.vue";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    handelsearch() {
      this.$router.push('/search')
    }
  },
  components: {
    Swiper: Swiper,
    Recipe: Recipe
  }
};
</script>

<style lang='scss'>
.home {
  padding-top: 4.5rem;
  .search-header {
    height: 4.5rem;
    display: flex;
    width: 100%;
    max-width:640px;
    z-index: 999;
    background-color: #fff;
    position: fixed;
    top: 0;
    .saoma {
      width: 4.5rem;
      height: 4.5rem;
      display: inline-block;
      line-height: 4.5rem;
      text-align: center;

      i {
        color: #3c3c3c;
        font-size: 2.8rem;
      }
    }
    .more {
      width: 4.5rem;

      height: 4.5rem;
      display: inline-block;
      line-height: 4.5rem;
      text-align: center;
      i {
        color: #3c3c3c;
        font-size: 2.8rem;
      }
    }
    .input {
      flex: 1;
      .searchClick {
        height: 3rem;
        line-height: 3rem;
        font-size: 1.2rem;
        color: #898989;
        letter-spacing: -0.34px;
        position: relative;
        margin-top: 0.75rem;
        border: 1px solid #ccc;
        i {
          color: #898989;
          margin-left: 1rem;
          float: left;
          display: inline-block;
          margin-right: 0.5rem;
        }
      }
    }
  }
}

.home-list {
  margin: 1rem 0;
  height: auto;
  padding: 2rem 0;
  background-color: #fff;
  display: flex;
  a {
    flex: 1;
    display: block;
    width: 100%;
    text-align: center;
    img {
      height: 5rem;
    }
    span {
      display: block;
      font-size: 1.2rem;
      margin-top: 0.5rem;
      color: #4a4a4a;
    }
  }
}
</style>
