// pages/index/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stylt:"display:block",
    stylt1:"display:none",
    count: 0,
    count1:0
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '03746095679',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  add1: function (e) {
    this.setData({
      count1: this.data.count1 + 1
    })
  },
  dian: function () {
    var that = this;
    that.setData({
      stylt: "display:none",
      stylt1: "display:block"
    });
    this.showToast();
  },
  dian1: function () {
    var that = this;
    that.setData({
      stylt: "display:block",
      stylt1: "display:none"
    });
  },
  showToast: function (e) {//点击显示成功提交
    wx.showToast({
      title: '已收藏',
      icon: "success",
      duration: 1500,
      mask: true,
      success: function (res) {

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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