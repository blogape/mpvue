<template>
<div>


<div class="home_recipe" v-for='(items,key) in recipesdata' :key='key'>
<!-- 软文食谱 -->
<router-link :to="{ name: 'Article', params: { recipesid: items.data.id }}"  class="theme"  v-if='items.type==1'>
  <!-- 描述 -->
<div class="t-describe">
<div class="title">
{{items.data.title}}
</div>
<div class="describe">
{{items.data.description}}
</div>
</div>
<!-- 图片 -->
<div class="img">
<img :src="items.data.image"/>
</div>
</router-link >

<!--~~~~~~~~~~~~ 食谱详情 ~~~~~~~~~~~~~~~~~ -->

<router-link class="r_details" :to="{ name: 'Recipedetail', params: { recipesid: items.data.id }}" v-if='items.type==0'>
<div class="r_detail-img">
<img :src="items.data.coverimg"/>
</div>
<div class="r_detail-d">
<div class="title">
{{items.data.title}}
</div>
<div class="des-label">
<ul>
  <li>好吃</li>
<li>美味</li>
<li>达人</li>
</ul>
</div>
<div class="des_man">
  <div class="name">
宜居云 <span>最近23人做过</span>
  </div>
</div>
<div class="des-icon">
<i class="icon iconfont icon-chakan"></i><span>867</span><i class="icon iconfont icon-02"></i><span>12</span>

</div>
</div>
</router-link>
  <!-- 主题食谱 -->
<router-link :to="{ name: 'Themerecipe', params: { recipesid: items.data.id }}" class="t-pre"  v-if='items.type==2'>
<div class="title">
  {{items.data.title}}
</div>
<div class="describel">
  {{items.data.description}}
</div>
<div class="img">
<img :src="items.data.coverimg"/>
</div>
</router-link>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      recipesdata: ""
    };
  },
  created() {
    this.recipes();
  },
  methods: {
    recipes() {
      var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/indexElement/indexElements?token=666666"
      )
        .then(function(response) {
          console.log(response);
          _this.recipesdata = response.data.data;
          console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='scss'>
.home_recipe {
  width: 100%;
  height: auto;

  .theme {
    display: flex;
    overflow: hidden;
    margin-top: 1rem;
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
    display: inline-block;

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
    display: block;
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
    .img {
      img {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
}
</style>
