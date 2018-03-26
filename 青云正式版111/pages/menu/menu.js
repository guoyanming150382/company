// pages/menu/menu.js
var WxParse = require('../../wxParse/wxParse.js');


var app = getApp()

Page({
  
  data: {
    style1: "",
    style2: "",
    style3: "",
    bstyle1: "",
    bstyle2: "",
    bstyle3: "",
    bstyle4: "",
    img1: "../../image/gwy1.png",
    img2: "../../image/zgz1.png",
    img3: "../../image/xl1.png",
    menus2: [
      {
        "type": "会计",
        "url": '../../image/kuaiji.png'
      }, {
        "type": "建筑",
        "url": '../../image/jianzhu.png'
      }, {
        "type": "教师",
        "url": '../../image/jiaoshi.png'
      }, {
        "type": "医师",
        "url": '../../image/yishi.png'
      },{
        "type": "园长",
        "url": '../../image/yuanzhang.png'
      }
    ],
    menus3: [
      {
        "type": "成人教育",
        "url": '../../image/chengren.png'
      }, {
        "type": "电大及其它",
        "url": '../../image/dianda.png'
      }, {
        "type": "自考",
        "url": '../../image/zikao.png'
      }, {
        "type": "远程",
        "url": '../../image/yuancheng.png'
      }
    ],
    menus4: [
      {
        "type": "公务员",
        "url": '../../image/gongwuyuan.png'
      }, {
        "type": "教师",
        "url": '../../image/jiaoshi.png'
      }, {
        "type": "警察",
        "url": '../../image/jingcha.png'
      }, {
        "type": "农信社及银行",
        "url": '../../image/yinhang.png'
      }, {
        "type": "事业单位",
        "url": '../../image/shiye.png'
      }
    ],
    menus: [
      {
        "type":"公务员考试",
        "url": '../../image/gwy.png'
      }, {
        "type": "资格证考试",
        "url": '../../image/zgz.png'
      }, {
        "type": "学历提升",
        "url": '../../image/xl.png'
      }, {
        "type": "其他",
        "url": '../../image/qt.png'
      }
    ],
    menus1:[],
    
  },
  
  onLoad: function () {
    this.getData();
    // 页面初始化 
  },
  showhide1: function(){
    var that = this;
    that.setData({
      style1: "display:flex",
      style2: "display:none",
      style3: "display:none",
      bstyle1: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      img1:"../../image/gwy.png",
      img2: "../../image/zgz1.png",
      img3: "../../image/xl1.png",
    });
  },
  showhide2: function () {
    var that = this;
    that.setData({
      style2: "display:flex",
      style1: "display:none",
      style3: "display:none",
      bstyle2: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      img1: "../../image/gwy1.png",
      img2: "../../image/zgz.png",
      img3: "../../image/xl1.png",
      
    });
  },
  showhide3: function () {
    var that = this;
    that.setData({
      style3: "display:flex",
      style2: "display:none",
      style1: "display:none",
      bstyle3: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      img1: "../../image/gwy1.png",
      img2: "../../image/zgz1.png",
      img3: "../../image/xl.png",
    });
  },
  showhide: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      
    });
  },
  getData: function () {
    var that = this;
    wx.request({
      url: "https://www.iqytech.net/qy/class/getindexclass",
      data: {},
      header: { "Content-Type": "applciation/json" },
      success: function (res) {
        // console.log(res.data);
        // console.log(typeof (res.data));

        that.setData({
          menus1: res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { },//请求完成后执行的函数
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  

 




})
