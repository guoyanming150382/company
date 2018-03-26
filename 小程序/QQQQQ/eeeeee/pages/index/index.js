// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabHeight:"1677rpx",
    menus: [
      {   

        "url": 'https://www.hnxpsit.com/qy/img/qygy3.jpg'
      }, {

        "url": 'https://www.hnxpsit.com/qy/img/qygy4.jpg'
      }, {

        "url": 'https://www.hnxpsit.com/qy/img/qygy5.jpg'
      }, {

        "url": 'https://www.hnxpsit.com/qy/img/qygy7.jpg'
      }, {

        "url": 'https://www.hnxpsit.com/qy/img/qygy10.jpg'
      }, {

        "url": 'https://www.hnxpsit.com/qy/img/qygy12.jpg'
      }],
    menus1: [
      {
        'text1':"丁高远",
        "text2":"中国政法大学硕士",
        "text3":"查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher1.jpg'
      }, {
        'text1': "靳健文",
        "text2": "河南大学汉语言博士",
        "text3": "查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher2.jpg'
      }, {
        'text1': "鲁之政",
        "text2": "华中师范大学数学博士",
        "text3": "查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher3.jpg'
      }, {
        'text1': "李艳敏",
        "text2": "211高校副教授",
        "text3": "查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher4.jpg'
      }, {
        'text1': "韩齐武",
        "text2": "法学硕士",
        "text3": "查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher5.jpg'
      }, {
        'text1': "彭胜利",
        "text2": "中国政法大学法学博士",
        "text3": "查看更多信息 >>",
        "url": 'https://www.hnxpsit.com/qy/img/teacher6.jpg'
      }],
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    // imgUrls: [

    //   { "url": 'https://www.hnxpsit.com/qy/img/tooopen_sy_175866434296.jpg' }, { "url": 'https://www.hnxpsit.com/qy/img/tooopen_sy_175866434296.jpg' },
    //   { "url": 'https://www.hnxpsit.com/qy/img/tooopen_sy_175866434296.jpg' }, { "url": 'https://www.hnxpsit.com/qy/img/tooopen_sy_175866434296.jpg' }, { "url": 'https://www.hnxpsit.com/qy/img/tooopen_sy_175866434296.jpg' }
    // ],
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



  getData: function(){
    var that=this;
    wx.request({
      url: "https://www.hnxpsit.com/qy/index/getimg",
      data:{},
      header: {"Content-Type":"applciation/json"},
      success:function(res){
        console.log(res.data);
        console.log(typeof(res.data));

        that.setData({
          imgUrls: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },


  
    
       
  




  bindChange: function (e) {
    var height = ["1677rpx", "1050rpx", "850rpx"]
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
    that.setData({currentTab: e.detail.current,
      tabHeight: height[e.detail.current]
       })
    };

  },
  swichNav: function (e) {
    var height=["1677rpx","1050rpx","850rpx"];
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({currentTab: e.target.dataset.current,
        tabHeight:height[e.target.dataset.current]
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




 

 



  
 
