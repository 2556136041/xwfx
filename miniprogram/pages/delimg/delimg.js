// pages/delimg/delimg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    wx.request({

      url: 'https://www.51mfgs.com/wxprodelimg/id/' + options.id,
      data: {

      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var result = res.data;

        if (result == 1) {
          wx.showLoading({
            title: '成功删除',
            icon: 'loading',
            duration: 100
          });
          setTimeout(function () {
            wx.reLaunch({
              url: '/pages/pub/pub',
            })
          }, 100);


        } else if (result == 0) {
          wx.showLoading({
            title: '删除失败',
            icon: 'loading',
            duration: 1000
          });
          setTimeout(function () {
            wx.reLaunch({
              url: '/pages/pub/pub',
            })
          }, 1000);
        }
      },

    })

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