// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus1: [
      {
        'text1': "01蓝",
        "url": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/c30a5698-721b-4ab5-801f-e786892251e0'
      },
      {
        'text1': "01红",
        "url": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/ce16d102-46af-4a16-948d-643fbdf12d0b'
      },
      {
        'text1': "01白",
        "url": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/f59005e1-e546-4b3b-8d4c-ed7d7025a8ad'
      },
      {
        'text1': "01黑",
        "url": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/f35194a5-18df-4314-97fe-41f1bfd148e8'
      },
      {
        'text1': "01棕",
        "url": 'https://cep-prd-ms-public.oss-cn-hangzhou.aliyuncs.com/PermanentFolder/5159ff4e-04fc-4303-a637-0086bc525629'
      },
    ],
    menus: [
      {
        "name": "01劲Pro",
        "url": '../../image/carb.png',
        "ut":"../jrfa/jrfa"
      }, {
        "name": "01耀Pro",
        "url": '../../image/carb.png'
      }, {
        "name": "01型Pro",
        "url": '../../image/carb.png'
      }, {
        "name": "01型",
        "url": '../../image/carb.png'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tz:function(){
  wx.navigateTo({
    url: '/pages/goods/goods',
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