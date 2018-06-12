<template>
<!-- 热门食谱 -->
<div class="hotrecipe-home">
  <!-- 头部导入 -->
<Header :Htitle="titlemsg" :issearch="issearch"></Header>
<!-- 内容 -->
<div class="hot-content">
<a href="#">
  <!-- 标题 -->
<div class="title">
经典牛排
</div>
<!-- 描述 -->
<div class="describle">
<i class="icon iconfont icon-fl-renyuan"></i>原切牛排和青花鱼
<span>
<ul>
  <li>
    <i class="icon-chakan icon iconfont">
    </i>
    <font>867</font>
  </li>
  <li>
    <i class="icon-02  icon iconfont">
    </i>
    <font>867</font>
  </li>
</ul>
</span>
</div>
<div class="img">
<img src="https://image.hongbeibang.com/FriXmExqD85qDt-jCEDQhyhr1eLZ?1280X854&imageView2/1/w/600/h/348"/>
</div>
</a>
</div>


<div class="hot-content">
<a href="#">
  <!-- 标题 -->
<div class="title">
经典牛排
</div>
<!-- 描述 -->
<div class="describle">
<i class="icon iconfont icon-fl-renyuan"></i>原切牛排和青花鱼
<span>
<ul>
  <li>
    <i class="icon-chakan icon iconfont">
    </i>
    <font>867</font>
  </li>
  <li>
    <i class="icon-02  icon iconfont">
    </i>
    <font>867</font>
  </li>
</ul>
</span>
</div>
<div class="img">
<img src="https://image.hongbeibang.com/FlPlSDTmzpS9l7aZHLTjLaHX96RL?1280X853&imageView2/1/w/600/h/348"/>
</div>
</a>
</div>

<div class="hot-content">
<a href="#">
  <!-- 标题 -->
<div class="title">
红枣蒸米糕
</div>
<!-- 描述 -->
<div class="describle">
<i class="icon iconfont icon-fl-renyuan"></i>铿锵玫瑰甜甜妈妈
<span>
<ul>
  <li>
    <i class="icon-chakan icon iconfont">
    </i>
    <font>867</font>
  </li>
  <li>
    <i class="icon-02  icon iconfont">
    </i>
    <font>867</font>
  </li>
</ul>
</span>
</div>
<div class="img">
<img src="https://image.hongbeibang.com/FntzdiusNryznUxBzi1Wkh9q_3kK?2240X1680&imageView2/1/w/600/h/348"/>
</div>
</a>
</div>

</div>
</template>

<script>
import Header from "../Header/header.vue";

export default {
  data() {
    return {
      titlemsg: "热门食谱",
      issearch: false
    };
  },
  components: {
    Header
  },
  created() {}
};
</script>

<style lang='scss'>
.hotrecipe-home {
  padding-top: 4.5rem;
  .hot-content {
    width: 100%;
     border-bottom: 0.5px solid #ccc;
    overflow: hidden;
    background-color: #fff;
    a {
      display: inline-block;
      padding: 1.5rem;
      height: auto;
      width: 100%;
      .title {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.8rem;
        color: #4a4a4a;
      }
      .describle {
        height: 3rem;
        color: #898989;
        line-height: 3rem;
        width: 100%;
        font-size: 1.4rem;
        .icon-fl-renyuan{
          color: #ccc;
          float: left;
          margin-right: 0.3rem;
          font-size: 2rem;
        }
        span{
          color: #898989;
          padding-right: 3rem;
          float: right;
        }
        ul{
          li{
            float: left;
            margin-left: 1rem;
            font{
              color: #898989;
              font-size: 1.2rem;
              margin-left: 0.3rem;
            }
          }
        }
      }
      .img{
        padding-right: 3rem;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
