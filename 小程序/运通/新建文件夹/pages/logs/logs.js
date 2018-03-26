//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: 'logs.html',
    nav:['首页','团检','服务','更多']
  },
  onLoad: function () {
    console.log(getCurrentPages())
  },
  onShow() {
    console.log(getCurrentPages())
  },
  refloga() {
    wx.navigateBack({
        url:"../../pages/index/index"
   
    })
  
  }
})
