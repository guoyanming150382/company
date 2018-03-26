// pages/menus/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    // texts: [

    //   { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' },
    //   { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }, { "text": '商品的文字叙述' }
    // ],
    // price:"6666666",
    // imgs: [

      // { "url": '../../image/lunbo1.jpg' }, { "url": '../../image/lunbo2.jpg' },
      // { "url": '../../image/lunbo3.jpg' }, { "url": '../../image/lunbo4.jpg' }, { "url": '../../image/lunbo5.jpg' }
    // ],
    menus: [

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
      url: "https://www.emmmmm.xyz/zt/car/detail?id=" + id,
      data: {},
      header: { "Content-Type": "applciation/json" },

      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));
        // console.log(id)
        that.setData({
          menus: res.data,
          
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