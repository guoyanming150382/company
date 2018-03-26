// pages/user/yygc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code2:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.login({
      success: function (res) {
        that.getOpenId(res.code);        
      }
    });
  },
  getOpenId: function (code) {    
    console.log(code)
    var that = this;
    console.log(that)
    that.setData({
      code2:code
    })
    console.log(that.data.code2)
    wx.request({
      url: 'https://www.emmmmm.xyz/zt/order/getopenid',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'code': code },
      success: function (res) {
        console.log(res)
        var openId = res.data.openid;
        // that.xiadan(openId);
        console.log(openId)
      }
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