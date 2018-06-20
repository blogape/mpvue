<template>
<!-- 搜索页面 -->
<div class="search">
  <!-- 搜索框 -->
    <searchbox></searchbox>
  <div v-show="Record">
      <!-- 热门搜索 -->
      <div class="hot_search">
      <div class="title">
      热门搜索
      </div>
      <!-- 内容 -->
      <div class="hot_content">
      <ul>
        <li v-for="(item,index) in Hot" :key="index">
                <!-- <router-link  tag="a" :to="'/option/'+item">{{item}}</router-link> -->
          <!-- <a href="#" @click="hotidentical(item)">{{item}}</a> -->
          <a  @click="Tohot(item)">{{item}}</a>
        </li>
      </ul>
      </div>
      </div>
      <!-- 历史记录 -->
      <div class="hot_search" style="margin-top:4rem;">
      <div class="title">
      历史记录
      <span  @click="deletehot"><img src="../../assets/icon_delete.png" ></span>
      </div>
      <!-- 内容 -->
      <div class="hot_content">
      <ul >
        <li v-for="(item,index) in History" :key="index">
             <router-link  tag="a" :to="'/seresult/'+item">{{item}}</router-link>
            <!-- <a href="#" @click="hotidentical(item)">{{item}}</a> -->
            <!-- <a href="#">{{item}}</a> -->
        </li>
      </ul>
      </div>
      </div>
  </div>

<!-- 无记录 -->
        <div class="SearchNo-box" v-show="no">
          <div class="SearchNo-content">
                <!-- <img src="../../assets/pic_recording.png" alt=""> -->
          </div>
          <div class="SearchNo-text">
              没有找到相关记录
          </div>
      </div>
</div>
</template>
<script>
import { Toast,MessageBox,Search } from 'mint-ui';
import searchbox from '../Search/Searchbox.vue';
import common from '../common/common.js'
export default {
  components:{
    searchbox
  },
  data(){
    return{
      // 搜索
      username:"",
      no:false,
      Record:true,
      // 热门
      Hot:'',
      History:[],
      // 获取手机识别码
      Obtainsearch:""
    }
  },
  created(){
     // 热门
    this.hossearch()
    this.judge()
  },
  mounted(){
   // 历史记录
      // searchResult:
    this.Records()
  },
  methods:{
    // 判断ios和安卓
        judge(){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          if(isAndroid == true){
            //  alert(localStorage.getItem("myCat"))
              let Addsearch =  JSON.parse(localStorage.getItem("myCat"))
            //  alert(Addsearch.imei)
            this.Obtainsearch = Addsearch.imei
          }else if(isiOS == true){
            // let Addsearch =  JSON.parse(localStorage.getItem("myCat"))
            // this.Obtainsearch = Addsearch.idfv
          }
    },
    // 热门
  hossearch(){
      let _this = this
      const url = common.apihost + "api/search-service/redis/hotSearch?token=666666&count=20"
     _this.Ajax.get(url,{})
     .then(res=>{
        this.Hot = res.data.data
     })
    },
    // 热门跳转
    Tohot(item){
      this.username = item
      let _this = this
      const url = common.apihost + "api/search-service/es/keyword?token=666666&size=20&mobileSn="+this.Obtainsearch+"&keyword="+this.username
      _this.Ajax.get(url,{})
      .then(res=>{
         _this.$router.push({path:"/seresult/"+this.username})
      })
    },
    // 热门绑定
    // hotidentical(item){
    //   // this.username = item
    // },
    // 历史记录
    Records(){
      // alert(this.Obtainsearch)
      let _this = this
      const url = common.apihost + "api/search-service/redis/searchRecord?token=666666&count=10&mobileSn="+this.Obtainsearch
     _this.Ajax.get(url,{})
     .then(res=>{
       this.History = res.data.data
     })
    },

    // 删除用户记录
    deletehot(){
    MessageBox.confirm('确认删除全部历史记录?')
    .then(res => {
     let _this = this
     let url = common.apihost + "api/cms-service/deleteSearchRecord?token=666666&mobileSn="+this.Obtainsearch
      _this.Ajax.post(url,{})
      .then(res=>{
        Toast({
          message: '操作成功',
          position: 'middle',
          duration: 2000
        });
      })
  })

    },


  }
};
</script>
<style lang='scss'>
.search {
  .search_header {
    height: 5rem;
    position: relative;
    background: #ffffff;
    width: 100%;
    border-bottom:0.05rem solid #CCCCCC;
    .back {
      display: inline-block;
      width: 15%;
      text-align: center;
      position: absolute;
      left: 0;
      text-align: center;
      top: 0;
      height: 5rem;
      img {
        height: 4rem;
        text-align: center;
        margin-top: 0.5rem;
      }
    }

    .more {
      display: inline-block;
      width: 15%;
      float: left;
      line-height: 5rem;
      height: 5rem;
      font-family: PingFangSC-Regular;
      font-size: 1.7rem;
      color: #898989;
      letter-spacing: -0.41px;
      text-align: center;
    }
    .input {
      padding-top: 1rem;
      margin-left: 5rem;
      float: left;
      position: relative;
      width: 70%;
      input {
        height: 2rem;
        text-indent: 1.5rem;
        // overflow: hidden;
        // line-height: 3rem;
        font-family: PingFangSC-Regular;
        font-size: 1.4rem;
        color: #cccccc;
        letter-spacing: -0.34px;
      }
      .mint-field {
        // overflow: hidden;
        min-height: 3rem;
        // height: 3rem !important;
        border: 0.5px solid #ccc;
      }
      .mint-cell-wrapper {
        z-index: 999;
        background-image: none !important;
        // background: url('../../assets/icon_search.png') no-repeat 0;
      }
      .mint-cell:last-child {
        background-image: none !important;
      }
      .sear_icon {
        position: absolute;
        left: 0;
        z-index: 999;
        top: 1rem;
        img {
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          height: 2rem;
        }
      }
    }
  }

  // 热门搜索
  .hot_search {
    width: 100%;
    .title {
      // border: 1px solid red;
      height: 3rem;
      font-family: PingFangSC-Regular;
      font-size: 1.4rem;
      color: #4a4a4a;

      letter-spacing: -0.34px;
      text-indent: 2.3rem;
      line-height: 4rem;
      span {
        float: right;
        margin-right: 2rem;
        img {
          height: 1.5rem;
        }
      }
    }
    .hot_content {
      overflow: hidden;
      ul {
        li {
          overflow: hidden;
          float: left;
          background: rgba(60, 173, 255, 0.1);
          margin-left: 2rem;
          height: 1.6rem;
          padding: 0.3rem 0.5rem;
          border-radius: 2.2rem;
          margin-top: 1.5rem;
          line-height: 1.6rem;
          a {
            font-family: PingFangSC-Regular;
            font-size: 1.2rem;
            color: #4a4a4a;
            letter-spacing: -0.29px;
            display: inline-block;
            padding: 0 1rem;
            color: #4a4a4a;
            // background: #3cadff;
          }
        }
      }
    }
  }
}

.SearchNo-box {
  height: 100%;
  width: 100%;

  .SearchNo-content {
    margin: 40% auto;
    width: 18rem;
    height: 18rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .SearchNo-text{
      font-size: 1.4rem;
      color: #898989 ;
      text-align: center;
      margin-top: -16rem;
  }
}
.dissearch{
  z-index: 658;
  width: 100%;
  position: absolute;
  background-color: #ffffff;

  li{
    margin: 0 1.5rem 0 1.5rem;
    height: 4.2rem;
    font-size: 1.4rem;
    color: #4a4a4a ;
    line-height: 4.2rem;
    border-bottom:0.005rem solid #CCCCCC
  }


}
.mint-field-clear{
  display: none;
}
.mint-msgbox-message{
  font-size: 1.4rem;
}
</style>
