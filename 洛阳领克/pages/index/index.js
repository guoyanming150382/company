//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      { "url": 'http://59.110.163.174/qy/img/02.jpg' },
      { "url": 'http://59.110.163.174/qy/img/04.jpg' },
      { "url": 'http://59.110.163.174/qy/img/05.jpg' },
      { "url": 'http://59.110.163.174/qy/img/11.jpg' },
      { "url": 'http://59.110.163.174/qy/img/a1.jpeg' },
      { "url": 'http://59.110.163.174/qy/img/a21.jpeg' }
    ],
    imgUrls1: [
      { "name": "型棕", "name1": "型白", "name2": "型黑", "url": 'http://59.110.163.174/qy/img/City_Brown_High.png', "url1": 'http://59.110.163.174/qy/img/Sport_White.png', "url2": 'http://59.110.163.174/qy/img/City_Black_High.png',  },
      { "name": "型蓝", "name1": "型红", "name2": "型白", "url": 'http://59.110.163.174/qy/img/Louder_Blue.png', "url1": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/ce16d102-46af-4a16-948d-643fbdf12d0b', "url2": 'http://59.110.163.174/qy/img/Sport_White.png',   },
    ],
    menus: [
      { "luj":"../qyjj/qyjj",
        "name": "企业简介",
        "url": '../../image/auto.png'
      }, {
        "luj": "../jrfa/jrfa",
        "name": "金融方案",
        "url": '../../image/Calculator.png'
      }, {
        "luj": "../wxby/wxby",
        "name": "维修保养",
        "url": '../../image/set.png'
      }, {
        "luj": "../jdyl/jdyl",
        "name": "进店有礼",
        "url": '../../image/gifts.png'
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
    indicatorDots: false,
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
