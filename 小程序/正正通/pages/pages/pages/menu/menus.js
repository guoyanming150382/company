// pages/menu/menus.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    menus: [
      // {
      // url: "https://www.iqytech.net/qy/img/goods1.jpg"
      // }
    ],
    openId:"",
    classid:"",
    style:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().globalData.userInfo = options.id;
    this.getData();
    
  },
  
  getGlobalVar: function () {
    var that = this;
    that.setData({
      globalvar_str: JSON.stringify(getApp().globalData)
    });
  },
  
  getData: function () {
    var that = this;
    
    var id = getApp().globalData.userInfo;
    wx.request({
      url: "https://www.hnxpsit.com/qy/class/getclassbyid?id=" + id,
      data: {},
      header: { "Content-Type": "applciation/json" },
      
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));
        // console.log(id)
        that.setData({
          menus: res.data,
          classid: id
        });
        
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
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
  getOpenId: function (code) {
    var that = this;
    wx.request({
      url: 'https://www.emmmmm.xyz/order/getopenid', 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'code': code },
      success: function (res) {
        var openId = res.data.openid;
        that.xiadan(openId);
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },


  payoff: function (e) {
    var that = this;
    
    wx.login({
      success: function (res) {
        that.getOpenId(res.code);
        // console.log(res.code)
        
      }
    });

  },
  //获取openid
  getOpenId: function (code) {
    var that = this;
    // console.log(that)
    
    
    var CODE = code;
    console.log(code)
    wx.request({
      url: 'https://www.hnxpsit.com/weixinpay/GetOpenId',
      mothed:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 
        
        code:CODE,
        
        
      },
      success: function (res) {
        console.log(res)
        var openId = res.data.openid;
        that.setData({
          openId: openId,
          style: "display:block"
        });
        
        
        console.log(openId)
      }
    })
  },
  //下单
  xiadan: function (openId) {
    var that = this;
    wx.request({
      url: 'https://www.hnxpsit.com/weixinpay/xiadan',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'openid': openId },
      success: function (res) {
        // console.log(res)
        var prepay_id = res.data.prepay_id;
        // console.log("统一下单返回 prepay_id:" + prepay_id);
        that.sign(prepay_id);
      }
    })
  },
  //签名
  sign: function (prepay_id) {
    var that = this;
    wx.request({
      url: 'https://www.hnxpsit.com/weixinpay/sign',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'repay_id': prepay_id },
      success: function (res) {
        that.requestPayment(res.data);

      }
    })
  },
  //申请支付
  requestPayment: function (obj) {
    wx.requestPayment({
      'timeStamp': obj.timeStamp,
      'nonceStr': obj.nonceStr,
      'package': obj.package,
      'signType': obj.signType,
      'paySign': obj.paySign,
      'success': function (res) {
        
       
      },
      'fail': function (res) {
      }
    })
  },
  formSubmit: function (e) {
    console.log('表单已提交,数据为：', e.detail.value)
    console.log(e)
    var _this = this;
    wx.request({
      url: 'https://www.hnxpsit.com/qy/order/neworder',
      data:
      {
        name: e.detail.value.name,
        tel: e.detail.value.phone,
        address: e.detail.value.address,
        code: e.detail.value.openId,
        classid: e.detail.value.classid
      }
      ,
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


      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  

})