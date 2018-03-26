// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    avatarUrl: "",
    yyArray: ["小程序", "网站建设", "软件开发", "系统开发", "网络推广", "APP定制",],
    userName: '',
    mobile: '',
    Gender: 'female',
    yyIndex: 0,
    picker1Value: 0,
    tip: ""
  },
  bindYyPickerChange: function (e) {
    if (e.detail.value == 4) {
      this.setData({ reply: true })
    } else {
      this.setData({ reply: false })
    }
    this.setData({
      yyIndex: e.detail.value
    })

  },
  formSubmit: function (e) {
    if (e.detail.value.name.length == 0) {
      this.setData({
        tip: '请 输 入 您 的 姓 名',
      })
    } else if (e.detail.value.tel.length == 0) {
      this.setData({
        tip: '请 输 入 您 的 电 话 号 码'
      })
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      this.setData({
        tip: '手机格式不正确',
      })
    }else {
      this.setData({
        tip: '',
      })
      this.showToast()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.calling();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  showToast: function (e) {//点击显示成功提交
    wx.showToast({
      title: '提交成功',
      icon: "success",
      duration: 1500,
      mask: true,
      success: function (res) {

      }
    })
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