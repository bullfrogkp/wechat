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
  },
  ediTap:function(){
	    wx.navigateTo({
	    	url:'../contact_orders/contact_orders'
	    })
	  }
})