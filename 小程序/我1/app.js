//app.js
const data = [{
  id: "001",
  image: "/pages/img/c1.jpg",
  name: "保时捷",
  miaoshu:"奥迪是著名的汽车开发商和制造商，其标志为四个圆环相扣。现为德国大众汽车公司的子公司，总部设在德国的英戈尔施塔特，主要车型有A1、A3、A4、A5、A6、A7、A8、Q1、Q3、Q5、Q7、TT、R8以及S、RS性能系列等。"
},{
  id:"002",
  image: "/pages/img/c2.jpg",
  name:"保时捷",
  miaoshu:"商和制造商，其标志为四个圆环相扣。现为德国大众汽车公司的子公司，总部设在德国的英戈尔施塔特，主要车型有"
  }, {
    id: "003",
    image: "/pages/img/c3.jpg",
    name: "保时捷",
    miaoshu:"标志为四个圆环相扣。现为"
}];
App({
  globalData: {//全局变量
    userInfo: null,
    data: data,//date中所写的数据
  }
})