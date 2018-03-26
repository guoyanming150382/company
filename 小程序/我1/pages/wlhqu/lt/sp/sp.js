 // pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus1: [
      {
        'text1': "冰淇淋套餐卡冰淇淋套餐卡冰淇淋套餐卡淇淋套餐卡淇淋套餐卡，",
        "text2": "冰淇淋1号套餐，A型电话卡",
        "text3": "201",
        "text5": "1",
        "text6": "123",
        "url": '/image/dk.jpg'
      },
      {
        'text1': "冰淇淋套餐卡冰淇淋套餐卡餐卡淇淋套餐卡淇淋套餐卡",
        "text2": "冰淇淋1号套餐，A型电话卡.09",
        "text3": "201",
        "text4": "201",
        "text5": "1",
        "text6": "133",
        "url": '/image/dk.jpg'
      },
      {
        'text1': "冰淇淋套餐卡冰淇淋套餐卡餐卡淇淋套餐卡淇淋套餐卡",
        "text2": "冰淇淋1号套餐，A型电话卡.09",
        "text3": "201",
        "text4": "201",
        "text5": "1",
        "text6": "132",
        "url": '/image/dk.jpg'
      },
      {
        'text1': "冰淇淋套餐卡冰淇淋套餐餐卡淇淋套餐卡淇淋套餐卡卡",
        "text2": "冰淇淋1号套餐，A型电话卡.09",
        "text3": "201",
        "text4": "201",
        "text5": "1",
        "text6": "123",
        "url": '/image/dk.jpg'
      },
    ],

    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    
    imgUrls:[],
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

    this.getData();
  },

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




 

 



  
 
