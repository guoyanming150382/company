// pages/menu/menu.js
// var WxParse = require('../../wxParse/wxParse.js');


var app = getApp()

Page({
  
  data: {
    style1: "display:block",
    style2: "none",
    style3: "none",
    style4: "none",
    style5:"none",
    style6:"none"
  },
  
  onLoad: function () {
    // this.getData();
    // 页面初始化 
  },
  showhide1: function(){
    var that = this;
    that.setData({
      style1: "display:block",
      style2: "display:none",
      style3: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
    });
  },
  showhide2: function () {
    var that = this;
    that.setData({
      style2: "display:block",
      style1: "display:none",
      style3: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
    });
  },
  showhide3: function () {
    var that = this;
    that.setData({
      style3: "display:block",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
    });
  },
  showhide4: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:block",
      style5: "display:none",
      style6: "display:none",
    });
  },
  showhide5: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:block",
      style6: "display:none",
    });
  },
  showhide6: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:block",
    });
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
