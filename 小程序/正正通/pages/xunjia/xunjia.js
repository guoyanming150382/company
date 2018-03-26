// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    userName: '',
    tel: '',
    style: ''
  },
  formBindsubmit: function (e) {//内容不能为空的验证
    if (e.detail.value.userName.length == 0) {
      this.setData({
        tip: '请输入姓名',
        style: 'width:300rpx;height:90rpx;background-color:#000;color:white;text-align:center;line-height:90rpx;margin:auto;'
      })
    } else if (e.detail.value.tel.length == 0) {
      this.setData({
        tip: '请输入手机号码',
        style: 'width:300rpx;height:90rpx;background-color:#000;color:white;text-align:center;line-height:90rpx;margin:auto;padding-left:30rpx;padding-right:30rpx'
      })
    } else {
      this.setData({
        tip: '',
        style: ''
      })
    }
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
