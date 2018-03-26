// pages/gengduo/gengduo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sa1: { xin1: 'a型', xin2: '2012.09', xin3: '2017.09', xin4: '66万' },
    menus1: [
      {
        'text1': "兰博基尼兰尼兰尼兰尼尼兰尼",
        "text2": "2012.09",
        "text3": "2017.09",
        "text4":"6万",
        "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      },
      {
        'text1': "兰博基尼",
        "text2": "2012.09",
        "text3": "2017.09",
        "text4": "6万",
        "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      },
      {
        'text1': "兰博基尼",
        "text2": "2012.09",
        "text3": "2017.09",
        "text4": "6万",
        "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      },
      {
        'text1': "兰博基尼",
        "text2": "2012.09",
        "text3": "2017.09",
        "text4": "6万",
        "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      },
      {
        'text1': "斯巴鲁XV 2.0i 精英版",
        "text2": "2012.09",
        "text3": "2017.09",
        "text4": "6万",
        "url": 'http://c3.xinstatic.com/f2/20171204/1749/5a251a1e8d576603473_20.jpg'
      },
      ],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  xiangqing: function () {
    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing',
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