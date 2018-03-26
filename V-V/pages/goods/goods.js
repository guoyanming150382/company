// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { "text1": 'WEY VV5', "text2": '145', "text3": '190', "text4": '2', "text5": '197', "text6": '4', "text7": '4749*1931*1655', "text8": '7.8', "text9": '100', "text9": '150000' }],
    menus3: [{ "url": '../../image/v51.jpg' }, { "url": '../../image/v52.jpg' }, { "url": '../../image/v53.jpg' }, { "url": '../../image/v54.jpg' }, { "url": '../../image/v55.jpg' }]
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




 

 



  
 
