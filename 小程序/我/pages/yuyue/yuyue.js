// pages/yuyue/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip: '',
    userName: '',
    tel: '',
    picker1Value: 0,//时间选择器
    dateValue: '2016-10-13',//时间选择器
  },
  formBindsubmit: function (e) {//内容不能为空的验证
    if (e.detail.value.userName.length == 0) {
      this.setData({
        tip: '请输入姓名',
      })
    } else if(e.detail.value.tel.length==0){
      this.setData({
        tip:'请输入手机号码'
      })
    } else if (e.detail.value.cp.length == 0) {
      this.setData({
        tip: '请输入车牌号'
      })
    } else if (e.detail.value.pl.length == 0) {
      this.setData({
        tip: '请输入排量'
      })
    } else{
      this.setData({
        tip: '',
      })
    }
  },
  formReset: function () {
    this.setData({
      tip: '',
      userName: '',
      tel: '',
      pl:''
    })
  },
  datePickerBindchange:function (e) {//时间选择器
    this.setData({
      dateValue: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    if ((e.detail.value)==""){
      this.setData({
        tip: '请输入排量6666666666'
      })
    }else{
      this.setData({
        tip: ''
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