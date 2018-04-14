// pages/index/index1.js
var bmap = require('../../bai/bmap-wx.js'); 
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    currentCity: ''  ,
    style1: "display:block",
    style2: "none",
    style3: "none", 
    style11:"color:red;background:#fff",
    style12: "",
    style13: "",
    style14: "",
    style15: "",
    style16: "",
    ulti:"",
    imgUrls: [{ "url1": '../../image/pro.png', "url2": '../../image/zhao.png', "url3": '../../image/fw.png', "url4": '../../image/es.png', "url5": '../../image/gg.png', "url6": '../../image/jy.png', "url7": '../../image/jz.png', "url8": '../../image/wx.png', "name1": "求职", "name2": "招聘", "name3": "房屋租售", "name4": "二手交易", "name5": "商业促销", "name6": "教育培训", "name7": "家政保洁", "name8": "安装维修","dizhi":"fabu" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular:true,
    indicatorDots: false,
    ak: "FHG7utZtdyXN2", //填写申请到的ak    
    markers: [],
    longitude: '',   //经度    
    latitude: '',    //纬度    
    address: '',     //地址    
    cityInfo: {},     //城市信息    
    menus1: [
      { "ulti":"youxiuqiye",
        "url": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3007699287,472935738&fm=27&gp=0.jpg',
        text: '许昌正通'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2485104426,209203913&fm=27&gp=0.jpg',
        text: '许昌腾讯'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522208240578&di=52ecc45256d746aa073026928ee94a2d&imgtype=0&src=http%3A%2F%2Fqy.ctoutiao.com%2Fuploads%2F2018%2F02%2F07%2F1517996215565840.jpg',
        text: '许昌360'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522208264635&di=4065ddec15b46d10f029f0499636861c&imgtype=0&src=http%3A%2F%2Fqjyimg.qjy168.com%2Fqstact%2Froutine%2Fanli1.png',
        text: '许昌万达'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522803001&di=6cc5beea36ea05a25f810fdb9bcb5a9b&imgtype=jpg&er=1&src=http%3A%2F%2F2015.figo.cn%2FUploads%2F201512%2F567a5e7d0b7f7.png',
        text: '许昌鄢陵'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=397442657,2838741810&fm=27&gp=0.jpg',
        text: '许昌宣城'
      },
      {
        "ulti": "youxiuqiye",
        "url": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=397442657,2838741810&fm=27&gp=0.jpg',
        text: '许昌宣城'
      },
      {
        "ulti": "youxiuqiye",
        "url": '../../image/more.png',
        text: '查看更多'
      },
    ],
    menus2: [
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        text: '1hjsdhsjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text1: '1hjsdh2314124312431412143141合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨尔', text2: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
      {
        "text": '98788988很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲二附院嘎嘎渔家傲飞洒发合计萨sjsf很骄傲6', text3: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text4: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔', text5: '1hjsdhsjsf很骄//////////////////////二附院嘎嘎渔家傲飞洒发合计萨尔'
      },
    ],
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();         
  },
  ont1: function () {
    var that = this;
    that.setData({
      style1: "display:block",
      style2: "display:none",
      style3: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
      style11: "color:red;background:#fff",
      style12: "",
      style13: "",
      style14: "",
      style15: "",
      style16: "",
    });
  },
  ont2: function () {
    var that = this;
    that.setData({
      style2: "display:block",
      style1: "display:none",
      style3: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
      style12: "color:red;background:#fff",
      style11: "",
      style13: "",
      style14: "",
      style15: "",
      style16: "",
    });
  },
  ont3: function () {
    var that = this;
    that.setData({
      style3: "display:block",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:none",
      style13: "color:red;background:#fff",
      style12: "",
      style11: "",
      style14: "",
      style15: "",
      style16: "",
    });
  },
  ont4: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:block",
      style5: "display:none",
      style6: "display:none",
      style13: "",
      style12: "",
      style11: "",
      style14: "color:red;background:#fff",
      style15: "",
      style16: "",
    });
  },
  ont5: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:block",
      style6: "display:none",
      style13: "",
      style12: "",
      style11: "",
      style14: "",
      style15: "color:red;background:#fff",
      style16: "",
    });
  },
  ont6: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      style5: "display:none",
      style6: "display:block",
      style13: "",
      style12: "",
      style11: "",
      style14: "",
      style15: "",
      style16: "color:red;background:#fff",
    });
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
  getLocation: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84',   //<span class="comment" style="margin:0px;padding:0px;border:none;">默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标</span><span style="margin:0px;padding:0px;border:none;"> </span>  
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=VdTfmCNciCw3qGcPRDH9jvzawIwSosoI&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success    
        console.log(res);
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      },

    })
  }  ,
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
