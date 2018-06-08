<template>
<div class="home">
  <!-- banner图 -->
<div class="banner">
  <div class="block">
    <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>

<!-- 食谱图片 -->
<div class="home_recipe">
<el-row  class="r_row">
  <!-- 大食谱图 -->
  <el-col :span="6" class="recope_bgray">
  <a class="recipe_box" href="#">
    <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
    <span> 小炒牛肉</span>
  </a>
  </el-col>
  <!-- 小食谱图 -->
  <el-col  :span="18" class="small ">
    <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>
   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>  </el-col>


  <el-col  :span="18" class="small small_two">
    <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>
   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>

   <el-col :span="4" class="recope_bgray">
      <a class="small_recope" href="#">
        <div class="img">
      <img src="https://ali.xinshipu.cn/20120428/original/1335581697815.jpg@300w_225h_90q_1e_1c.jpg"/>
    </div>
      <span> 小炒牛肉</span>
      </a>
      </el-col>  </el-col>





</el-row>
</div>
</div>
</template>

<style  lang='scss'>
.recope_bgray{
  border: 1px solid #dedede;
}
.home {
  width: 100%;
  // border: 1px solid red;
  .banner {
    width: 100%;
  }
  .home_recipe {
    width: 100%;
    margin: 20px 0;

    .small_two{
      margin-top: 20px;
    }
    .el-col {
      overflow: hidden;
    }
    .r_row {
      .recipe_box {
        text-decoration: none;
        width: 100%;
        display: inline-block;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        // border: 1px solid red;
        .img {
          width: 100%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        span {
          display: block;
          width: 100%;
          height: 25px;
          line-height: 25px;
          text-align: center;
        }
      }
      .small {
        .small_recope {
          display: inline-block;
          width: 100%;
          .img {
            img {
              width: 100%;
            }
          }
          span {
            height: 25px;
            width: 100%;
            line-height: 25px;
            display: inline-block;
            text-align: center;
          }
        }
        .el-col-4 {
          margin-left: 20px;
        }
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
