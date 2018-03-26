//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      { "url": '../../image/lo1.jpg' },
      { "url": '../../image/lo2.jpg' },
      { "url": '../../image/lo3.jpg' },
      { "url": '../../image/lo2.jpg' }
    ],
    imgUrls1: [
      { "text": "VV5红", "url": '../../image/VV5/red/car05.png' },
      { "text": "VV5白", "url": '../../image/VV5/white/car01.png' },
      { "text": "VV5灰", "url": '../../image/VV5/gray/car03.png' },
      { "text": "VV5黑", "url": '../../image/VV5/black/car04.png' },
      { "text": "VV5藍", "url": '../../image/VV5/blue/car06.png' },
      { "text": "VV5銀", "url": '../../image/VV5/silvery/car02.png' },
    ],
    menus: [
      { "luj":"../qyjj/qyjj",
        "name": "企业简介",
        "url": '../../image/index-1.png'
      }, {
        "luj": "../jrfa/jrfa",
        "name": "金融方案",
        "url": '../../image/index-2.png'
      }, {
        "luj": "../wxby/wxby",
        "name": "维修保养",
        "url": '../../image/index-3.png'
      }, {
        "luj": "../jdyl/jdyl",
        "name": "进店有礼",
        "url": '../../image/index-4.png'
      },
    ],
    menus1: [
      {
        "text1": "商品1 商品1 商品1 商品1 商品1 商品1 ",
        "text2": "6.66万公里/2016年",
        "text3": "售价: 1111111",
        "url": 'http://59.110.163.174/qy/img/goods.jpg'
      }, {
        "text1": "商品2 商品2 商品2 商品2 商品2 商品2 ",
        "text2": "6.66万公里/2016年",
        "text3": "售价: 2222222",
        "url": 'http://59.110.163.174/qy/img/goods.jpg'
      }, {
        "text1": "商品3 商品3 商品3 商品3 商品3 商品3 ",
        "text2": "6.66万公里/2016年",
        "text3": "售价: 3333333",
        "url": 'http://59.110.163.174/qy/img/goods.jpg'
      }, {
        "text1": "商品4 商品4 商品4 商品4 商品4 商品4 ",
        "text2": "6.66万公里/2016年",
        "text3": "售价: 4444444",
        "url": 'http://59.110.163.174/qy/img/goods.jpg'
      },
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular: true,
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
  },
  //事件处理函数
  bindViewTap: function () {

  },
  
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
  }
})
