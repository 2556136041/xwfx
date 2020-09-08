// pages/taketask/taketask.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bg: app.globalData.bg,
      data: [],
      btnflag: true,
      id:""

  },
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  formSubmit: function (e) {
    self = this;
    if (e.detail.value.username.length == 0 || e.detail.value.answer.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/answerfindpro',
        data: {
          tel: wx.getStorageSync('userphone'),
          username: e.detail.value.username,
          answer: e.detail.value.answer,
          id:self.data.id
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // header: app.globalData.header, // 设置请求的 header
        success: function (res) {
          console.log(res.data);
          self.setData({
            btnflag: true,
            searchinput: ''
          });
          wx.showToast({
            title: '成功提交！',
            icon: 'success',
            duration: 2000,
            mask: true
          })

        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
        id:options.id
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "领取任务"

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