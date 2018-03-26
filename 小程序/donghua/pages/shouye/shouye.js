// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

      { "url": '../../images/l1.png' }, { "url": '../../images/l2.png' },
      { "url": '../../images/l3.png' }
    ],
    // imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular: true,
    tu:false,
    tu1:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  select1() {
    if (this.setData.tu == false) {
      this.setData({
        tu: true,
        tu1: false
      })
    } else {
      this.setData({
        tu: false,
        tu1: true
      })
    }
  },
  select2() {
    if (this.setData.tu1 == false) {
      this.setData({
        tu: false,
        tu1: true
      })
    } else {
      this.setData({
        tu: true,
        tu1: false
      })
    }
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