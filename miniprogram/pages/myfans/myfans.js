// pages/myfans/myfans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  friends:[],
     fans:[],
    
       
  },
  
  lookfollowinfo:function(e){
      console.log(e.target.id);
      wx.navigateTo({
          url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
      })

  },
  lookfansinfo:function(e){
    wx.navigateTo({
         url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log(options.phone);
        var self = this;
        wx.request({
          // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
          url: 'https://www.51mfgs.com/myfans/userphone/' + options.phone,
          data: {

          },
          header: {
            'content-type': 'application/json'
          },
          method: 'GET',
          success: function (res) {
            console.log(res.data);
           
            var data = res.data;
            // var data1 = res.data.friendsres;
            // console.log(res.data.friendsres);
            var list = self.data.fans.concat(data);
            // var list1 = self.data.friends.concat(data1);
            self.setData({
              fans: list || "",
              // friends:list1 || ""               
                
            })
          },
        })   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "我的粉丝"

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