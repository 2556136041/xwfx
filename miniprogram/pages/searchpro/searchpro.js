// pages/searchpro/searchpro.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    bg: app.globalData.bg

  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.request();

  },
  request: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/mysearchpro/userphone/' + wx.getStorageSync('userphone'),
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data;
        console.log(data);
        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
 
        });

      },

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

      wx.setNavigationBarTitle({
        title: "寻找物品"

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
    return {
      title: '亲，我在找一件东西，你哪里有吗？',
      imageUrl: ''
    }

  }
})