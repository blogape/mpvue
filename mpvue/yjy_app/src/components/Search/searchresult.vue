<template>
<div class="shresult">
<div class="header">
<i class="icon iconfont icon-fanhui" @click='$router.back(-1)'></i>
<div class="input_search" @click='handlepush'>
<span class="input">{{this.$route.params.id}}</span>
<i class="icon iconfont icon-search_001"></i>
</div>
<span class='btn_search' @click='handleSearch'>搜索</span>
</div>
<div class="content" v-for='(breaddata,key) in breaddata.list' :key='key'>
<Recipefood :breaddata='breaddata'></Recipefood>
</div>

</div>
</template>

<script>
import Recipefood from "../Breadrecipes/recipefood/recipefood.vue";
export default {
  data(){
    return{
      breaddata:'',
    }
  },
  components: {
    Recipefood
  },
  created(){
    this.seresult();
  },
  methods:{
    seresult(){
      var _this=this;
      this.Ajax.get('http://192.168.1.52:8765/api/search-service/es/keyword?token=666666&size=20&keyword='+this.$route.params.id).then(function(response){
        console.log(response);
        _this.breaddata=response.data.data;
      })
    },
    handlepush(){
      this.$router.push('/search')
    },
    handleSearch(){
       this.$router.push('/seresult/'+this.$route.params.id)
    }
  }
};
</script>

<style lang='scss'>
.shresult {
  padding-top: 4.5rem;
  .header {
    background-color: #fff;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 4.5rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
    .icon-fanhui{
      display: inline-block;
      width: 4.5rem;
      font-size: 2rem;
      text-align: center;
      line-height: 4.5rem;
      height: 4.5rem;
    }
    .input_search{
      position: relative;
      flex: 1;
      .input{
        height: 3rem;
        text-indent: 4rem;
        line-height: 3rem;
        font-size: 1.3rem;
        margin-top: 0.75rem;
        width: 100%;
        border: 1px solid #ccc;
        display: inline-block;
      }
      i{
        font-size: 2rem;
        position: absolute;
        top:1.5rem;
        left: 1rem;
      }
    }
    .btn_search{
       display: inline-block;
      width: 4.5rem;
      font-size: 1.4rem;
      text-align: center;
      line-height: 4.5rem;
      height: 4.5rem;
    }
  }
}
</style>
