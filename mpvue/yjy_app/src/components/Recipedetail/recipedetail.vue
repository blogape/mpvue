<template>
<!-- 食谱详情 -->
<div class="redetail-home">
<Header :Htitle="titlemsg" :issearch="issearch" :isshare='isshare'></Header>
<!-- 要删除的东西 -->
<div class="bitch_img">
<img :src="redata.images"/>
</div>
<!-- <Banner></Banner> -->
<!-- 作者 -->
<div class="author">
  <i class="icon iconfont icon-fl-renyuan"></i> <font>宜居云</font>
</div>
<!-- 标题 -->
<div class="re-title">
{{redata.title}}
</div>
<div class="re-lable">
<ul>
  <li>难度：配菜(中级)  </li>
  <li>制作时间：{{redata.timeCost}}分钟以上</li>
</ul>
</div>
<!-- 描述 -->
<div class="re-describle">
<p>{{redata.description}}</p>
</div>
<!-- 食材 -->
<div class="re-ingredients">
<div class="header">
<ul>
  <li>
食料 <font>{{vlength}}种</font>  <span>加入购物清单</span>
  </li>

</ul>
</div>

<div class="content">
<ul>
  <li v-for='(itemsdata,key) in redata.recipeIngredientMids' :key='key'>
   <div class="name">
{{itemsdata.ingredientName}}
   </div>
   <font>
{{itemsdata.unitAndAmount}}
   </font>
  </li>

</ul>
</div>

<!-- <div class="header">
<ul>
  <li>
配料 <font>3种</font>  <span>加入购物清单</span>
  </li>

</ul>
</div>

<div class="content">
<ul>
  <li>
   <div class="name">
高粉
   </div>
   <font>
380g
   </font>
  </li>
    <li>
   <div class="name">
淡奶油
   </div>
   <font>
奶粉
   </font>
  </li>
    <li>
   <div class="name">
高粉
   </div>
   <font>
380g
   </font>
  </li>
</ul>
</div> -->
</div>
<!-- 步骤 -->
<div class="re-steps">
<ul>
  <li v-for='(cookdata,index) in redata.cookingSteps' :key='index'>
    <div class="step_number">
      步骤{{cookdata.stepno}}
    </div>
    <div class="img">
      <img :src="cookdata.images"/>
    </div>
    <!-- 描述 -->
    <div class="decrible">
   {{cookdata.description}}
    </div>
  </li>

</ul>
</div>
<!-- 小贴士 -->
<!-- <div class="prompt"> -->
<!-- <div class="title">
小贴士
</div> -->
<!-- 描述 -->
<!-- <div class="describle">
因为不同面粉吸水量是不同的，因此液体不要一次加完，可以先预留一些，最后根据实际情况再加。我的高粉吸水量很一般，如果觉得面团偏干可以多加10克左右的水！
</div>
</div> -->
<!-- 机器购买 -->
<!-- <div class="re-shopping">
<div class="title">
支持设备
</div>
<div class="content">
<ul>
<li v-for='(items,key) in redata.recipeMacModelMids' :key='key'>{{items.macName}} {{items.macModel}}  <span>参考价399¥</span></li>
</ul>
</div>
</div> -->
<div class="re-reading">
<span>阅读 {{redata.readCount}}</span> <font>{{redata.createTime}}</font>
</div>
</div>
</template>

<script>
import Header from "../Header/header.vue";
import Banner from "../Index/banner/banner.vue";
export default {
  data() {
    return {
      titlemsg: "食谱详情",
      issearch: false,
      isshare: true,
      redata:'',
      vlength:""
    };
  },
  components: {
    Header,
    Banner
  },
  methods:{
    rededata(){
    var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/recipe/recipeDetail?token=666666&recipeId="+this.$router.history.current.params.recipesid)
        .then(function(response) {
          console.log(response);
          _this.redata = response.data.data;
           _this.vlength= _this.redata.recipeIngredientMids.length;
          // console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });

    }
  },
  created(){
    console.log(this.$router.history.current.params.recipesid);
    // this.$nextTick(()=>{

    // })
this.rededata();
  }
};
</script>

<style lang='scss'>
.redetail-home {
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  .bitch_img{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .author {
    font-size: 1.6rem;
    color: #4a4a4a;
    border-bottom: 0.5px solid #eaeaea;
    letter-spacing: -0.39px;
    padding: 2rem 1rem;
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
  .re-title {
    padding: 1rem;
    font-size: 1.6rem;
    color: #4a4a4a;
    letter-spacing: -0.43px;
  }
  .re-lable {
    padding: 0 1rem;
    overflow: hidden;
    ul {
      li:first-child {
        margin-left: 0;
      }
      li {
        font-size: 1.2rem;
        color: #898989;
        letter-spacing: -0.34px;
        float: left;
        margin-left: 2rem;
      }
    }
  }
  .re-describle {
    color: #4a4a4a;
    letter-spacing: -0.39px;
    line-height: 2.4rem;
    padding: 1rem;
    p {
      font-size: 1.3rem;
    }
  }
  .re-ingredients {
    border-bottom: 0.5px solid #eaeaea;

    padding: 0 1rem;
    .header {
      font-size: 1.6rem;
      padding: 1rem 0;
      ul {
        li {
          font-size: 1.6rem;
          overflow: hidden;
          span {
            font-size: 1.4rem;
            color: #3cadff;
            float: right;
          }
          font {
            font-size: 1.2rem;
            color: #898989;
            letter-spacing: -0.34px;
          }
        }
      }
    }
    .content {
      overflow: hidden;
      height: auto;
      border-bottom: 0.5px solid #eaeaea;
      padding-bottom: 2rem;
      ul {
        li {
          padding: 1rem 0;
          font-size: 1.4rem;
          display: flex;
          color: #4a4a4a;
          overflow: hidden;
          .name {
            font-size: 1.4rem;
            flex: 1;
          }
          font {
            font-size: 1.4rem;
            padding-right: 5rem;
            float: right;
          }
        }
      }
    }
  }
  .re-steps {
    padding: 2rem 1rem;
    border-bottom: 0.5px solid #eaeaea;
    ul {
      li:first-child {
        margin-top: 1rem;
      }
      li {
        overflow: hidden;
        margin-top: 2rem;
        .step_number {
          font-size: 1.6rem;
        }
        .img {
          padding: 1rem 0;
          img {
            border-radius: 0.5rem;
            width: 100%;
          }
        }
        .decrible {
          font-size: 1.4rem;
          color: #4a4a4a;
          line-height: 2.4rem;
          letter-spacing: -0.39px;
        }
      }
    }
  }
  .prompt {
    padding: 1rem;
    border-bottom: 0.5px solid #eaeaea;
    .title {
      font-size: 1.6rem;
    }
    .describle {
      margin-top: 1rem;
      font-size: 1.4rem;
      color: #4a4a4a;
      letter-spacing: -0.39px;
      line-height: 2.4rem;
    }
  }
  .re-shopping {
    padding: 1rem 1rem  2rem 1rem;
    height: auto;
    border-bottom: 0.5px solid #eaeaea;
    .title {
      height: 3rem;
      line-height: 3rem;
      color: #4a4a4a;
      letter-spacing: -0.39px;
      text-align: center;
      font-size: 1.6rem;
    }
    .content {
      color: #4a4a4a;
      letter-spacing: -0.39px;
      font-size: 1.4rem;
      ul {
        li {
          overflow: hidden;
          padding: 1rem 0;
          color: #4a4a4a;
          letter-spacing: -0.39px;
          font-size: 1.4rem;
          span {
            float: right;
            font-size: 1.2rem;
            color: #898989;
            letter-spacing: 0;
          }
        }
      }
    }
  }
  .re-reading {
    padding: 2rem 1rem;
    font-size: 1.4rem;
    color: #898989;
    letter-spacing: -0.34px;
    flex: 1;
    span {
      float: left;

      font-size: 1.4rem;
    }
    font {
           flex: 1;
      float: right;
      font-size: 1.4rem;
    }
  }
}
</style>
