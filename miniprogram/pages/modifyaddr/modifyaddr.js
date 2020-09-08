// pages/modifyaddr/modifyaddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnflag: true,
    data:{},
    id:""

  },
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  modifyaddr:function(e){
    wx.request({
      url: 'https://www.51mfgs.com/modifymyaddr/id/' + this.data.id,
      data: {
          username: e.detail.value.username,
          address:e.detail.value.address

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
          console.log(res);
          if(res.data==1){
                wx.navigateTo({
                  url: '/pages/myaddress/myaddress',
                })
          }
          

      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    console.log(options.id);
    wx.request({
      url: 'https://www.51mfgs.com/getmyaddr/id/' + options.id,
      data: {
         
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        self.setData({
            data: res.data,
            id: res.data.id

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