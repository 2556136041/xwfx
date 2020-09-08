// pages/mypubinfo/mypubinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    jf:"",
    gets:"",
    sends:"",
    name:"",
    sex:"",
    addr:"",
    fansnum:"",
    friends:"",
    is_friend:"",
    myphone:"",
    photo:""

  },
  myfriends: function () {
    wx.navigateTo({
      url: '/pages/myfriends/myfriends?phone=' + this.data.phone,
    })

  },
  myfans: function () {
    wx.navigateTo({
      url: '/pages/myfans/myfans?phone=' + this.data.phone,
    })

  },
  follow:function(e){
      //  console.log(e.target.id);
       var self=this;
        wx.request({
            url: 'https://www.51mfgs.com/addfriend',
            data: {
                userphone: e.target.id,
                myphone: wx.getStorageSync('userphone')
            },
            header: {
                'content-type': 'application/json'
            },
            method: "POST",
            success: function (res) {
                  console.log(res.data);
                  self.setData({
                       is_friend: 1,
                  })

            }
        })      
  },

  cancelfollow: function (e) {
    //  console.log(e.target.id);
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/cancelfollowfriend',
      data: {
          userphone: e.target.id,
          myphone: wx.getStorageSync('userphone')
      },
      header: {
        'content-type': 'application/json'
      },
      method: "POST",
      success: function (res) {
        console.log(res.data);
        self.setData({
             is_friend: 0,
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.id);
      var self=this;
      //  console.log(options.id);
       this.setData({
            phone: options.id
       })
       wx.request({
              url: 'https://www.51mfgs.com/userpubinfo',
              data: {
                userphone: options.id,
                myphone:wx.getStorageSync('userphone')
              },
              header: {
                'content-type': 'application/json'
              },
              method: "POST",
              success: function (res) {
                  console.log(res.data);
                  self.setData({
                       jf:res.data.jf,
                       sends:res.data.sendnums,
                       gets:res.data.getnums,
                       sex:res.data.sex,
                       name:res.data.name,
                       addr:res.data.addr,
                       fansnum:res.data.fansnum,
                       friends: res.data.friends,
                       photo: res.data.photo,
                       is_friend:res.data.is_friend
                  })

              }
        })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "用户信息"

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