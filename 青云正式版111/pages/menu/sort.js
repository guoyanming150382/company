// pages/menu/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus1:[]
    // menus1: [ { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }, { 'text': "公务员冲刺培训班", "url": 'https://www.iqytech.net/qy/img/goods1.jpg' }]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.type)
    getApp().globalData.userInfo = options.type;
    this.getData();
    
  },
  getGlobalVar:function() {
    var that = this;
    that.setData({
      globalvar_str:JSON.stringify(getApp().globalData)
    });
  },
  
  getData: function () {
    var that = this;
    var type = getApp().globalData.userInfo;
    wx.request({
      url: "https://www.iqytech.net/qy/class/getclassbytype?type="+type,
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