<template>
<div>

</div>
</template>

<script>
import { get,showSuccess} from "./util.js";
import qcloud from "wafer2-client-sdk";
import config from "./config.js";
export default {
  async created() {

    let user=wx.getStorageSync('userinfo')
// 设置登录地址
if(!user){
  qcloud.setLoginUrl(config.loginUrl);
    qcloud.login({
      success: function(userInfo) {
        console.log("登录成功", userInfo);
      },
      fail: function(err) {
        showSuccess('登录失败')
        console.log("登录失败", err);
      }
    });
}
    console.log("小程序启动啦");
  },
  methods: {}
};
</script>

<style>
</style>
