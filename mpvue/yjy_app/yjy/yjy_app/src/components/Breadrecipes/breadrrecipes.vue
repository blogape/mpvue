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
    <Recipefood></Recipefood>
      <Recipefood></Recipefood>
        <Recipefood></Recipefood>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    2
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    3
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>

<script>
import Header from "../Header/header.vue"
import Recipefood from './recipefood/recipefood.vue'
export default {
  data() {
    return {
      selected: "1",
      titlemsg: "面包机食谱",
      issearch: true
    };
  },
  components: {
    Header,
    Recipefood
  }
};
</script>

<style lang='scss'>
.bdripes-home {
  padding-top: 4.5rem;
  .mint-navbar{
    overflow: hidden;
    // border: 1px solid red;
    border-bottom: 0.5px solid #ccc;
    box-shadow: 0 0 0.1rem rgba(0,0,0,0.5);
  }
  .mint-tab-container-item{
    // padding: 1rem;

  }
  .recipe-food{
    // padding-right: 1rem;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom:-2px;
  }
}
</style>
