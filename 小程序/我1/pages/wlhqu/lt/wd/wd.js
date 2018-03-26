// pages/wlhqu/lt/wd/wd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        iconPath: "/static/icon/loca.png",
        id: 0,
        latitude: 34.044659,
        longitude: 113.867514,
        width: 50,
        height: 50,
        callout: {//气泡
          content: "联通",
          aaaaa:"sdfhgsjdfhgs",
          fontSize: 20,
          padding: 15,
          borderRadius: 10,
          bgColor: "#ff3344",
          display: "BYCLICK",//点击显示需要监听
        }
      },
      {
        iconPath: "/static/icon/loca.png",
        id: 1,
        latitude: 34.045659,
        longitude: 113.880514,
        width: 50,
        height: 50,
        callout: {//气泡
          content: "联通", aaaaa: "sdfhgsjdfhgs",
          fontSize: 20,
          padding: 15,
          borderRadius: 10,
          bgColor: "#ff3344",
          display: "BYCLICK",//点击显示需要监听
        }
      },
      {
        iconPath: "/static/icon/loca.png",
        id: 2,
        latitude: 34.048659,
        longitude: 113.867514,
        width: 50,
        height: 50,
        callout: {//气泡
          content: "联通", aaaaa: "sdfhgsjdfhgs",
          fontSize: 20,
          padding: 15,
          borderRadius: 10,
          bgColor: "#ff3344",
          display: "BYCLICK",//点击显示需要监听
        }
      },
      {
        iconPath: "/static/icon/loca.png",
        id: 3,
        latitude: 34.058659,
        longitude: 113.877514,
        width: 50,
        height: 50,
        callout: {//气泡
          content: "联通", aaaaa: "sdfhgsjdfhgs",
          fontSize: 20,
          padding: 15,
          borderRadius: 10,
          bgColor: "#ff3344",
          display: "BYCLICK",//点击显示需要监听
        }
      },
    ],
  },
  bindmarkertap: function (e) {
    console.log(e);//点击监听
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