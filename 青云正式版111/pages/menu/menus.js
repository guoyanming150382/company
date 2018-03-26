// pages/menus/menu.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prepayId:'',
    tip: "",
    userInfo: {},
    code2: "",
    classid: "",
    style: "display:none",
    menus1: [],
    form_info:"",
    // texts: [

    //   { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' },
    //   { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }
    // ],
    // imgs: [

    //   { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' },
    //   { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }
    // ],
    // imgUrls: [

    //   { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' },
    //   { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }
    // ], 
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular: true,
    winWidth: 0,
    winHeight: 0,
    tip:"",
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    getApp().globalData.userInfo = options.id;
    this.getData();

    wx.login({
      success: function (res) {
        // that.getOpenId1(res.code);
        that.getOpenId(res.code);
      }
    });
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
      url: "https://www.iqytech.net/qy/class/getclassbyid?id=" + id,
      data: {

      },
      header: { "Content-Type": "applciation/json" },

      success: function (res) {
        that.setData({
          menus1: res.data,
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
  payoff: function (e) {
    var that = this;
    wx.login({
      success: function (res) {
        that.getOpenId1(res.code);
        // that.getOpenId(res.code);
      }
    });
  },
  getOpenId1: function (code) {
    var that = this;
    wx.request({
      url: 'https://www.iqytech.net/wxpay/prepay',
      mothed: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: code,
      },
      success: function (res) {
        var prepayId = res.data.prepayId;
        console.log(res)
        that.setData({
          prepayId: prepayId
        });   
        that.sign(prepayId);

      }
    })
  },
  getOpenId: function (code) {
    var that = this;
    // console.log(that)
    wx.request({
      url: 'https://www.iqytech.net/weixinpay/GetOpenId',
      mothed: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: code,
      },
      success: function (res) {
        that.setData({code2: res.data.openid})
      }
    })
  },
  //下单
  // xiadan: function (openId) {
  //   var that = this;
  //   wx.request({
  //     url: 'https://www.iqytech.net/weixinpay/xiadan',
  //     method: 'POST',
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     data: {
  //       openid: openId,
  //       total_fee: 1,
  //       },
  //     success: function (res) {
  //       console.log(res)
  //       var prepay_id = res.data.prepay_id;

  //     }
  //   })
  // },
  //签名
  sign: function (prepay_id) {
    var that = this;
    wx.request({
      url: 'https://www.iqytech.net/wxpay/sign',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { prepayId: prepay_id },
      success: function (res) {
        console.log(res)
        that.requestPayment(res.data);
      }
    })
  },
  //申请支付
  requestPayment: function (obj) {
    var that = this;
    wx.requestPayment({
      'timeStamp': obj.timeStamp,
      'nonceStr': obj.nonceStr,
      'package': obj.package,
      'signType': obj.signType,
      'paySign': obj.paySign,
      'success': function (res) {
        console.log(that.data.classid)
        wx.navigateTo({
          url: '../user/order?id='+that.data.classid
        })

      },
      'fail': function (res) {
      }
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
    }
    else if (e.detail.value.model.length == 0) {
      this.setData({
        tip: '请 输 入 身 份 证 号'
      })
    }
    // else if (e.detail.value.pl.length == 0) {
    //   this.setData({
    //     tip: '请输入排量'
    //   })
    // }
    else {
      this.setData({
        tip: '提交成功',
        style: 'display:none',
        form_info:""
      })
      this.showToast()

    }
    console.log('表单已提交,数据为：', e.detail.value)
    // console.log(e)
    var _this = this;
    wx.request({
      url: 'https://www.iqytech.net/qy/order/neworder',
      data:
      {
        // type: e.detail.value.type,
        // subdate: e.detail.value.subdate,
        // time: e.detail.value.time,
        name: e.detail.value.name,
        tel: e.detail.value.tel,
        address: e.detail.value.model,
        code: e.detail.value.code,
        // pl: ""
        // address: e.detail.value.address,
        // code: e.detail.value.openId,
        classid: e.detail.value.classid
      },

      method: 'POST',
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
        if (res.data.statu == 1) {
          _this.setData({
            tip: '',

          })
          _this.setData({
            form_info: ''
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

  show: function () {
    var that = this
    that.setData({
      style: "display:block"
    })
  },
  modalcnt: function () {
    var that= this;
    wx.showModal({
      title: '提示',
      content: '点击确认支付',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          that.payoff();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }  
})