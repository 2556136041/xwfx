// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    winHeight:'',
    frontflag:false,
    backflag:true,
    proid:'',
    btnflag:true,
    
  },
  previewImage: function (e) {
    var src = e.target.dataset.src
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },
  turn:function(){
       wx.switchTab({
         url: '/pages/index/index',
       })

  },
  clickfront:function(){
    this.setData({
        frontflag: true,
        backflag: false
    })

    wx.request({
      url: 'https://www.51mfgs.com/addpoints/id/' + this.data.proid,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: res=> {
         
       
      }
    })
    
    

  },
  clickback:function(){
    console.log(this.data.proid);
    this.setData({
        frontflag: false,
        backflag: true
    })

    wx.request({
      url: 'https://www.51mfgs.com/cutdownpoints/id/' + this.data.proid,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: res=> {
        
           
      }
    })

  },
  enterorder0:function(){
      this.setData({
        btnflag: false
      })

  },
  enterorder1: function (e) {
    this.setData({
      btnflag: true
    })
    wx.navigateTo({
      url: '/pages/order/order?id=' + e.target.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    var self=this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          winHeight: res.windowHeight
        });
      },
    })
    console.log(options.id);
    wx.request({
      url: 'https://www.51mfgs.com/prodetail/id/'+options.id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res){
           console.log(res.data);
           self.setData({
               data:res.data,
               proid:res.data.pro_id

           })

      }
    })
    

  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.setNavigationBarTitle({
        title: "闲物详情页"

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
      return {
        title: '亲，这是我邀请你免费领取的闲置物品，请笑纳！',
        imageUrl: '',
        success: (res) => {
          // console.log("转发成功", res);
              wx.request({
                url: 'https://www.51mfgs.com/addsharescore/userphone/' + wx.getStorageSync("userphone"),
                data: {

                },
                header: {
                  'Content-Type': 'application/json'
                },
                success: function (res) {
                  // console.log(res.data);
                  // self.setData({
                  //   data: res.data,
                  //   proid: res.data.pro_id

                  // })

                }
              })
        },
        fail: (res) => {
          console.log("转发失败", res);
        }
      }
  }
})