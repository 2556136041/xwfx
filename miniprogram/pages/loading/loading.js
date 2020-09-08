// pages/login/login.js
var app = getApp();

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
    var user_phone = app.globalData.user_phone;
    console.log(user_phone);
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.51mfgs.com/wxindex1',
          data: {
            code: res.code,
            user_phone: user_phone,
          },
          success: function (result) {

            var res = result.data;
            console.log(res);
            if (res.sendsure == 0) {
                  wx.reLaunch({
                    url: '/pages/wxlogin/wxlogin',
                  })

            } else if (res.sendsure == 1) {
                  wx.reLaunch({
                    url: '/pages/catchuserinfo/catchuserinfo',
                  })
            }
          }
        })
      }
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