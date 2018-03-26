//index.js
//获取应用实例
var app = getApp()


Page({
  data: {
    remote: 'index.html',
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    red:"red",
    arr:[],
    nav:[
         {content:'首页',color:false},
         {content:'团检',color:false},
         {content:'服务',color:false},
         {content:'更多',color:false},
      ]
  
  },
  
  
  mkdir(e){
    var that=this
    // console.log(e)
    // console.log(e.target.id)
    let arr=[];
  
    for(var i=0;i<that.data.nav.length;i++){
      console.log(i)
     if(e.target.id==i){
          arr[i]= {content:that.data.nav[i].content,color:true}
          console.log("true")
     }else{
         arr[i]= {content:that.data.nav[i].content,color:false}
          console.log("false")
     }
    
    }
     this.setData({
       nav:arr
     })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // this.logg("onLoad")
    this.logg(getCurrentPages())

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    // this.logg("onready")
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    // this.logg("onShow")
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    // this.logg("onHide")
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    // this.logg("页面卸载")
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
   
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  logg: function (i) {
    console.log(i)
  }
})