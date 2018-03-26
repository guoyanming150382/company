//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      { "url": 'https://www.emmmmm.xyz/vv-v/image/lo1.jpg' },
      { "url": 'https://www.emmmmm.xyz/vv-v/image/lo2.jpg' },
      { "url": 'https://www.emmmmm.xyz/vv-v/image/lo3.jpg' },
      { "url": 'https://www.emmmmm.xyz/vv-v/image/lo4.jpg' }
    ],
    imgUrls1: [
      { "text": "VV5红", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/red/car05.png' },
      { "text": "VV5白", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/white/car01.png' },
      { "text": "VV5灰", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/gray/car03.png' },
      { "text": "VV5黑", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/black/car04.png' },
      { "text": "VV5藍", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/blue/car06.png' },
      { "text": "VV5銀", "url": 'https://www.emmmmm.xyz/vv-v/image/VV5/silvery/car02.png' },
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
