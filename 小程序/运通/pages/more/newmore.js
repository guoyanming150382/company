var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    menus1: [
      // {
      //   'text1': "斯巴鲁XV 2.0i 精英版",
      //   "text3": "2012年9月",
      //   "text2": "6万公里",
      //   "text4":"6666666",
      //   "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      // },
      // {
      //   'text1': "斯巴鲁XV 2.0i 精英版",
      //   "text3": "2012.09",
      //   "text2": "6万公里",
      //   "text4": "6666666",
      //   "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      // },
      // {
      //   'text1': "斯巴鲁XV 2.0i 精英版",
      //   "text3": "2012年9月",
      //   "text2": "6万公里",
      //   "text4": "6666666",
      //   "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      // },
      // {
      //   'text1': "斯巴鲁XV 2.0i 精英版",
      //   "text3": "2012.09",
      //   "text2": "6万公里",
      //   "text4": "6666666",
      //   "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      // },
      // {
      //   'text1': "斯巴鲁XV 2.0i 精英版",
      //   "text3": "2012年9月",
      //   "text2": "6万公里",
      //   "text4": "6666666",
      //   "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      // },
      ],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().globalData.userInfo = options.type;
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
    var type = getApp().globalData.userInfo;
    wx.request({
      url: "https://www.emmmmm.xyz/zt/car/newmore",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));

        that.setData({
          menus1: res.data
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