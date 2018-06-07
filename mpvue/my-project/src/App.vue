<template>
<div>

</div>
</template>

<script>
import {get} from './util.js';
import qcloud from 'wafer2-client-sdk';
import config from './config.js';
export default {
async created(){
// const res=await get('');
var qcloud = require('./bower_components/qcloud-weapp-client-sdk/index.js');

// 设置登录地址
qcloud.setLoginUrl('https://199447.qcloud.la/login');
qcloud.login({
    success: function (userInfo) {
        console.log('登录成功', userInfo);
    },
    fail: function (err) {
        console.log('登录失败', err);
    }
});


console.log(123,res);
  console.log('小程序启动啦');
}
}
</script>

<style>

</style>
