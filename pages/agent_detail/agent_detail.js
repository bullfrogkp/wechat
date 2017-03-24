var app = getApp()
Page( {
  data: {
  },
  onLoad: function () { 
  },
  // 预定
  editTap:function(){
    wx.navigateTo({
    	url:'../edit_contact/edit_contact'
    })
  }
})