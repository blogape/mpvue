//工具函数库

import config from "./config";

export function request(url, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      success: function(res) {
        if (res.data.code == 0) {
          reslove(res.data.data);
        } else {
          reject(res.data);
        }
      }
    });
  });
}

export function showSuccess(text) {
  wx.showToast({
    title: '登录失败',
    icon: 'fail',
    duration: 2000
  })
}
