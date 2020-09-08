// pages/catchuserinfo/catchuserinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    flag: wx.getStorageSync('userphoto'),
    disflag: false,
    bg: '',
    btnflag: false


  },

  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo);
    if (e.detail.userInfo) {
      var self = this;
      wx.request({
        url: 'https://www.51mfgs.com/saveuserinfo',
        data: {
          phone: wx.getStorageSync('userphone'),
          nickname: e.detail.userInfo.nickName,
          addr: e.detail.userInfo.country + e.detail.userInfo.province + e.detail.userInfo.city,
          sex: e.detail.userInfo.gender,
          photo: e.detail.userInfo.avatarUrl
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data);
          wx.setStorageSync('userphoto', res.data);
          self.setData({
            disflag: true,
            bg: '#F47050',
            btnflag: true
          })
          setTimeout(function(){
                wx.switchTab({
                  url: '/pages/index/index',
                })
          },1500);

        },

      })

    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('userphone') == '') {
      wx.navigateTo({
          url: '/pages/wxlogin/wxlogin',
      })

    }


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