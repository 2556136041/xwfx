// pages/pubmyfindpro/pubmyfindpro.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: app.globalData.bg,
    data:[],
    btnflag: true,

  },
  taketask:function(e){
    console.log(e.target.id);
      wx.navigateTo({
        url: '/pages/taketask/taketask?id=' + e.target.id,
      })
  },
  lookuser: function (e) {
      console.log(e.target.id);
      wx.navigateTo({
        url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
      })
  },
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  formSubmit: function (e) {
    self = this;
    if (e.detail.value.proname.length == 0 || e.detail.value.reason.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/pubfindpro',
        data: {
          tel: wx.getStorageSync('userphone'),
          proname: e.detail.value.proname,
          reason: e.detail.value.reason
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
      if (wx.getStorageSync('userphone') == '') {
        wx.navigateTo({
          url: '/pages/loading/loading',
        })

      } else {
        this.setData({
          userphone: wx.getStorageSync('userphone')
        })

      }  
      this.request();
  },

  request: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/allfindpros',
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
        // wx.setStorageSync('sp', res.data);
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
      wx.setNavigationBarTitle({
        title: "寻物启事"

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