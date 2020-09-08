// pages/give/give.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    flag: false,
    orderlen:"",
    bg: app.globalData.bg,
    pronums: 0

  },
  phoneCall: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.replyPhone,
        success: function () {
          console.log("成功拨打电话")
        },
      })
  },
  send:function(e){
        console.log(e.target.id);
        // wx.navigateTo({
        //   url: '/pages/send/send?id=' + e.target.id,
        // })
    wx.request({

      url: 'https://www.51mfgs.com/sendpro/proid/' + e.target.id,
      data: {

      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
          wx.reLaunch({
            url: '/pages/give/give',
          })
      },

    })
    
  },
  delpro:function(e){
    // console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/del/del?id=' + e.currentTarget.id,
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  request: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/givepros/userphone/' + wx.getStorageSync('userphone'),
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.mypros;
        var counts = res.data.pronums;
        console.log(data);
        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
          flag: true,
          pronums:counts
          // loadingmore: false
        });

      },

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        wx.setNavigationBarTitle({
          title: "分享物品"

        });

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
       this.request();
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