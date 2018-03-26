

// pages/taocan/taocan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liuliang:"0",
    shengwai:"0",
    dianhua:"0"
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
  slider1change:function(e){
    var that = this;
    if (e.detail.value == 0) {
      that.setData({
        dianhua: "0"
      })
    } else if (e.detail.value == 1) {
      that.setData({
        dianhua: "100"
      })
    } else if (e.detail.value == 2) {
      that.setData({
        dianhua: "200"
      })
    } else if (e.detail.value == 3) {
      that.setData({
        dianhua: "300"
      })
    } else if (e.detail.value == 4) {
      that.setData({
        dianhua: "400"
      })
    } else if (e.detail.value == 5) {
      that.setData({
        dianhua: "500"
      })
    } else if (e.detail.value == 6) {
      that.setData({
        dianhua: "600"
      })
    } else if (e.detail.value == 7) {
      that.setData({
        dianhua: "700"
      })
    } else if (e.detail.value == 8) {
      that.setData({
        dianhua: "800"
      })
    } else if (e.detail.value == 9) {
      that.setData({
        dianhua: "900"
      })
    } else if (e.detail.value == 10) {
      that.setData({
        dianhua: "1000+"
      })
    }
  },
  slider2change: function (e) {
    var that = this;

    if (e.detail.value == 0) {
      that.setData({
        liuliang: "0"
      })
    } else if (e.detail.value == 1) {
      that.setData({
        liuliang: "0.1"
      })
    } else if (e.detail.value == 2) {
      that.setData({
        liuliang: "0.3"
      })
    } else if (e.detail.value == 3) {
      that.setData({
        liuliang: "0.5"
      })
    } else if (e.detail.value == 4) {
      that.setData({
        liuliang: "1"
      })
    } else if (e.detail.value == 5) {
      that.setData({
        liuliang: "2"
      })
    } else if (e.detail.value == 6) {
      that.setData({
        liuliang: "3"
      })
    } else if (e.detail.value == 7) {
      that.setData({
        liuliang: "4"
      })
    } else if (e.detail.value == 8) {
      that.setData({
        liuliang: "5"
      })
    } else if (e.detail.value == 9) {
      that.setData({
        liuliang: "6"
      })
    } else if (e.detail.value == 10) {
      that.setData({
        liuliang: "6+"
      })
    }
  },
  slider3change: function (e) {
    var that = this;
    if (e.detail.value == 0) {
      that.setData({
        shengwai: "0"
      })
    } else if (e.detail.value == 1) {
      that.setData({
        shengwai: "1"
      })
    } else if (e.detail.value == 2) {
      that.setData({
        shengwai: "2"
      })
    } else if (e.detail.value == 3) {
      that.setData({
        shengwai: "3"
      })
    } else if (e.detail.value == 4) {
      that.setData({
        shengwai: "4"
      })
    } else if (e.detail.value == 5) {
      that.setData({
        shengwai: "5"
      })
    } else if (e.detail.value == 6) {
      that.setData({
        shengwai: "6"
      })
    } else if (e.detail.value == 7) {
      that.setData({
        shengwai: "7"
      })
    } else if (e.detail.value == 8) {
      that.setData({
        shengwai: "8"
      })
    } else if (e.detail.value == 9) {
      that.setData({
        shengwai: "9"
      })
    } else if (e.detail.value == 10) {
      that.setData({
        shengwai: "10+"
      })
    }
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