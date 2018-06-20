<template>
<!-- 食谱分类 -->
<div class="category-home">
  <!-- 头部导入 -->
<Header :Htitle="titlemsg" :issearch='issearch'></Header>
<!-- 内容 -->
<div class="c-content" v-for='(items,key) in catdata' :key='key'>
<div class="c-name">
{{items.recipeCategory.categoryName}}
</div>
<div class="c-container">
<ul>
  <li v-for='(vdata,index) in items.recipeCategorys' :key='index'>
    <router-link :to="{ name:'Recipecat', params: { recipesid: vdata.categoryName }}" >
    <div class="img">
    <img :src="vdata.img"/>
    </div>
    <span>{{vdata.categoryName}}</span>
    </router-link>
  </li>

</ul>
</div>
</div>

</div>
</template>

<script>
import Header from "../Header/header.vue";
export default {
  data() {
    return {
      titlemsg: "食谱分类",
      catdata:"",
      issearch: true
    };
  },
  created() {
    this.catedata();
  },
  methods: {
    catedata() {
      var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/category/listAllByTree?token=666666"
      )
        .then(function(response) {
          console.log(response);
          _this.catdata = response.data.data;
          // console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  components: {
    Header
  }
};
</script>

<style lang='scss'>
.category-home {
  padding-top: 4.5rem;
  width: 100%;
  a{
    display: inline-block;
  }
  .c-content {
    padding: 1rem;
    .c-name {
      height: 3rem;
      width: 100%;
      line-height: 3rem;
      text-align: center;
      font-size: 1.6rem;
    }
    .c-container {
      width: 100%;
      padding: 1rem 0;
      background-color: #fff;
      overflow: hidden;
      ul {
        li {
          margin-top: 1rem;
          width: 25%;
          overflow: hidden;
          float: left;
          text-align: center;
          .img {
            overflow: hidden;
            height: 6rem;
            img {
              width: 70%;
            }
          }

          span {
            color: #4a4a4a;
            font-size: 1.2rem;
            height: 3rem;
            line-height: 3rem;
            display: inline-block;
            text-align: center;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
