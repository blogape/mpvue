<template>

  <!-- 轮播图 -->
  <swiper :options="swiperOption" :not-next-tick="notNextTick"  ref="mySwiper">
    <swiper-slide v-for="(banner,key) in bannerdata.list" :key='key'> <router-link to='' ><img :src="banner.image"/></router-link> </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      notNextTick: true,
      bannerdata: "",
      swiperOption: {
        autoplay: 3500,
        loop: true,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        debugger: true,
        inter: null,
        onTransitionStart(swiper) {}
      }
    };
  },
  methods: {
    banner() {
      // 首页轮播图数据调用
      var _this = this;
      this.Ajax.get(
        "http://192.168.1.52:8765/api/search-service/indexBanner/list?token=666666&size=20"
      )
        .then(function(response) {
          _this.bannerdata = response.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    // 首页轮播图方法
    this.banner();
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination {
  margin-top: 5rem;
  height: 2rem;
  width: 5rem;
  z-index: 99;
  bottom: 0rem !important;
}
</style>
