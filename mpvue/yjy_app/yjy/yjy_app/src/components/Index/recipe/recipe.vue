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
  春寒料峭，食之有方
</div>
</div>
<!-- 图片 -->
<div class="img">
<img src="https://image.hongbeibang.com/FiE3t4e4hSZKqrIYNsyD3uOWrstC?1280X959&imageView2/1/w/600/h/348"/>
</div>
</div>

<!--~~~~~~~~~~~~ 食谱详情 ~~~~~~~~~~~~~~~~~ -->

<div class="r_details">
<div class="r_detail-img">
<img src="https://image.hongbeibang.com/FntzdiusNryznUxBzi1Wkh9q_3kK?2240X1680&imageView2/1/w/600/h/348"/>
</div>
<div class="r_detail-d">
<div class="title">
黑椒菲力牛排
</div>
<div class="des-label">
<ul>
  <li>菲力</li>
<li>全熟</li>
<li>1.8cm</li>
</ul>
</div>
<div class="des_man">
  <div class="name">
莫然美丽 <span>最近2人做过</span>
  </div>
</div>
<div class="des-icon">
<i class="icon iconfont icon-chakan"></i><span>867</span><i class="icon iconfont icon-02"></i><span>12</span>

</div>
</div>
</div>
<div class="t-pre">
<div class="title">
  在家只能吃冷冻牛排？这样吃好像去了趟澳 在家只能吃冷冻牛排？这样吃好像去了趟澳洲…

</div>
<div class="describel">
  无需解冻，简单调味，轻松做出西餐厅的美味牛排
</div>
<div class="img">
<img src="https://image.hongbeibang.com/FvcU6vKjq5a5sna_-yaVpHFNnFeA?1280X960&imageView2/1/w/600/h/348"/>
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
  height: auto;
  .theme {
    display: flex;
    overflow: hidden;
    background-color: #fff;
    width: 100%;
    height: 10rem;
    .t-describe {
      text-align: center;
      flex: 1;
      .title {
        margin-top: 2.5rem;
        color: #4a4a4a;
        letter-spacing: 0;
        font-size: 1.8rem;
      }
      .describe {
        font-size: 1.2rem;
        padding-top: 1.5rem;
        color: #4a4a4a;
      }
    }
    .img {
      flex: 1;
      img {
        width: 100%;
      }
    }
  }
  .r_details {
    margin-top: 1rem;

    width: 100%;
    overflow: hidden;
    display: flex;
    height: 10rem;
    background-color: #fff;
    .r_detail-img {
      flex: 1;
      padding-right: 1rem;
      overflow: hidden;
      margin-left: 1rem;

      img {
        width: 100%;
      }
    }
    .r_detail-d {
      img {
        width: 100%;
      }
      .title {
        font-size: 1.6rem;
        color: #4a4a4a;
        padding-left: 2rem;
        margin-top: 1rem;
      }
      flex: 1;
    }
    .des-label {
      margin-top: 0.8rem;
      overflow: hidden;
      ul {
        padding-left: 1.5rem;
        li {
          float: left;
          margin-left: 0.7rem;
          color: #898989;
          font-size: 1.2rem;
        }
      }
    }
    .des_man {
      clear: both;
      padding-left: 2rem;
      margin-top: 0.8rem;
      .name {
        color: #4a4a4a;
        font-size: 1.2rem;
        span {
          font-size: 1rem;
          color: #898989;
        }
      }
    }
    .des-icon {
      padding-left: 2rem;
      margin-top: 0.8rem;
      i {
        font-size: 1.6rem;
        float: left;
        color: #898989;
      }
      span {
        font-size: 1.2rem;
        color: #898989;
        margin-top: 0.2rem;
        float: left;
        margin-left: 0.3rem;
      }
    }
    .icon-02 {
      font-size: 1.5rem !important;
      margin-left: 1.3rem;
    }
  }
  .t-pre {
    padding: 0 1rem;
    margin-top: 1rem;
    height: auto;
    padding-bottom: 1rem;
    background-color: #fff;
    marker: 1rem;
    background-color: #fff;
    .title {
      font-size: 1.6rem;
      color: #4a4a4a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 2rem;
      padding-top: 1.2rem;
    }
    .describel {
      margin-top: 0.5rem;
      color: #898989;
      font-size: 1.2rem;
    }
    .img{
      img{
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
}
</style>
