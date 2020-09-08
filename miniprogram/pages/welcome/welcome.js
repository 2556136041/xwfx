// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boottitle:[]
    
  },
  jumptoindex:function(){
     wx.switchTab({
       url: '/pages/index/index',
     })

  },
  request_boot:function(){
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/getboot',
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data;
        console.log(data);
        var list = self.data.boottitle.concat(data);
        self.setData({
              boottitle: list || ""
        });
      },

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.request_boot();
      setTimeout(function () {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }, 3000);
     
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})