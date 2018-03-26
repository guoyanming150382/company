// pages/menu/menu.js
var WxParse = require('../../wxParse/wxParse.js');


var app = getApp()

Page({
  data: {
    
    menus: [
      {
        "type":"公务员考试",
        "url": '../../image/gwy.png'
      }, {
        "type": "资格证考试",
        "url": '../../image/zgz.png'
      }, {
        "type": "学历提升",
        "url": '../../image/xl.png'
      }, {
        "type": "其他",
        "url": '../../image/qt.png'
      }
    ],menus1:[],
    
  },
  
  onLoad: function () {
    this.getData();
    // 页面初始化 
  },
  getData: function () {
    var that = this;
    wx.request({
      url: "https://www.hnxpsit.com/qy/class/getindexclass",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));

        that.setData({
          menus1: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  

 




})
