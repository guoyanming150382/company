// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    cars:[
      // {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // }, {
      //   img: "../../image/lunbo4.jpg",
      //   name: "车辆型号",
      //   price: "6666666",
      //   year: "2016年",
      //   mile: "6.66万公里"
      // },
    ], 
    remote: 'index.html',
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    red: "red",
    arr: [],
    nav: [
      { content: '1万元以下', color: true },
      { content: '1-3万元', color: false },
      { content: '3-5万元', color: false },
      { content: '5-10万元', color: false },
      { content: '10-20万元', color: false },
      { content: '20-50万元', color: false },
      { content: '50万元以上', color: false },
    ]
  },
  mkdir(e) {
    var that = this
    console.log(e)
    // console.log(e.target.id)
    let arr = [];

    for (var i = 0; i < that.data.nav.length; i++) {
      
      
      
      if (e.target.id == i) {
        arr[i] = { content: that.data.nav[i].content, color: true }
        // console.log("true")
      } else {
        arr[i] = { content: that.data.nav[i].content, color: false }
        // console.log("false")
      }
      
    }
    that.setData({
      nav: arr
    })
    var num = e.target.id - 0 + 1;
    console.log(num)
    that.getData(num);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.logg(getCurrentPages())
    this.getData1()
  },
  getGlobalVar: function () {
    var that = this;
    that.setData({
      globalvar_str: JSON.stringify(getApp().globalData)
    });
  },
  getData: function (num) {
    var that = this;
    var type = num;
    wx.request({
      url: "https://www.emmmmm.xyz/zt/car/price?limit=" + type,
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res);
        // console.log(typeof (res.data));

        that.setData({
          cars: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },
  getData1: function () {
    var that = this;
    wx.request({
      url: "https://www.emmmmm.xyz/zt/car/price?limit=1",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));

        that.setData({
          cars: res.data
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
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  logg: function (i) {
    console.log(i)
  }
})