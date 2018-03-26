// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    style:"display:none",
    id:"",
    tip:"",
    menus1: [

      // { "url": '../../image/lunbo1.jpg' }, { "url": '../../image/lunbo2.jpg' },
      // { "url": '../../image/lunbo3.jpg' }, { "url": '../../image/lunbo4.jpg' }, { "url": '../../image/lunbo5.jpg' }
    ], indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular: true,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    menus: [
      // { "text1": '领克01', "text2": '331', "text3": '450', "text4": '6500', "text5": '3', "text6": '310', "text7": '8.3', "text8": '7.0', "text9": '1,322,000' }
      ],
    menus3: [{ "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132943.jpg' }, { "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132944.jpg' }, { "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132945.jpg' }, { "url":'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132946.jpg'}]
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
        that.getOpenId(res.code);
      }
    });
    
   
  },
  //openId
  getOpenId: function (code) {
    console.log(code)
    var that = this;
    console.log(that)
    that.setData({
      code2: code
    })
    console.log(that.data.code2)
    wx.request({
      url: 'https://www.emmmmm.xyz/zt/order/getopenid',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'code': code },
      success: function (res) {
        console.log(res)
        var openId = res.data.openid;
        // that.xiadan(openId);
        console.log(openId)
        that.setData({
          code2: openId
        })
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
    // else if (e.detail.value.model.length == 0) {
    //   this.setData({
    //     tip: '请 输 入 车 辆 型 号'
    //   })
    // }
    // else if (e.detail.value.pl.length == 0) {
    //   this.setData({
    //     tip: '请输入排量'
    //   })
    // }
    else {
      this.setData({
        tip: '提交成功',
        style: 'display:none'
      })
      this.showToast()
        
    }
    console.log('表单已提交,数据为：', e.detail.value)
    // console.log(e)
    var _this = this;
    wx.request({
      url: 'https://www.emmmmm.xyz/zt/carorder/order',
      data:
      {
        // type: e.detail.value.type,
        // subdate: e.detail.value.subdate,
        // time: e.detail.value.time,
        uname: e.detail.value.name,
        tel: e.detail.value.tel,
        carid: e.detail.value.model,
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
  showToast: function (e) {//点击显示成功提交
    wx.showToast({
      title: '提交成功',
      icon: "success",
      duration: 1500,
      mask: true,
      success: function (res) {
        console.log(res);
      }
    })
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
      url: "https://www.emmmmm.xyz/zt/car/detail?id=" + id,
      data: {
        
      },
      header: { "Content-Type": "applciation/json" },

      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));
        // console.log(id)
        that.setData({
          menus1: res.data,
          id: id
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
  show:function(){
    var that = this
    that.setData({
      style:"display:block"
    })
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




 

 



  
 
