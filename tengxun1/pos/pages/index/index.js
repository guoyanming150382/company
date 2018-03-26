// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    imgUrls: [

      { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' },
      { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular:true,
    menus1: [
      {
        "url": '../../image/lunbo.jpg',
        text: '1'
      },
      {
        "url": '../../image/lunbo.jpg',
        text: '2'
      },
      {
        "url": '../../image/lunbo.jpg',
        text: '3'
      },
      {
        "url": '../../image/lunbo.jpg',
        text: '4'
      },
      {
        "url": '../../image/lunbo.jpg',
        text: '5'
      },
      {
        "url": '../../image/lunbo.jpg',
        text: '6'
      },
    ],

    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // xx: function () {
  //   wx.navigateTo({
  //     url: 'xiangxi'
  //   })
  // },
  bindChange: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({ currentTab: e.detail.current })
    };
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
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
