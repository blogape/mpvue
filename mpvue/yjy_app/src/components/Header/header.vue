<template>
<!-- 头部组件 -->
<div class="header-static">
<span class='icon iconfont icon-fanhui' @click='$router.back(-1)'></span>
<div class="title">
{{Htitle}}
</div>
<span class='icon iconfont icon-sousuo' v-if='issearch'> </span>
<span class='icon iconfont icon-more'  v-if='isshare' @click='handlemore'> </span>
<div>
<div class="popup-more" v-if='ismore' id='vmore'>
  <i class="sanjiao"></i>
<ul>
  <li>
    <router-link to='/' >
      <i class="icon iconfont icon-shouye"></i><strong>首页</strong>
    </router-link>
  </li>
    <li>
     <router-link to='/category' >
      <i class="icon iconfont icon-fenlei"></i><strong>分类</strong>
      </router-link>
  </li>
    <li>
    <a href="#">
      <i class="icon iconfont icon-fenxiang"></i><strong>分享</strong>
    </a>
  </li>

</ul>
</div>
</div>
</div>

</template>

<script>
import { Popup } from "mint-ui";

export default {
  data() {
    return {
      ismore: false
    };
  },
  props: ["Htitle", "issearch", "isshare"],
  created() {
    console.log(this._props);

  },
  methods: {

    handlemore() {
      if (this.ismore == true) {
        this.ismore = false;
      } else {
        this.ismore = true;
      }
    }
  }
};
</script>

<style lang='scss'>
.header-static {
  height: 4.5rem;
  max-width: 640px;
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
    top: 0;
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
  .icon-more {
    width: 4.5rem;
    color: #4a4a4a;
    display: inline-block;
    height: 4.5rem;
    text-align: center;
    right: 0;
    top: 0;
    position: absolute;
    line-height: 4.5rem;
    font-size: 2.5rem;
  }
  .icon-sousuo {
    width: 4.5rem;
    color: #4a4a4a;
    display: inline-block;
    height: 4.5rem;
    text-align: center;
    right: 0;
    top: 0;
    position: absolute;
    line-height: 4.5rem;
    font-size: 2.5rem;
  }
  .popup-more {
    position: absolute;
    top: 4.3rem;
    border-radius: 0.3rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.9);
    width: 10rem;
    height: auto;
    .sanjiao {
      width: 0px;
      position: absolute;
      height: 0px;
      top: -0.6rem;
      right: 0.2rem;
      border-left: 8px solid transparent; /* 右透明 */
      border-right: 8px solid transparent; /*右透明 */
      border-bottom: 8px solid #2f2f2f; /* 定义底部颜色 */
      font-size: 0px;
      line-height: 0px;
    }
    ul {
      li {
        display: block;
        position: relative;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
        height: 40px;
        line-height: 40px;
        z-index: 1000;
        list-style-type: none;
        margin: 0;
        overflow: hidden;
        padding: 0;
        a {
          display: block;
          border: 0;
          width: 100%;
          font-size: 1.6rem;
          color: #fff;
          z-index: 1000;
          text-decoration: none;
          .icon {
            margin-left: 1rem;
            font-size: 2rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            color: #fff;
          }
          strong {
            font-weight: 400;
            margin-left: 40px;
          }
        }
      }
    }
  }
}
</style>
