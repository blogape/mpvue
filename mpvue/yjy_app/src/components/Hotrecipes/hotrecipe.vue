<template>
<!-- 热门食谱 -->
<div class="hotrecipe-home">
  <!-- 头部导入 -->
<Header :Htitle="titlemsg" :issearch="issearch"></Header>
<!-- 内容 -->


<div class="hot-content" v-for='(itemsdata,key) in hotsdata.list' :key='key'>
<router-link :to="{ name: 'Recipedetail', params: { recipesid: itemsdata.id }}">
  <!-- 标题 -->
<div class="title">
{{itemsdata.title}}
</div>
<!-- 描述 -->
<div class="describle">
<i class="icon iconfont icon-fl-renyuan"></i>宜居云
<span>
<ul>
  <li>
    <i class="icon-chakan icon iconfont">
    </i>
    <font>{{itemsdata.cookiedCount}}</font>
  </li>
  <li>
    <i class="icon-02  icon iconfont">
    </i>
    <font>{{itemsdata.collectCount}}</font>
  </li>
</ul>
</span>
</div>
<div class="img">
<img :src="itemsdata.coverimg"/>
</div>
</router-link>
</div>
</div>
</template>

<script>
import Header from "../Header/header.vue";

export default {
  data() {
    return {
      titlemsg: "热门食谱",
      issearch: false,
      hotsdata:"",
    };
  },
  components: {
    Header
  },
  created() {
    this.hotdata();
  },
  methods:{
    hotdata(){

  var _this = this;
      this.Ajax.get(
           "http://192.168.1.52:8765/api/search-service/es/hot?token=666666&size=400&option=0")
        .then(function(response) {
          console.log(response);
          _this.hotsdata = response.data.data;
          //  _this.vlength= _this.redata.recipeIngredientMids.length;
          // console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });


    }
  }
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
        .icon-fl-renyuan {
          color: #ccc;
          float: left;
          margin-right: 0.3rem;
          font-size: 2rem;
        }
        span {
          color: #898989;
          padding-right: 3rem;
          float: right;
        }
        ul {
          li {
            float: left;
            margin-left: 1rem;
            font {
              color: #898989;
              font-size: 1.2rem;
              margin-left: 0.3rem;
            }
          }
        }
      }
      .img {
        padding-right: 3rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
