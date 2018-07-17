<template>
    <div class="search">
      <div class="search_header">
      <!-- <router-link tag="span" to="/" class="back"><img src="../../assets/nav_back.png"></router-link> -->
      <span class="back" @click='$router.back(-1)'><img src="../../assets/nav_back.png"></span>

      <div class="input">
      <mt-field  placeholder="想吃什么？" autofocus="autofocus"      v-model="username" @keyup.native="searchFn" ></mt-field>
      <i class="sear_icon"><img src="../../assets/icon_search.png"></i>
      </div>
      <span class="more" @click="addsearch">
          搜索
      </span>
      </div>
     <ul class="dissearch" >
        <li v-for="(item,key) in searchResult" v-on:click="alertFn" :key='key'>{{ item.name }}</li>
    </ul>
    </div>
</template>
<script>
import { Loadmore, Search } from "mint-ui";
import common from "../common/common.js";
export default {
  data() {
    return {
      // 搜索
      username: "",
      searchResult: [],
      // 获取手机识别码
      Obtainsearch: ""
    };
  },
  created() {
    this.judge();
  },
  methods: {
    judge() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid == true) {
        let Addsearch = JSON.parse(localStorage.getItem("myCat"));
        //  alert(Addsearch.imei)
        this.Obtainsearch = Addsearch.imei;
      } else if (isiOS == true) {
        // let Addsearch =  JSON.parse(localStorage.getItem("myCat"))
        // this.Obtainsearch = Addsearch.idfv
        //  alert( this.Obtainsearch)
      }
    },

    // 搜索
    searchFn: function(e) {
      let val = e.target.value;
      this.searchResult = [];
      if (val) {
        let _this = this;
        // 请求数据进行过滤添加
        _this.Ajax.get(
          "http://192.168.1.52:8765/api/search-service/es/keyword?token=666666&size=20&keyword=" +
            val
        ).then(res => {
          let titles = res.data.data.list;
          titles.forEach(e => {
            let titlesval = e.title;
            _this.searchResult.push({ name: titlesval });
          });
        });
      }
    },
    alertFn: function(e) {
      // 点击跳转
        let vname=e.target.innerHTML;
      let _this = this;
      console.log(_this.username );
      const url =
        common.apihost +
        "api/search-service/es/keyword?token=666666&size=20&mobileSn=" +
        this.Obtainsearch +
        "&keyword=" +
        _this.username;
      _this.Ajax.get(url, {}).then(res => {
        // alert(res)
        _this.$router.push({ path: "/seresult/" + vname });
      });
    },
    addsearch() {
      let _this = this;
      const url =
        common.apihost +
        "api/search-service/es/keyword?token=666666&size=20&mobileSn=" +
        this.Obtainsearch +
        "&keyword=" +
        this.username;
      _this.Ajax.get(url, {}).then(res => {
        if (this.username == "") {
          Toast("请填写内容");
        } else {
          _this.$router.push({ path: "/seresult/" + this.username });
        }
      });
    }
  }
};
</script>

<style lang="scss" >
.search {
  .search_header {
    height: 5rem;
    position: relative;
    background: #ffffff;
    width: 100%;
    border-bottom: 0.05rem solid #cccccc;
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
        color: #010101;
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
}
.dissearch {
  z-index: 658;
  width: 100%;
  position: absolute;
  background-color: #ffffff;

  li {
    margin: 0 1.5rem 0 1.5rem;
    height: 4.2rem;
    font-size: 1.4rem;
    color: #4a4a4a;
    line-height: 4.2rem;
    border-bottom: 0.005rem solid #cccccc;
  }
}
</style>


