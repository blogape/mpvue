<template>
<!-- 头部组件 -->
<div class="header-static">
<span class='icon iconfont icon-fanhui' @click='$router.back(-1)'></span>
<div class="title">
{{Htitle}}
</div>
<span class='icon iconfont icon-sousuo' v-if='issearch'> </span>
</div>
</template>

<script>
export default {
  props: ["Htitle","issearch"]
};
</script>

<style lang='scss'>
.header-static {
  height: 4.5rem;
  max-width:640px;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
  // display: flex;
  position: fixed;
  top: 0;
  .icon-fanhui {
    color: #4a4a4a;
    left: 0;
    top:0;
    display: inline-block;
    text-align: center;
    width: 4.5rem;
    position: absolute;
    line-height: 4.5rem;
    font-size: 3rem;
    height: 4.5rem;
  }
  .title {
    color: #4a4a4a;
    line-height: 4.5rem;
    flex: 1;
    text-align: center;
    font-size: 1.6rem;
  }
  .icon-sousuo {
    width: 4.5rem;
    color: #4a4a4a;
    display: inline-block;
    height: 4.5rem;
    text-align: center;
    right: 0;
    top:0;
    position: absolute;
    line-height: 4.5rem;
    font-size: 2.5rem;
  }
}
</style>
