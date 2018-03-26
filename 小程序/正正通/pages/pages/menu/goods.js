// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
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
      data: {},
      header: { "Content-Type": "applciation/json" },

      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));
        // console.log(id)
        that.setData({
          menus1: res.data,

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})




 

 



  
 
