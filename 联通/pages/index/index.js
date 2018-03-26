Page({

  /**
   * 页面的初始数据
   */
  data: {
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