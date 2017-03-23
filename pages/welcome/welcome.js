//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '红樱桃商务平台企业版'
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    setTimeout(function(){ wx.switchTab({
            url: "../index/index"
        }); }, 3000);
  }
})
