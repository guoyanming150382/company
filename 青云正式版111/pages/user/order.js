// pages/user/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classid: [],
    style: "display:none",
    menus1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.login({
      success: function (res) {
        that.getOpenId(res.code);
      }
    });
  },
  getOpenId: function (code) {
    var that = this;
    wx.request({
      url: 'https://www.iqytech.net/weixinpay/GetOpenId',
      mothed: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: code,
      },
      success: function (res) {
        var openId = res.data.openid;
        wx.request({
          url: "https://www.iqytech.net/qy/order/myorder?code=" + openId,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {},
          success: function (res) {
            for (var i = 0; i < res.data.length; i++) {
              // that.data.classid.push(res.data[i].classid)
              var id = res.data[i].classid;
              wx.request({
                url: "https://www.iqytech.net/qy/class/getclassbyid?id=" + id,
                data: {
                },
                header: { "Content-Type": "applciation/json" },
                success: function (res) {
                  // console.log(res);
                  // console.log(typeof (res.data));
                  // console.log(id)
                  that.data.menus1.push(res.data[0]);
                  that.setData({
                    menus1:that.data.menus1
                  })
                },
                fail: function (err) { },//请求失败
                complete: function () { },//请求完成后执行的函数
              })
            }
            console.log(that.data.menus1);
            // that.getData();
          }
        })
      }
    })
  },
  // getData: function () {
  //   var that = this;
  //   for(var i=0;i<that.data.classid.length;i++){
  //     var id = that.data.classid[i];
  //     wx.request({
  //       url: "https://www.iqytech.net/qy/class/getclassbyid?id=" + id,
  //       data: {

  //       },
  //       header: { "Content-Type": "applciation/json" },

  //       success: function (res) {
  //         // console.log(res);
  //         // console.log(typeof (res.data));
  //         // console.log(id)
          
  //         that.data.menus1.push(res.data[0]);
  //         console.log(that.data.menus1);

  //       },
  //       fail: function (err) { },//请求失败
  //       complete: function () { },//请求完成后执行的函数
  //     })
  //   }
  //   console.log(that.data.menus1);
  // },

  
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