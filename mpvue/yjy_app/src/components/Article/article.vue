<template>
<!-- 食谱软文 -->
<div class="article-home">
<Header :Htitle="titlemsg" :issearch="issearch" :isshare='isshare'></Header>
<Banner></Banner>
<!-- 软文标题 -->
<div class="article-title">
这样的蒜，你吃过吗？
<p>一蒜八吃，不止调味那么简单</p>
</div>
<!-- 作者 -->
<div class="author">
  <i class="icon iconfont icon-fl-renyuan"></i> <font>美好食光馆</font>
</div>
<!-- 内容 -->
<div class="content">
<p>
普通蒜瓣儿除了味道冲了点，不管是作为调味品还是单纯的食物，对人体健康都大有裨益。不过现在流行于高档西餐厅的“黑蒜料理”，不仅不会让你的嘴里产生令人尴尬的味道，还有酸甜的果香，甚至
黑蒜保健品也开始抢占脑白金的市场了。
</p>
<img src="https://image.hongbeibang.com/FqZNJrG3IuLEyCppeMjuH0dw9lTK?1984X1323&imageView2/1/w/600/h/348"/>
<p>
这是一种混合了黑焦糖的丰满、巧克力的醇厚、果冻的质地、果脯的口感于一体的奇妙味道，但同时还散发着扑鼻的蒜香。它极富层次感，后味在口腔里久久徘徊，有点甜，有点苦，更多的是难以置信的鲜。
</p>
<img src="https://image.hongbeibang.com/FtbL1Qk5sqhVK-uR_dDByaRpjzYE?800X600&imageView2/1/w/600/h/348"/>
</div>
<!-- 阅读记录 -->
<div class="reading">
  <!-- 阅读数量 -->
<div class="number">
阅读 <font>1767</font>
</div>
<div class="time">
2017-12-19  11:06:27
</div>
</div>
</div>
</template>

<script>
import Header from "../Header/header.vue";
import Banner from "../Index/banner/banner.vue";
export default {
  data() {
    return {
      titlemsg: "食谱软文",
      issearch: false,
      isshare: true
    };
  },
  components: {
    Header,
    Banner
  }
};
</script>

<style lang='scss'>
.article-home {
  padding-top: 4.5rem;
  overflow: hidden;
  padding-bottom: 2rem;
  background-color: #fff;
  .article-title {
    padding: 1rem;
    line-height: 2.5rem;
    font-size: 1.6rem;
    p {
      padding-bottom: 1rem;
      line-height: 2.5rem;
      font-size: 1.2rem;
      border-bottom: 0.5px solid #ccc;
      color: #898989;
      letter-spacing: -0.34px;
    }
  }
  .author {
    font-size: 1.6rem;
    color: #4a4a4a;
    letter-spacing: -0.39px;
    padding: 0 1rem;
    i {
      float: left;
      font-size: 2.8rem;
      color: #ccc;
      margin-right: 0.5rem;
    }
    font {
      display: inline-block;
      margin-top: 0.7rem;
    }
  }
  .content {
    color: #4a4a4a;
    letter-spacing: -0.39px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 1rem;
    p {
      color: #4a4a4a;
      font-size: 1.4rem;
      padding: 0.3rem 0;
    }
    img {
      width: 100%;
    }
  }
  .reading {
    color: #4a4a4a;
    display: flex;
    padding: 0 1rem 2rem 1rem;

    vertical-align: middle;
    .number {
      flex: 1;
      font-size: 1.4rem;

      color: #898989;
      font {
        margin-left: 0.2rem;
      }
    }
    .time {
      color: #898989;
      float: right;
      vertical-align: middle;
      font-size: 1.4rem;
    }
  }
}
</style>
