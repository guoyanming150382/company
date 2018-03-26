// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        "name":"商品1",
        "url": '../../image/goods.png'
      }, {
        "name": "商品2",
        "url": '../../image/goods.png'
      }, {
        "name": "商品3",
        "url": '../../image/goods.png'
      }, {
        "name": "商品4",
        "url": '../../image/goods.png'
      }, 
      // {
      //   "name": "商品5",
      //   "url": '../../image/goods.png'
      // }, {
      //   "name": "商品6",
      //   "url": '../../image/goods.png'
      // }
      ],
    
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    imgUrls: [

      { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' },
      { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }, { "url": '../../image/lunbo.jpg' }
    ],
    // imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular:true
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

    // this.getData();
  },

  // getData: function(){
  //   var that=this;
  //   wx.request({
  //     url: "http://59.110.163.174/qy/index/getimg",
  //     data:{},
  //     header: {"Content-Type":"applciation/json"},
  //     success:function(res){
  //       console.log(res.data);
  //       console.log(typeof(res.data));

  //       that.setData({
  //         imgUrls: res.data
  //       });
  //     },
  //     fail: function (err) { },//请求失败
  //     complete: function () { },//请求完成后执行的函数
  //   })
  // },

  bindChange: function (e) {

    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
    that.setData({ currentTab: e.detail.current })
    };

  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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
