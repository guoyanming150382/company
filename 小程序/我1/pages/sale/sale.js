// pages/test/test.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    avatarUrl: "",
    yyArray: ["卖车"],
    userName: '',
    mobile: '',
    Gender: 'female',
    yyIndex: 0,
    picker1Value: 0,
    dateValue: '2018-01-01',
    yearsValue: '2017-01-01',
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
  yearsPickerBindchange: function (e) {
    this.setData({
      yearsValue: e.detail.value
    })
  },

  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  formBindsubmit: function (e) {//内容不能为空的验证
    
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
    } else if (e.detail.value.model.length == 0) {
      this.setData({
        tip: '请 输 入 车 辆 型 号'
      })
    } 
    // else if (e.detail.value.pail.length == 0) {
    //   this.setData({
    //     tip: '请输入排量'
    //   })
    // }
     else {
      this.setData({
        tip: '',
      })
    }
    console.log('表单已提交,数据为：', e.detail.value)
    console.log(e)
    var _this = this;
    wx.request({
      url: 'https://www.hnxpsit.com/zt/update/form',
      data:
      {
        type: e.detail.value.type,
        subdate: e.detail.value.subdate,
        time: e.detail.value.time,
        name: e.detail.value.name,
        tel: e.detail.value.tel,
        model: e.detail.value.model,
        pl: ""
        // address: e.detail.value.address,
        // code: e.detail.value.openId,
        // classid: e.detail.value.classid
      },

      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        var err = res.data.error
        if (err) {
          _this.setData({
            error: err
          })
        }
        // wx.navigateTo({
        //   url: '../index/index',
        // })

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete

        wx.navigateTo({
          url: '../index/index',
        })
      }
    })

  }
})






