<template>
<div class='container'>
<div class="userinfo">
<img src='' alt='' />
<p>{{userinfo.nikename}}</p>
</div>
<YearProgress></YearProgress>
<button class='btn' @click='addBook'>添加图书</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {}
    };
  },
  created() {
    console.log('我的天啦噜')
    // this.userinfo = wx.getStorageSync("userinfo");
    // console.log(userinfo);
  },
  methods: {
    addBook() {
      wx.scanCode({
        success: res => {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style >
.container {
  padding: 0 30rpx;
}
.userinfo {
  margin-top: 100rpx;
}
.btn {
  background: #ea5149;
  color: #fff;
}
</style>
