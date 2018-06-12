<template>
<!-- 食谱分类 -->
<div class="category-home">
  <!-- 头部导入 -->
<Header :Htitle="titlemsg" :issearch='issearch'></Header>
<!-- 内容 -->
<div class="c-content">
<div class="c-name">
扒类
</div>
<div class="c-container">
<ul>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
</ul>
</div>
</div>
<div class="c-content">
<div class="c-name">
扒类
</div>
<div class="c-container">
<ul>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
</ul>
</div>
</div>
<div class="c-content">
<div class="c-name">
扒类
</div>
<div class="c-container">
<ul>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
  <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
  </li>
   <li>
    <div class="img">
    <img src="https://image.hongbeibang.com/FpLcGeec8seV342vGpWVR_X9puWk?240X240&imageView2/1/w/120/h/120"/>

    </div>
    <span>高筋面粉</span>
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
      titlemsg: '食谱分类',
      issearch:true,
    };
  },
  created(){

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
  .c-content {

    padding:1rem;
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
            color: #4A4A4A;
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
