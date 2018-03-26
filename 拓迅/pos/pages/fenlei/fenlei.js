// pages/menu/menu.js
var WxParse = require('../../wxParse/wxParse.js');


var app = getApp()

Page({
  
  data: {
    style1: "display:flex",
    style2: "",
    style3: "",
    style4: "",
    bstyle1: "border-bottom:5rpx solid #1296db; color:#1296db",
    bstyle2: "",
    bstyle3: "",
    bstyle4: "",
    img1: "../../image/f5.png",
    img2: "../../image/f2.png",
    img3: "../../image/f3.png",
    img4: "../../image/f4.png",
    listData: [
      { "code": "时间观念、人员作风和精神风貌", "text": "军事训练：立正、稍息；向右看齐、向前看；跨立等", },
      { "code": "团队破冰、导入项目", "text": "团队组建、信任同坐、赢跑、天龙八部、士兵突击", },
      { "code": "精神状态、换位思考、感恩意识", "text": "信任背摔、风中劲草、激情节拍、绳圈力量", },
      { "code": "内部沟通、协作；外部共赢", "text": "横渡亚马逊、红黑博弈、团队七巧板、疯狂市场", },
      { "code": "团队共同愿景、配合、协作", "text": "齐眉棍、移花接木、团队七巧板、巨人梯", },
      { "code": "潜能激发、树立信心", "text": "逃生墙、生命之手、高空断桥、高空抓杠", },
      { "code": "团队沟通、信息的共享，领导者的合理定位", "text": "孤岛求生、盲人方阵、疯狂市场、智慧魔毯", },
      { "code": "创新、协作、沟通", "text": "驿站传书、生死电网、2012、三国争雄", },
      { "code": "团队感恩", "text": "坎坷人生路、感恩的心、沉船、茫茫人海、毕业墙", },
    ],
    menu3: [
      { "text3": "团队组建", "text1": "按照一定形式每人作自我介绍；选队长、定队呼、绘队旗、唱队歌；", "text2": "为以下培训做铺垫，初步的建立团队架构，组成小的团队；", "url": "http://www.emmmmm.xyz/tx/xm1.png" },
      { "text3": "同起同落", "text1": "所有学员一致坐下一致起立；", "text2": "理解个人与团队的相互依存关系；", "url": "http://www.emmmmm.xyz/tx/xm2.png" },
      { "text3": "信任背摔", "text1": "人员依次从高1.7米左右台上背向倒在下面队友搭成的保护网上；", "text2": "培养团队成员的自信、相互信任及个人超越；", "url": "http://www.emmmmm.xyz/tx/xm3.png" },
      { "text3": "生死电网", "text1": "所有的学员要从电网的一侧穿过电网达到电网的另一侧，允许相互帮助完成，不能使用任何器械", "text2": "1、计划、组织、领导、控制  2、资源的配置  3、谨慎的工作态度。", "url": "http://www.emmmmm.xyz/tx/xm4.png" },
      { "text3": "信任同坐", "text1": "所有学员面对背围成一个大圆站好，一起听教练员的指挥；共同来完成", "text2": "信任、协作、配合，只有一个目标", "url": "http://www.emmmmm.xyz/tx/xm5.png" },
      { "text3": "横渡亚马逊", "text1": "摸拟两队在亚马逊河道上彼此要到达对岸，到底如何来取得胜利或者双赢；", "text2": "内部沟通、协作；外部共赢；", "url": "http://www.emmmmm.xyz/tx/xm6.png" },
      { "text3": "驿站传书", "text1": "按小队竞技性在进行信息的快速传递；准确在规定的时间内最先完成为胜。", "text2": "体会沟通的实质，感受群策群力是创新的核心基础；", "url": "http://www.emmmmm.xyz/tx/xm7.png" },
      { "text3": "孤岛求生", "text1": "学员想办法将危险岛上的人员运送到安全岛上方算成功；", "text2": "团队沟通、信息共享、角色的合理定位", "url": "http://www.emmmmm.xyz/tx/xm8.png" },
      { "text3": "齐眉棍", "text1": "将队员分成两队，用食指托着棒子齐心协力；将棒子同时平放到地面", "text2": "明白齐心协力以及抱怨的危害", "url": "http://www.emmmmm.xyz/tx/xm9.png" },
      { "text3": "坎坷人生路", "text1": "所有人员分为两个大组，当教练说开始后，相互搀扶经过一段坎坷的人生道路", "text2": "以团队之间相互信任为依据，并从中体会失去别人信任的感受，体现团队凝聚力、感恩", "url": "http://www.emmmmm.xyz/tx/xm10.png" },],
  },
  
  onLoad: function () {
    // this.getData();
    // 页面初始化 
  },
  showhide1: function(){
    var that = this;
    that.setData({
      style1: "display:flex",
      style2: "display:none",
      style3: "display:none",
      style4: "display:none",
      bstyle1: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      img1:"../../image/f5.png",
      img2: "../../image/f2.png",
      img3: "../../image/f3.png",
      img4: "../../image/f4.png",
    });
  },
  showhide2: function () {
    var that = this;
    that.setData({
      style2: "display:flex",
      style1: "display:none",
      style3: "display:none",
      style4: "display:none",
      bstyle2: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      img1: "../../image/f1.png",
      img2: "../../image/f6.png",
      img3: "../../image/f3.png",
      img4: "../../image/f4.png",
    });
  },
  showhide3: function () {
    var that = this;
    that.setData({
      style3: "display:inline",
      style2: "display:none",
      style1: "display:none",
      style4: "display:none",
      bstyle3: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid transparent; color:#000",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      img1: "../../image/f1.png",
      img2: "../../image/f2.png",
      img3: "../../image/f7.png",
      img4: "../../image/f4.png",
    });
  },
  showhide: function () {
    var that = this;
    that.setData({
      style3: "display:none",
      style2: "display:none",
      style1: "display:none",
      style4: "display:flex",
      bstyle1: "border-bottom:5rpx solid transparent; color:#000",
      bstyle3: "border-bottom:5rpx solid transparent; color:#000",
      bstyle4: "border-bottom:5rpx solid #1296db; color:#1296db",
      bstyle2: "border-bottom:5rpx solid transparent; color:#000",
      img1: "../../image/f1.png",
      img2: "../../image/f2.png",
      img3: "../../image/f3.png",
      img4: "../../image/f8.png",
    });
  },
  // getData: function () {
  //   var that = this;
  //   wx.request({
  //     url: "https://www.iqytech.net/qy/class/getindexclass",
  //     data: {},
  //     header: { "Content-Type": "applciation/json" },
  //     success: function (res) {
  //       // console.log(res.data);
  //       // console.log(typeof (res.data));

  //       that.setData({
  //         menus1: res.data
  //       });
  //     },
  //     fail: function (err) { },//请求失败
  //     complete: function () { },//请求完成后执行的函数
  //   })
  // },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  

 




})
