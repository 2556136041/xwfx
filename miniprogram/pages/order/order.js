// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proid:0,
    btnflag: true,
    sendmesflag: true,
    useraddress: ""

  },

  focus: function () {
    this.setData({
      btnflag: false
    });
  },

  formSubmit: function (e) {    
          var self=this;
          if (e.detail.value.orderaddress.length == 0) {
                wx.showToast({
                  title: '手机地址都不能为空',
                  icon: 'loading',
                  duration: 1000,
                  mask: true
                })
            } else if (e.detail.value.orderaddress.length<10){
                wx.showToast({
                  title: '地址不够详细',
                  icon: 'none',
                  duration: 1000,
                  mask: true
                })

            }else{              
              //添加内容
              wx.request({
                url: 'https://www.51mfgs.com/setorder2?id='+this.data.proid,
                data: {          
                  // code: loginRes.code,
                  formId: e.detail.formId,
                  ordername: e.detail.value.ordername,
                  ly: e.detail.value.ly,
                  orderlj: wx.getStorageSync('userphone'),
                  orderaddress: e.detail.value.orderaddress,
                },
                method: 'POST', 
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function (res) {
                    console.log(res.data);
                    self.setData({
                        btnflag: true,
                        searchinput: '',
                        sendmesflag: false,
                    });
                    if(res.data=='success'){
                        wx.showToast({
                            title: '成功预订！',
                            icon: 'success',
                            duration: 2000,
                            mask: true
                        })

                    }else{
                        wx.showToast({
                          title: '有人在你之前抢订了',
                          icon: 'none',
                          duration: 2000,
                          mask: true
                        })

                    }
                    
                    // wx.reLaunch({
                    //   url: '/pages/index/index',
                    // })
                  
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
            proid: options.id,
        })
        // console.log(this.data.proid);

    }
    this.request_addr();    

  },
  request_addr: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/getuseraddr/userphone/' + wx.getStorageSync('userphone'),
      data: {

      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          useraddress: res.data

        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "预订"

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