// pages/fenlei/xiangqing/xiangqing.js
Page({
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {
   menus3:[{
     "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132943.jpg'
   },
   {
     "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132943.jpg'
   },
   {
     "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132943.jpg'
   },
   {
     "url": 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1462132943.jpg'
   }],
   poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
   name: '此时此刻',
   author: '许巍',
   src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
   action:{
     method:''
   },
   loop:'true'
  },
  //播放
  // audioPlay: function () {
  //   this.setData({
  //     action:{
  //       method:'play'
  //     }
  //   })
  // },
  //暂停
  // audioPause: function () {
  //   this.setData({
  //     action: {
  //       method: 'pause'
  //     }
  //   })
  // },
  MusicStart: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
    console.log('音乐播放进度为' + progress + '%')
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