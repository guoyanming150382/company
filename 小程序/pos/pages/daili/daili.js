// pages/fangzao/fangzao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    userName: '',
    tip:'',
    form_info: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formBindsubmit: function (e) {//内容不能为空的验证
    // var that = this;
    if (e.detail.value.userName.length == 0) {
      this.setData({
        tip: '请输入姓名',
      })
    }else if (e.detail.value.tel.length == 0) {
      this.setData({
        tip: '请输入手机号码',
      })
    }else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      this.setData({
        tip: '手机格式不正确',
      })
    }else {
      this.setData({
        tip: '',
      })
      // this.checkboxChange();
      this.showToast();
    }
  },
  checkboxChange: function (e) {
    var that = this;
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    if ((e.detail.value) == "") {
      this.setData({
        tip: '请阅读分销商申请协议'
      })
    } else {
      this.setData({
        tip: ''
      })
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