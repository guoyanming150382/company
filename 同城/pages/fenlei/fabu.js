// pages/index/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadImage:"",
    style1:"display:block",
    style2: "display:none",
    yyArray: ["置顶1天", "置顶2天", "置顶3天", "置顶4天", "置顶5天", "置顶6天",],
    yyIndex: 0,
    picker1Value: 0,
    stylez:"display:none",
    stylezd:"height:72.5rpx;",
    tip:""
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
  chooseImage: function () {//上传图片
    wx.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          imagePath: res.tempFilePaths[0],
        })
      },
    })
  },
  uploadImage: function () {
    const filePath = this.data.imagePath;
    wx.uploadFile({
      url: 'http://192.168.1.210:3000/upload',
      filePath: filePath,
      name: 'file',
      complete: (res) => {
        console.log("987", res);
        this.setData({
          uploadImage: res.data
        })
      }
    })
  },
  shoudong: function () {
    var that = this;
    that.setData({
      style1: "display:none",
      style2: "display:block",
      stylez:"display:block;",
      stylezd: "height:225.5rpx;"
    });
  },
  shoudong1: function () {
    var that = this;
    that.setData({
      style1: "display:block",
      style2: "display:none",
      stylez: "display:none;",
      stylezd: "height:72.5rpx;"
    });
  },
  formSubmit: function (e) {
    if (e.detail.value.tel.length == 0) {
      this.setData({
        tip: '请 输 入 您 的 电 话 号 码',
      })
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      this.setData({ 
        tip: '手 机 格 式 不 正 确',
      })
    } else {
      this.setData({
        tip: '',
      })
      this.showToast()
    }
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












