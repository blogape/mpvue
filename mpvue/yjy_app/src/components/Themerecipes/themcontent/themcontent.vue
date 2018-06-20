<template>
<router-link  :to="{ name: 'Recipedetail', params: { recipesid: themlist.recipeId }}" class="tconent">
  <!-- 标题 -->
<div class="title">
{{themlist.title}}
</div>
<!-- 标签 -->
<div class="label">
  <div class="name">
宜居云
  </div>
<div class="right">
<ul>
  <li>
  <i class="icon-chakan icon iconfont"></i><font>{{themlist.readCount}}</font>
  </li>
   <li style="margin-top:-0.1rem;">
  <i class="icon-02 icon iconfont"></i><font class="love">{{themlist.collectCount}}</font>
  </li>
</ul>
</div>
</div>
<div class="t-img">
<img :src="themlist.coverimg"/>
</div>
</router-link>
</template>

<script>
export default {
  props:['themlist']
};
</script>

<style lang='scss'>
.tconent {
  width: 100%;
  overflow: hidden;
  height: auto;
  display: inline-block;
  padding: 1rem 0;
  .title {
    padding: 1rem;
    font-size: 1.6rem;
    color: #4a4a4a;
    letter-spacing: -0.43px;
  }
  .label {
    width: 100%;
    height: 3rem;
    display: flex;
    overflow: hidden;
    line-height: 3rem;
    // border: 1px solid red;
    .name {
      font-size: 1.4rem;
      color: #4a4a4a;
      width: 6rem;
      margin-left: 1rem;
      letter-spacing: -0.39px;
    }
    .right {
      float: right;
      flex: 1;
      ul {
        float: right;
        padding-right: 1rem;
        li {
          float: left;
          color: #898989;
          letter-spacing: -0.29px;
          margin-left: 1.5rem;
          font-size: 1.2rem;
          i {
            float: left;
            font-size: 1.6rem;
            color: #898989;
          }
          .love {
            display: inline-block;
            margin-top: 0.2rem;
          }
          .icon-02 {
            font-size: 1.4rem;
          }
          font {
            font-size: 1.2rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
  .t-img {
    width: 95%;

    img {
      padding: 0 2.5%;

      width: 100%;
    }
  }
}
</style>
