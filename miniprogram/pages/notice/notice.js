// pages/pro/pro.js
var jumpFlag = true;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000,
    duration: 1500,
    activeColor: "#fff",
    opacity: 0,
    winHeight: 0,
    flag: false,
    data: [],
    loadingmore: false,
    loadingend: false,
    pageNum: 1,
    winHeight: "",
    topNum: 0,
    proid: "",
    bg: app.globalData.bg,
    replaynum: ""

  },

  jumptonoticedetail: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/noticedetail/noticedetail?id=' + e.currentTarget.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    this.request_noticeall();
    // wx.showLoading({
    //   title: '正在加载',
    // });

  },

  request_noticeall: function () {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/noticeall/page/' + this.data.pageNum,
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data;
        console.log(res.data);
        // wx.setStorageSync('sp', res.data);

        var len = data.length;
        if (len == 0) {
          self.setData({
            // loadingmore: false,
            // loadingend: true,
          });
          return;
        }

        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
          // data: wx.getStorageSync('sp') || "",
          flag: true,
          // loadingmore: false
        });
        // wx.hideLoading();
        // wx.stopPullDownRefresh();
      },

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        wx.setNavigationBarTitle({
          title: "公告"

        });

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    jumpFlag = true;


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

    // this.request_noticeall();


  },

  // upper: function () {
  //   wx.startPullDownRefresh({

  //   })
  // },
  // lower: function () {
  //   console.log("lower");
  //   this.setData({
  //     loadingmore: true,
  //     loadingend: false,
  //     pageNum: this.data.pageNum + 1
  //   });
  //   this.request_noticeall();
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // this.setData({
    //         loadingmore: true,
    //         loadingend: false,
    //         pageNum: this.data.pageNum + 1
    //       });
    //   this.request_all();



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {


  }
})