<template>
<div class="home_recipe">
<!-- 主题食谱 -->
<div class="theme">
  <!-- 描述 -->
<div class="t-describe">
<div class="title">
精选食材
</div>
<div class="describe">

</div>
</div>
<!-- 图片 -->
<div class="img">

</div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.home_recipe {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  border: 1px solid red;
  .theme {
    display: flex;
    .t-describe {
      text-align: center;
      flex: 1;
      .title {
        margin-top: 2rem;
        color: #4a4a4a;
        letter-spacing: 0;
        font-size: 1.8rem;
      }
    }
    .img {
      flex: 1;
    }
  }
}
</style>
