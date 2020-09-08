// pages/pro/pro.js
var jumpFlag = true;
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: app.globalData.bg,
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
    search: [
      "../../images/tubiao1.png",
      "../../images/search.png"
    ],
    topNum: 0,
    pages: 1,
    counts: 1

  },
  returnTop: function () {
    this.setData({
      topNum: this.data.topNum = 0
    });
  },
  lookuser: function (e) {
    // console.log(e.target.id);
    wx.navigateTo({
      url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
    })

  },
  toindex:function(e){
    console.log(e);
     wx.switchTab({
       url: '/pages/index/index',
     })
  },
  pub: function () {
        if (wx.getStorageSync('userphone') == '') {
          wx.navigateTo({
            url: '/pages/loading/loading',
          })

        } else {
          this.setData({
            userphone: wx.getStorageSync('userphone')
          })

        }    
        wx.switchTab({
          url: '/pages/pub/pub',
        })
  },

  detail: function (e) {
    var self = this;
    if (jumpFlag) {
      jumpFlag = false;

      var id = e.currentTarget.id;
      // console.log(id);
      this.setData({
        proid: id
      })
      // var con = JSON.stringify(this.data.data[id]);
      var proid = id;
      wx.request({
        url: 'https://www.51mfgs.com/addhits/id/' + proid,
        data: {

        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          wx.navigateTo({
            url: '../detail/detail?id=' + self.data.proid,
          })
        }
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showLoading({
      title: '正在加载',
    });
    this.request();
  },

  request: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/allcw1/page/' + this.data.pageNum,
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.pages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);
        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }

        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
          // data: wx.getStorageSync('cw') || "",
          flag: true,
          loadingmore: false,
          pages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.setNavigationBarTitle({
        title: "宠物"

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
    // wx.stopPullDownRefresh();
    this.request();

  },

  upper: function () {
      // wx.startPullDownRefresh({
      // })
  },
  lower: function () {
    console.log("lower");
    this.setData({
      loadingmore: true,
      loadingend: false,
      pageNum: this.data.pageNum + 1
    });
    if (this.data.pageNum <= this.data.pages) {
         this.request();
    }else{
        this.setData({
          loadingmore: false,
          loadingend: true

        });
    }    
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
      title: '闲置物品免费分享领取，你没用的也许正是别人需要的',
      imageUrl: ''
    }

  }
})