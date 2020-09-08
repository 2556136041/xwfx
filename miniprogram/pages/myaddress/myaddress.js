// pages/myaddress/myaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: []

  },
  radioChange:function(e){
        // console.log(e.detail.value);
        wx.request({
          url: 'https://www.51mfgs.com/updatemyaddr/userphone/' + wx.getStorageSync('userphone'),
          data: {
              id:e.detail.value
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
              console.log(res);
              wx.setStorageSync("username", res.data.username);
              wx.setStorageSync("userid", res.data.userid);
              wx.setStorageSync("address", res.data.address);
              if (wx.getStorageSync("address")){
                    setTimeout(function () {
                      wx.switchTab({
                        url: '/pages/pub/pub',
                      })
                    }, 3000)

              }   

          }
        })

  },

  add:function(){
      wx.navigateTo({
        url: '/pages/addaddr/addaddr',
      })
  },

  modify:function(e){
      var id = e.currentTarget.id;
      // console.log(id);
      // return;
      wx.navigateTo({
        url: '/pages/modifyaddr/modifyaddr?id='+id,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var self = this;
        wx.request({
          // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
          url: 'https://www.51mfgs.com/myaddress/userphone/' + wx.getStorageSync('userphone'),
          data: {
            // page: this.data.pageNum,
            // maxResult: 20
          },
          header: {
            'content-type': 'application/json'
          },

          success: function (res) {
              console.log(res);
              var data = res.data;
              var list = self.data.data.concat(data);
              self.setData({
                  data: list || ""
              });

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