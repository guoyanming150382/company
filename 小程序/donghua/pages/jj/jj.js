// pages/fangzao/fangzao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    userName: '',
    tip: '',
    form_info: "",
    yyArray: ["河南-许昌-魏都区", "河南-许昌-北区", "河南-许昌-东区", "河南-许昌-南区", "河南-许昌-西区", "河南-许昌-建安",],
    yyArray1: ["99冰淇琳套餐", "199冰淇淋套餐",],
    yyIndex: 0,
    yyIndex1: 0,
    pickerValue: 0,
    pickerValue: 0,
    ischeckes:false,
    ischeckes2: false,
    ischecke: false,
    ischecke2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gaibian() {
    if (this.setData.ischeckes==false){
      this.setData({
        ischeckes: true,
        ischeckes2: true
      })
      }else{
      this.setData({
        ischeckes: false,
        ischeckes2: false
      })
      }
  }  ,
  gaibian1() {
    if (this.setData.ischeckes == false) {
      this.setData({
        ischeckes: false,
        ischeckes2: false
      })
    } else {
      this.setData({
        ischeckes: true,
        ischeckes2: true
      })
    }
  },
  gai() {
    if (this.setData.ischecke == false) {
      this.setData({
        ischecke: true,
        ischecke2: true
      })
    } else {
      this.setData({
        ischecke: false,
        ischecke2: false
      })
    }
  },
  gai1() {
    if (this.setData.ischecke == false) {
      this.setData({
        ischecke: false,
        ischecke2: false
      })
    } else {
      this.setData({
        ischecke: true,
        ischecke2: true
      })
    }
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
  bindYyPickerChange1: function (e) {
    if (e.detail.value == 4) {
      this.setData({ reply: true })
    } else {
      this.setData({ reply: false })
    }
    this.setData({
      yyIndex1: e.detail.value
    })
  },
  formBindsubmit: function (e) {//内容不能为空的验证
    // var that = this;
    if (e.detail.value.userName.length == 0) {
      this.setData({
        tip: '请输入姓名',
      })
    } else if (e.detail.value.sf.length == 0) {
      this.setData({
        tip: '请输入身份证号码',
      })
    } else if (e.detail.value.dz.length == 0) {
      this.setData({
        tip: '请输入证件地址',
      })
    } else if (e.detail.value.tel.length == 0) {
      this.setData({
        tip: '请输入联系电话',
      })
    }else if (e.detail.value.ad1.length == 0) {
      this.setData({
        tip: '请输详细地址',
      })
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      this.setData({
        tip: '手机格式不正确',
      })
    } else {
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
        tip: '请阅读入网协议'
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
  bindChange: function (e) {
   
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