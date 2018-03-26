// pages/user/user.js
var _app = getApp()
Page({
  /**
   * 页面的初始数据   LCF13333997565微信
   */
  data: {
    
    menuitems: [
      { text: '优惠券', icon: 'http://59.110.163.174/qy/img/go.jpg', url: 'discount' },
      { text: 'XXXX', icon: 'http://59.110.163.174/qy/img/go.jpg', url: 'order' },
      { text: '拨打电话', icon: 'http://59.110.163.174/qy/img/go.jpg', url: 'history' },
      { text: '联系客服', icon: 'http://59.110.163.174/qy/img/go.jpg', url: '' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13333997565',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
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
   * 
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