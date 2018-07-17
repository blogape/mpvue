<template>
<div class='bdripes-home'>
 <Header :Htitle="titlemsg" :issearch="issearch"></Header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">综合最佳</mt-tab-item>
  <mt-tab-item id="2">收藏最多</mt-tab-item>
  <mt-tab-item id="3">做过最多</mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div v-for='(breaddata,key) in breaddata.list' :key='key'>
    <Recipefood :breaddata='breaddata'></Recipefood>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
     <div v-for='(breaddata,key) in breaddata.list' :key='key'>
    <Recipefood :breaddata='breaddata'></Recipefood>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
     <div v-for='(breaddata,key) in breaddata.list' :key='key'>
    <Recipefood :breaddata='breaddata'></Recipefood>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>

<script>
import Header from "../Header/header.vue";
import Recipefood from "../Breadrecipes/recipefood/recipefood.vue";
export default {
  data() {
    return {
      selected: "1",
      titlemsg: "牛扒机食谱",
      issearch: true,
      breaddata: ""
    };
  },
  components: {
    Header,
    Recipefood
  },
  methods: {
    brerecipe() {
      console.log(this.$route.params)
      var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/es/searchByCategory?token=666666&size=20&option=0&category="+this.$route.params.recipesid
      )
        .then(function(response) {
          console.log(response);
          _this.breaddata = response.data.data;
          // console.log(_this.recipesdata);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {

    this.$nextTick(() => {
      this.brerecipe();
    });
  }
};
</script>

<style lang='scss'>
.bdripes-home {
  padding-top: 4.5rem;
  .mint-navbar {
    overflow: hidden;
    // border: 1px solid red;
    border-bottom: 0.5px solid #ccc;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.5);
  }
  .mint-tab-container-item {
    // padding: 1rem;
  }
  .recipe-food {
    // padding-right: 1rem;
  }
  .mint-navbar .mint-tab-item.is-selected {
    margin-bottom: -2px;
  }
}
</style>
