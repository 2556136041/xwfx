// pages/give/give.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    flag: false,
    bg: app.globalData.bg,
    pronums:0

  },
  phoneCall: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.replyPhone,
        success: function () {
          console.log("成功拨打电话")
        },
      })
  },
  get: function (e) {
    console.log(e.target.id);
    var self = this;
    wx.request({

      url: 'https://www.51mfgs.com/wxgetpro/proid/' + e.target.id,
      data: {

      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
            console.log(res.data);
            wx.reLaunch({
              url: '/pages/get/get',
            })
            
            self.setData({


            });

      },

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.request();

  },

  // request: function (options) {
  //   var self = this;
  //   wx.request({
  //     url: 'https://www.51mfgs.com/getpros/userphone/' + wx.getStorageSync('userphone'),
  //     data: {

  //     },
  //     header: {
  //         'content-type': 'application/json'
  //     },

  //     success: function (res) {
  //       var data = res.data.mypros;
  //       var counts = res.data.pronums;
  //       var list = self.data.data.concat(data);
  //       self.setData({
  //         data: list || "",
  //         flag: true,
  //         pronums: counts
  //       });

  //     },

  //   })

  // },

request: function (options) {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/getpros/userphone/' + wx.getStorageSync('userphone'),
      data: {

      },
      header: {
          'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.mypros;
        var counts = res.data.pronums;
        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
          flag: true,
          pronums: counts
        });

      },

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.setNavigationBarTitle({
        title: "领取物品"

      });

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
    wx.stopPullDownRefresh();

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