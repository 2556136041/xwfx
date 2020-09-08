// pages/sendtplmes/sendtplmes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018-11-18"
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  formsubmit: function (e) {
    wx.login({
      success: function (loginRes) {
        wx.request({
          url: 'https://www.51mfgs.com/wxtplmes?code=' + loginRes.code,
          data: {
            formId: e.detail.formId,
            formData: e.detail.value
          },
          method: 'POST',
          success: function (res) {
               console.log(res.data);
          }
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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