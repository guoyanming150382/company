Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { img: "../../image/lunbo.jpg" },
      { img: "../../image/lunbo2.png" },
      { img: "../../image/lunbo1.jpg" },
      { img: "../../image/lunbo3.jpg" },
      { img: "../../image/lunbo.jpg" }
    ],
    color: true,
    color1: false,
    color2: false,
    color3: false,
    style: "display:block", style1: "display:none", style2: "display:none", style3: "display:none",
    red: "red",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    circular: true,
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    selectimg:"../../image/select.png",
    select1style:"color:#fff;",
    select2style: "color:#DED7D6;",
    selectimga: "../../image/notselect.png",
    taocan:"99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍"
  },
  select1:function(){
    console.log(this)
    this.setData({
      selectimg: "../../image/select.png",
      selectimga: "../../image/notselect.png",
      select1style: "color:#fff;",
      select2style: "color:#DED7D6;",
      taocan: "99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍，99元套餐介绍"
    })
  },
  select2: function () {
    this.setData({
      selectimga: "../../image/select.png",
      selectimg: "../../image/notselect.png",
      select2style: "color:#fff;",
      select1style: "color:#DED7D6;",
      taocan: "199元套餐介绍，199元套餐介绍，199元套餐介绍，199元套餐介绍，199元套餐介绍，199元套餐介绍，199元套餐介绍"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.pageScrollTo({
    //   scrollTop: 200
    // })
    // var that = this;

    // wx.getSystemInfo({

    //   success: function (res) {
    //     that.setData({
    //       winWidth: res.windowWidth,
    //       winHeight: res.windowHeight
    //     });
    //   }

    // });

    // this.getData();
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
  
  changetc:function(){
    var that = this
    that.setData({
      color: true,
      color1: false,
      color2: false,
      color3: false,
      style: "display:block", style1: "display:none", style2: "display:none", style3: "display:none",
    })
  },
  changetc1: function () {
    var that = this
    that.setData({
      color: false,
      color1: true,
      color2: false,
      color3: false,
      style: "display:none", style1: "display:block", style2: "display:none", style3: "display:none",
    })
  },
  changetc2: function () {
    var that = this
    that.setData({
      color: false,
      color1: false,
      color2: true,
      color3: false, style: "display:none", style1: "display:none", style2: "display:block", style3: "display:none",
    })
  },
  changetc3: function () {
    var that = this
    that.setData({
      color: false,
      color1: false,
      color2: false,
      color3: true, style: "display:none", style1: "display:none", style2: "display:none", style3: "display:block",
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
    
  }
})