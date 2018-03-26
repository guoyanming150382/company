// pages/see/see.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        "luj": "../qyjj/qyjj",
        "name": "保养套餐",
        "name1": "硬件检测,常规检查",
        "name2": "￥999/每次",
        "name3": "指导价格￥999",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522201997&di=c02b85604e7be05ce202ce0fadde870b&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.cd-auto.net%2Fupload%2Fnews%2Fbf832b06c5cb467fb3a2c1ba8ee78f67%2F201407160432409482.jpg'
      }, {
        "luj": "../jrfa/jrfa",
        "name": "维修套餐",
        "name1": "小毛病维护，器件检测",
        "name2": "￥999/每次",
        "name3": "指导价格￥999",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521607331102&di=741948a84cd542ef906821664e898008&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F83%2F60%2F15836034-21532e9282e8cde10126ce6dc3b17569-0.jpg'
      }, {
        "luj": "../wxby/wxby",
        "name": "喷漆套餐",
        "name1": "车面刷新，涂改，镀油漆",
        "name2": "￥999/每次",
        "name3": "指导价格￥999",
        "url": 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=349538675,77613881&fm=27&gp=0.jpg'
      }, {
        "luj": "../jdyl/jdyl",
        "name": "清洗套餐",
        "name1": "汽车全面清洗",
        "name2": "￥999/每次",
        "name3": "指导价格￥999",
        "url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521607450894&di=5ea7c8f3199c777c635a395c2a003f1c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df4337120f2dcd100d991f0621ae22d65%2Fbba1cd11728b471076e626e1c9cec3fdfd0323d6.jpg'
      },
    ],
  },
  on:function(){
    wx.navigateTo({
      url: 'shop'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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