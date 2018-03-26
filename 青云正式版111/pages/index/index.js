// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [],
    hot: [],
    indicatorDots: true,
    autoplay: true,
    vautoplay: false,
    interval: 5000,
    duration: 700,
    circular: true,
    videostyle: 'display:none',
    viewstyle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getData();
    that.getData1();
    that.getData2();
  },
  play:function(){
    var that = this;
    that.setData({
      videostyle:'',
      viewstyle:'display:none'
    })
  },
  videoclose:function(){
    var that = this;
    that.setData({
      videostyle: 'display:none',
      viewstyle: ''
    })
  },
  getData1: function () {
    var that = this;
    wx.request({
      url: "https://www.iqytech.net/qy/class/getindexclass",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof(res.data));

        that.setData({
          hot: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },

  getData: function () {
    var that = this;
    wx.request({
      url: "https://www.iqytech.net/qy/index/getimg",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof(res.data));

        that.setData({
          imgUrls: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },
  getData2: function () {
    var that = this;
    wx.request({
      url: "https://www.iqytech.net/qy/class/getindexclass",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof(res.data));

        that.setData({
          menu: res.data
          
        });
        console.log(that.data.menu)
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
    
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












