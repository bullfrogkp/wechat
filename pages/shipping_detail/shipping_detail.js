var app = getApp()
Page( {
  data: {
  },
  onLoad: function () { 
  },
  // 预定
  photoTap:function(){
    wx.navigateTo({
    	url:'../shipping_photo/shipping_photo'
    })
  },
  editTap:function(){
	    wx.navigateTo({
	    	url:'../edit_shipping/edit_shipping'
	    })
	  }
})