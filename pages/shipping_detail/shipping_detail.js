var app = getApp()
Page( {
  data: {
    buttonDisabled:false,
    modalHidden:true,
    show:false
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
	  },
  showModal:function(){
    this.setData({
      modalHidden:!this.data.modalHidden
    })
  },
  modalBindaconfirm:function(){
     this.setData({
      modalHidden:!this.data.modalHidden,
      show:!this.data.show,
      buttonDisabled:!this.data.buttonDisabled
    })
  },
  modalBindcancel:function(){
     this.setData({
      modalHidden:!this.data.modalHidden
    })
  }
})