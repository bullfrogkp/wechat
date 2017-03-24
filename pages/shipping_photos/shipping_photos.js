var app = getApp()
Page( {
  data: {
  },
  onLoad: function () { 
  },
  // 预定
  photoTap:function(){
    wx.navigateTo({
    	url:'../shipping_photos/shipping_photos'
    })
  },
  editTap:function(){
	    wx.navigateTo({
	    	url:'../edit_shipping/edit_shipping'
	    })
	  }
})