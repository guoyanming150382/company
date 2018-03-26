// pages/user/user.js
var _app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabHeight: "1888rpx",
    videostyle: 'display:none',
    viewstyle: '',
    

    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    menuitems: [
      { text: '优惠券', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: 'discount' },
      { text: '我的订单', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: 'order' },
      { text: '青云简介', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: 'qyjj' },
      { text: '风采展示', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: 'fczs' },
      { text: '青云荣誉', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: 'qyry' },
      { text: '联系客服', icon: 'https://www.iqytech.net/qy/img/go.jpg', url: '' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })


    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  bindChange: function (e) {
    var height = ["1900rpx", "1722rpx", "3500rpx"];
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.detail.current,
        tabHeight: height[e.detail.current]
      })

    };

  },
  play: function () {
    var that = this;
    that.setData({
      videostyle: '',
      viewstyle: 'display:none'
    })
  },
  videoclose: function () {
    var that = this;
    that.setData({
      videostyle: 'display:none',
      viewstyle: ''
    });
  },
  click: function (e) {
    wx.openLocation({
      latitude: 34.03945,
      longitude: 113.87184,
      scale: 18,
      name: '河南省青云教育总校',
      address: '河南省许昌市八一东路骏景尚都B座'
    })
  }, 
  
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18603742633',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  swichNav: function (e) {
    var height = ["1888rpx", "1700rpx", "3500rpx"];
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        tabHeight: height[e.target.dataset.current]
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
    let that = this
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })
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