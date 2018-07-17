<template>
<!-- 食谱内容 -->
<router-link :to="{ name: 'Recipedetail', params: { recipesid: breaddata.id }}" class="recipe-food" >
  <!-- 图片 -->
<div class="img">
<img :src="breaddata.images"/>
</div>
<!-- 描述 -->
<div class="describle">
<div class="title">
{{breaddata.title}}
</div>
<!-- 标签 -->
<div class="label">
<ul >
  <li>{{breaddata.tags}}</li>

</ul>
</div>
<div class="name">
宜居云 <span>最近2人做过</span>
</div>
<div class="icon_list">
<ul>
  <li><i class="icon-chakan icon iconfont"></i><font>88</font>   <i class="icon-02  icon iconfont"></i><font>65</font> </li>
</ul>
</div>
</div>
</router-link>
</template>

<script>
export default {
  props: ['breaddata']
};
</script>

<style lang='scss'>
.recipe-food {
  display: flex;
  width: 100%;
  background-color: #fff;
  padding-top: 1rem;
  .describle{
    padding-left: 1rem;
    flex: 1;
    padding-top: 0.5rem;
    border-bottom: 0.5px solid #eaeaea;
  .title{
    font-size: 1.4rem;
    color: #4A4A4A;
  }
  .label{
    overflow: hidden;
    margin-top: 0.7rem;
    ul{
      li:first-child{
        margin-left: 0;
      }
      li{
       color: #898989;
        float: left;
        margin-left: 1rem;
        font-size: 1.2rem;
      }
    }
  }
  .name{
    font-size: 1.2rem;
    color: #4A4A4A;
    margin-top: 0.7rem;
    span{
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
  .icon_list{
    margin-top: 0.7rem;
    .icon{
      font-size: 1.5rem;
      color: #898989;
    }
    .icon-02 {
      margin-left: 1rem;
    }
    i{
      float: left;
    }
    font{
      color: #898989;
        margin-top: 0.2rem;
      font-size: 1.2rem;
      margin-left: 0.3rem;
      float: left;
    }
  }
  }
  .img {
    padding-left: 1rem;
    width: 11.5rem;
    height: 9rem;
    img {
      width: 100%;
    }
  }
}
</style>
