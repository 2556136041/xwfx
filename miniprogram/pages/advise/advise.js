// pages/advise/advise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    source: '',
    imgflag: true,
    pic: '',
    btnflag: true,
    selected1: true,
    selected2: false,
    selected3: false

  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false,
      selected3:false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: true
    })
  },
 
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          source: res.tempFilePaths,
          flag: 'block',
          imgflag: false
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://www.51mfgs.com/upload_storyimg',
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'multipart/form-data'
          },
          formData: {},
          success: function (res) {
            //打印
            // console.log(res.data)
            var imgurl = res.data;
            that.setData({
              pic: imgurl
            })
            console.log(that.data.pic);
          },
          fail: function (res) {
               console.log(res);
          }
        })
      }
    })
  },
  formSubmit1: function (e) {
    self = this;
    if (e.detail.value.username.length == 0 || e.detail.value.title.length == 0 || e.detail.value.content.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/upload_storycon',
        data: {
          title: e.detail.value.title,
          username: e.detail.value.username,
          about: e.detail.value.about,
          content: e.detail.value.content,
          pic: this.data.pic,
          tel:wx.getStorageSync("userphone")
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
            searchinput: '',
            source: '',
            imgflag: true,
            sendmesflag: false
          });
          wx.showToast({
            title: '发布成功,请勿重发！',
            icon: 'none',
            duration: 2000,
            mask: true
          })

        }
      })
    }
  },
  formSubmit2: function (e) {
    self = this;
    if (e.detail.value.title.length == 0 || e.detail.value.advise.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/userly',
        data: {
          userid: wx.getStorageSync('userphone'),
          tit: e.detail.value.title,
          ly: e.detail.value.advise
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
  formSubmit3: function (e) {
    self = this;
    if (e.detail.value.tel.length == 0 || e.detail.value.explain.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    } else {

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/complain',
        data: {
          userphone: wx.getStorageSync('userphone'),
          complaintel: e.detail.value.tel,
          explain: e.detail.value.explain
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
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        wx.setNavigationBarTitle({
          title: "留言建议"

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