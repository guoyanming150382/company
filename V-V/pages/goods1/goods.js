// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { "text1": 'WEY VV7', "text2": '172', "text3": '205', "text4": '2', "text5": '197', "text6": '4', "text7": '4462*1857*1638', "text8": '12.1', "text9": '100', "text9": '185000' }],
    menus3: [{ "url": '../../image/v71.jpg' }, { "url": '../../image/v72.jpg' }, { "url": '../../image/v73.jpg' }, { "url": '../../image/v74.jpg' }, { "url": '../../image/v75.jpg' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})




 

 



  
 
