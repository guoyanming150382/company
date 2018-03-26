// pages/sale/sale.js
var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    showTopTips: false,
    errorMsg: ""
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
  },

  formSubmit: function (e) {
    // form 表单取值，格式 e.detail.value.name(name为input中自定义name值) ；使用条件：需通过<form bindsubmit="formSubmit">与<button formType="submit">一起使用  
    var name = e.detail.value.name;
    var size = e.detail.value.size;
    var color = e.detail.value.color;
    var years = e.detail.value.years;
    var phone = e.detail.value.phone;
    var that = this;
    // 判断账号是否为空和判断该账号名是否被注册  
    if (name.length == 0) {
      util.isError("请输入您的姓名", that);
      alertText("请输入您的姓名");
      return;
    }
    // 判断电话是否为空 
    if (phone.length == 0) {
      util.isError("请输入联系电话", that);
      alertText("请输入联系电话");
      return;
    }
    
    // 判断型号是否为空  
    if (size.length == 0) {
      util.isError("请输入车辆型号", that);
      return;
    }
    // 判断型号是否为空  
    if (size.length == 0) {
      util.isError("请输入车辆年限", that);
      return;
    }

    
    // 验证都通过了执行注册方法  
    app.ajax.req('/itdragon/register', {
      "name": name,
      "size": size,
      "color": color,
      "years": years,
      "phone": phone
    }, function (res) {
      if (true == res) {
        // 显示模态弹窗  
        wx.showModal({
          title: '注册状态',
          content: '报名成功!',
          success: function (res) {
            if (res.confirm) {
              // 点击报名后跳转登录页面并关闭当前页面  
              wx.redirectTo({
                url: 'sale'
              })
            }  
          }
        })
      } else {
        // 显示消息提示框  
        wx.showToast({
          title: '注册失败',
          icon: 'error',
          duration: 2000
        })
      }
    });
  }
})

