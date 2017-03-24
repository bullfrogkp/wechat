var app = getApp()
Page( {
  data: {
  },
  onLoad: function () { 
  },
  // 预定
  editPhotoTap:function(){
    wx.navigateTo({
    	url:'../shipping_photos/shipping_photos'
    })
  },
  editItemTap:function(){
	    wx.navigateTo({
	    	url:'../shipping_items/shipping_items'
	    })
	  },
  editShippingTap:function(){
	    wx.navigateTo({
	    	url:'../edit_shipping/edit_shipping'
	    })
	  }
})