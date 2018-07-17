<template>
<!-- 主题食谱 -->
<div class="them-home">
 <Header :Htitle="titlemsg" :issearch="issearch"></Header>
 <div class="t-content">
   <!-- 标题 -->
 <div class="title">
{{themdata.title}}
 </div>
 <!-- 作者 -->
<div class="author">
<i class="iconfont icon icon-fl-renyuan"></i>{{themdata.nickname}}
</div>
<!-- 描述 -->
<div class="describle">
{{themdata.description}}
</div>

<div class="hr">
<span class="left"></span>
<span class="text">{{themdata.pageInfo.total}}道美味</span>
<span class="right"></span>
</div>
 </div>
<div v-for='(themlist,key) in themlist' :key='key'>
<Tcontent :themlist='themlist'></Tcontent>

</div>
</div>
</template>

<script>
import Header from "../Header/header.vue";
import Tcontent from "./themcontent/themcontent.vue";
export default {
  data() {
    return {
      titlemsg: "主题食谱",
      issearch: false,
      themdata:'',
      themlist:''
    };
  },
  components: {
    Header,
    Tcontent
  },
    methods:{
      handlethem(){
        console.log(this.$route.params.recipesid)
         var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/recipeTopic/detail?token=666666&size=20&topicId="+this.$route.params.recipesid
      )
        .then(function(response) {
          console.log(response);
          _this.themdata = response.data.data;
          _this.themlist=response.data.data.pageInfo.list;
          // console.log(_this.themlist)
          // console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });
      }
    },
    created(){
      this.handlethem();
    }
};
</script>

<style lang='scss'>
.them-home {
  background-color: #fff;
  width: 100%;
  padding-top: 4.5rem;
  .t-content {
    background-color: #fff;
    padding: 0 1rem;
    .title {
      width: 100%;
      margin-left: 0.5rem;
      color: #4a4a4a;
      letter-spacing: -0.43px;
      height: 6rem;
      font-size: 1.6rem;
      line-height: 6rem;
    }
    .author {
      // overflow: hidden;
      font-size: 1.6rem;
      line-height: 2.2rem;
      color: #4a4a4a;
      letter-spacing: -0.39px;
      i {
        margin-right: 0.5rem;
        color: #ccc;
        float: left;
        font-size: 3rem;
      }
    }
    .describle {
      padding: 1rem 0;
      font-size: 1.4rem;
      color: #4a4a4a;
      letter-spacing: -0.39px;
      line-height: 2.5rem;
    }
    .hr {
      position: relative;
      text-align: center;
      margin: 0px auto 15px auto;
      padding: 1.5rem 0;
      overflow: hidden;
      .left {
        height: 1px;
        display: inline-block;
        vertical-align: middle;
        width: 6rem;
        height: 1px;

        display: inline-block;
        background-image: linear-gradient(
          90deg,
          rgba(204, 204, 204, 0) 0%,
          #cccccc 98%
        );
      }
      .right {
        display: inline-block;
        vertical-align: middle;
        width: 6rem;
        height: 1px;
        display: inline-block;
        transform: rotate(-180deg);
        background-image: linear-gradient(
          90deg,
          rgba(204, 204, 204, 0) 0%,
          #cccccc 98%
        );
      }
      .text {
        vertical-align: middle;
        font-size: 1.4rem;
        padding: 0 1rem;
        color: #3cadff;
        letter-spacing: -0.34px;
      }
    }
  }
}
</style>
