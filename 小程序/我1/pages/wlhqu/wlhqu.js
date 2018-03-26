//index.js
//获取应用实例
// const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
  data: {
    x: 0,
    y: 0,
    imgUrls: [
      // { "url": '../../image/lunbo1.jpg' },
      // { "url": '../../image/lunbo2.jpg' },
      // { "url": '../../image/lunbo3.jpg' }, 
      // { "url": '../../image/lunbo4.jpg' }, 
      // { "url": '../../image/lunbo5.jpg' }, 
      // { "url": '../../image/lunbo6.jpg' }
    ],
    hot: [
      // { "url": "../../image/hot1.jpg", "size": "车型1", "price": "售价: 1111111", "url2": "../../image/hot2.jpg", "size2": "车型2", "price2": "售价: 2222222", "url3": "../../image/hot3.jpg", "size3": "车型3", "price3": "售价: 3333333" }, { "url": "../../image/hot4.jpg", "size": "车型4", "price": "售价: 4444444", "url2": "../../image/hot5.jpg", "size2": "车型5", "price2": "售价: 5555555", "url3": "../../image/hot6.jpg", "size3": "车型6", "price3": "售价: 6666666" }, { "url": "../../image/hot7.jpg", "size": "车型7", "price": "售价: 7777777", "url2": "../../image/hot8.jpg", "size2": "车型8", "price2": "售价: 8888888", "url3": "../../image/hot9.jpg", "size3": "车型9", "price3": "售价: 9999999" }, { "url": "../../image/hot10.jpg", "size": "车型10", "price": "售价: 10000000", "url2": "../../image/hot11.jpg", "size2": "车型11", "price2": "售价: 11111111", "url3": "../../image/hot12.jpg", "size3": "车型12", "price3": "售价: 12222222" } 
    ],
    menus: [
      {
        "name": "过户/入户",
        "url": '../../image/change.png',
        "turn": "../test/gh"
      }, {
        "name": "转入/转出",
        "url": '../../image/zhuan.png',
        "turn": "../test/zr"
      }, {
        "name": "抵押/解押",
        "url": '../../image/diya.png',
        "turn": "../test/dy"
      }, {
        "name": "审车",
        "url": '../../image/shenche.png',
        "turn": "../test/sc"
      }, {
        "name": "保险",
        "url": '../../image/safe.png',
        "turn": "../test/bx"
      }, {
        "name": "分期",
        "url": '../../image/times.png',
        "turn": "../test/fq"
      },
    ],
    menu: [
      // {
      //   "name": "商品1 商品1 商品1 商品1 ",
      //   "price":"售价: 1111111",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "name": "商品2 商品2 商品2 商品2 ",
      //   "price": "售价: 2222222",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "name": "商品3 商品3 商品3 商品3 ",
      //   "price": "售价: 3333333",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "name": "商品4 商品4 商品4 商品4 ",
      //   "price": "售价: 4444444",
      //   "url": '../../image/goods.jpg'
      // }, 
      // {
      //   "name": "商品5",
      //   "price": "售价: 5555555",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "name": "商品6",
      //   "price": "售价: 6666666",
      //   "url": '../../image/goods.jpg'
      // },
    ], menus1: [
      // {
      //   "text1": "商品1 商品1 商品1 商品1 商品1 商品1 ",
      //   "text2": "6.66万公里/2016年",
      //   "text3": "售价: 1111111",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "text1": "商品2 商品2 商品2 商品2 商品2 商品2 ",
      //   "text2": "6.66万公里/2016年",
      //   "text3": "售价: 2222222",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "text1": "商品3 商品3 商品3 商品3 商品3 商品3 ",
      //   "text2": "6.66万公里/2016年",
      //   "text3": "售价: 3333333",
      //   "url": '../../image/goods.jpg'
      // }, {
      //   "text1": "商品4 商品4 商品4 商品4 商品4 商品4 ",
      //   "text2": "6.66万公里/2016年",
      //   "text3": "售价: 4444444",
      //   "url": '../../image/goods.jpg'
      // },
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
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      },

    });

    this.getData();
  },
  getData: function () {
    var that = this;
    wx.request({
      url: "https://www.emmmmm.xyz/zt/index/getimg",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));

        that.setData({
          imgUrls: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },
})




