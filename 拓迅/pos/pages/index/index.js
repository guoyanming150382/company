// pages/index/index1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    imgUrls: [

      { "url": 'http://www.emmmmm.xyz/tx/lb1.jpg' }, { "url": 'http://www.emmmmm.xyz/tx/lb1.jpg' },
      { "url": 'http://www.emmmmm.xyz/tx/lb1.jpg' }, { "url": 'http://www.emmmmm.xyz/tx/lb1.jpg' }, 
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular:true,
    tabheight:"760rpx",
    menus1: [
      {
        "url": 'http://www.emmmmm.xyz/tx/lo1.jpg',
        text: '优质团队打造'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/q2.png',
        text: '趣味拓展'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/lo2.jpg',
        text: '客户联谊拓展'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/q4.png',
        text: "“地狱式”魔鬼训练"
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/lo3.jpg',
        text: '荒岛求生'
      },
    ],
    menus2: [
      {
        "url": 'http://www.emmmmm.xyz/tx/s1.png',
        text: '学生军训'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/lo2.jpg',
        text: '野外求生'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s2.png',
        text: '高空挑战'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/css.png',
        text: "真人CS对抗赛"
      },
    ],
    menus3: [
      {
        "url": 'http://www.emmmmm.xyz/tx/s3.png',
        text: '党性教育拓展'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s4.png',
        text: '红色文化主题拓展'
      },
      ],
    menus4: [
      {
        "url": 'http://www.emmmmm.xyz/tx/s5.png',
        text: 'MPA|MBA拓展课'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s6.png',
        text: '沙漠掘金'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s7.png',
        text: '迷宫商城'
      },
    ],
    menus5: [
      {
        "url": 'http://www.emmmmm.xyz/tx/s8.png',
        text: '企业安保'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s9.png',
        text: '院校托管'
      },
    ],
    menus6: [
      {
        "url": 'http://www.xuelema.com/attached/image/20160712/20160712175348_2851.jpg',
        text: '夏令营'
      },
      {
        "url": 'http://uploads.yjbys.com/allimg/201612/45-1612011G349.jpg',
        text: '冬令营'
      },
    ],
    menus7: [
      {
        "url": 'http://www.emmmmm.xyz/tx/s11.png',
        text: '1'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s12.png',
        text: '2'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s13.png',
        text: '3'
      },
      {
        "url": 'http://www.emmmmm.xyz/tx/s14.png',
        text: '4'
      }
    ],
    styleaa: "display:block;",
    sty1:"display:none;",
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  show: function () {
    this.setData({
      styleaa: "display:block",
      sty1: "display:none;",
    })
  },
  next:function(){
    var currentTab = this.data.currentTab;
    if (currentTab<6){
      currentTab += 1;
    }else{
      currentTab=0;
    }
    this.setData({
      currentTab: currentTab
    })
  },
  hide: function () {
    this.setData({
      styleaa: "display:none",
      sty1: "display:block;",
    })
  },
  bindChange: function (e) {
    var height=["760rpx","506rpx","254rpx","506rpx","254rpx","254rpx","506rpx"];
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({ currentTab: e.detail.current,
      tabheight:height[e.detail.current] })
    };
  },
  swichNav: function (e) {
    var height = ["760rpx", "506rpx", "254rpx", "506rpx", "254rpx", "254rpx", "506rpx"];
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        tabheight: height[e.target.dataset.current]
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
