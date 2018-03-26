// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus1: [
      {
        'text1': "1",
        "text2": "2012.09",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516603766&di=bc8996f7851f289e5da655ac305dcae7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ffaf2b2119313b07e38510ffc06d7912396dd8c52.jpg'
      },
      {
        'text1': "2",
        "text2": "2012.09",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516603766&di=bc8996f7851f289e5da655ac305dcae7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ffaf2b2119313b07e38510ffc06d7912396dd8c52.jpg'
      },
      {
        'text1': "3",
        "text2": "2012.09",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516603766&di=bc8996f7851f289e5da655ac305dcae7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ffaf2b2119313b07e38510ffc06d7912396dd8c52.jpg'
      },
      {
        'text1': "4",
        "text2": "2012.09",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516603766&di=bc8996f7851f289e5da655ac305dcae7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ffaf2b2119313b07e38510ffc06d7912396dd8c52.jpg'
      },
    ],

    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    // imgUrls:[],
    // indicatorDots: true,
    // autoplay: true,
    // interval: 5000,
    // duration: 700,
    // circular:true
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




 

 



  
 
