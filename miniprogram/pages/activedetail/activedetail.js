// pages/storydetail/storydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    btnflag: true,
    searchinput: '',
    id: ""
  },
  previewImage: function (e) {
    var src = e.target.dataset.src
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  formSubmit: function (e) {
    self = this;
    if (e.detail.value.username.length == 0 || e.detail.value.content.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/replaystory',
        data: {
          userid: wx.getStorageSync('userphone'),
          username: e.detail.value.username,
          content: e.detail.value.content,
          id: self.data.id
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
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/activedetail/id/' + options.id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          data: res.data,
          id: options.id
        })

      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

      wx.setNavigationBarTitle({
        title: "活动详情"

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