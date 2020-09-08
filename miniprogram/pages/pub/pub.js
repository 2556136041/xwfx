// pages/upload0/upload0.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myaddr: '',
    source: '',
    imgflag:true,
    currentCity: '',
    pic: '',
    flag: 'none',
    btnflag: true,
    protype:'',
    usetime:'',
    userdig:'',
    userphone:'',
    searchinput: '',
    sendmesflag:true,
    array: ['家具', '衣物', '私品', '宠物','书刊'],
    useraddress:"",
    usernick:"",
    city:"",
    objectArray: [
      {
        id: 0,
        name: 'jj'
      },
      {
        id: 1,
        name: 'yw'
      },
      {
        id: 2,
        name: 'sp'
      },
      {
        id: 3,
        name: 'cw'
      },
      {
        id: 4,
        name: 'sj'
      }
    ],
    index: 2,
    usearray: ['全新', '半年', '一年', '二年', '二年以上'],
    objectuseArray: [
      {
        id: 0,
        name: '全新'
      },
      {
        id: 1,
        name: '半年'
      },
      {
        id: 2,
        name: '一年'
      },
      {
        id: 3,
        name: '二年'
      },
      {
        id: 4,
        name: '二年以上'
      }
    ],
    useindex: 2,
    digarray: ['个人', '商人'],
    objectdigArray: [
      {
        id: 0,
        name: 0
      },
      {
        id: 1,
        name: 1
      },
     
     
    ],
    digindex:0


  },

  selectaddr:function(){
      wx.navigateTo({
         url: '/pages/myaddress/myaddress',
      })
  },
  noticeitem:function(){
      wx.navigateTo({
        url: '/pages/noticeitem/noticeitem',
      })
  },
  takephoto:function(){
      wx.navigateTo({
        url: '/pages/takephoto/takephoto',
      })

  },  
  delimg: function (e) {
    // console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/delimg/delimg?id=' + e.currentTarget.id,
    })


  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      digindex: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      useindex: e.detail.value
    })
  },
  focus: function () {
    this.setData({
      btnflag: false
    });
  },
  toindex: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })

  },
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        //console.log(res)
        //前台显示
        that.setData({
          source: res.tempFilePaths,
          flag: 'block',
          imgflag:false
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        const uploadTask =wx.uploadFile({
          url: 'https://www.51mfgs.com/upload_miniimg',
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
               'content-type': 'multipart/form-data'
          }, 
          formData: {   

          },          
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

          }
        })

        uploadTask.onProgressUpdate((res) => {
            console.log('上传进度', res.progress)
            console.log('已经上传的数据长度', res.totalBytesSent)
            console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })
      }
    })
  },

  formSubmit: function (e) {
    self = this;
    var reg = /^(13|14|15|17|18)[0-9]{9}$/;
    if (e.detail.value.proabout.length == 0) {
      wx.showToast({
        title: '物品描述不能为空！',
        icon: 'none',
        duration: 500,
        mask: true
      })
    } else if (e.detail.value.pronumber.length == 0) {
      wx.showToast({
        title: '数量不能为空！',
        icon: 'none',
        duration: 500,
        mask: true
      })
    } else if (e.detail.value.proname.length == 0) {
      wx.showToast({
        title: '名称不能为空！',
        icon: 'none',
        duration: 500,
        mask: true
      })
    } else if (this.data.city == '') {
      wx.showToast({
        title: '所在城市未获取！',
        icon: 'none',
        duration: 500,
        mask: true
      })
    } else if (this.data.myaddr == ''){
        wx.showToast({
          title: '地址未选中，请重新选择！',
          icon: 'none',
          duration: 500,
          mask: true
        })   

    } else if (this.data.pic==''){
          wx.showToast({
              title: '图片不能为空',
              icon: 'none',
              duration: 500,
              mask: true
          })

    }else{
        this.setData({
            protype: this.data.array[this.data.index],
            usetime:this.data.usearray[this.data.useindex],
            userdig: this.data.digarray[this.data.digindex]
        });

      //添加内容
      wx.request({
        url: 'https://www.51mfgs.com/upload_minicon1',
        data: {
              userdig: this.data.userdig,
              proname: e.detail.value.proname,
              city:this.data.city,
              // city: e.detail.value.city,
              // username: wx.getStorageSync("username"),
              username: this.data.usernick,
              protype: this.data.protype,
              usetime:this.data.usetime,
              pronumber: e.detail.value.pronumber,
              proabout: e.detail.value.proabout,
              pic: this.data.pic,
              address: wx.getStorageSync("address"),
              myaddress: wx.getStorageSync("username") + "," + wx.getStorageSync("userid") + "," + wx.getStorageSync("address"),
              // username: e.detail.value.username,
              tel: wx.getStorageSync('userphone'),
              // address: e.detail.value.address,
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
            source:'',
            imgflag: true,
            sendmesflag: false
          });
          
          if (res.data==1){
                wx.showToast({
                    title: '发布成功,请勿重发！',
                    icon: 'none',
                    duration: 2000,
                    mask: true
                })
                setTimeout(function () {
                    wx.reLaunch({
                      url: '/pages/index/index',
                    })

                }, 2000);
          }else{
                wx.showToast({
                    title: '发布失败,请重发！',
                    icon: 'none',
                    duration: 2000,
                    mask: true
                })
          }         
         
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    // this.getLocation();
    var that=this;
    if (wx.getStorageSync('userphone')==''){
          wx.navigateTo({
            url: '/pages/loading/loading',
          })
       
    }else{
       //发布时用昵称显示
          wx.getUserInfo({
            success: function (res) { 
              console.log(res); 
              that.setData({ 
                usernick: res.userInfo.nickName,
                userphone: wx.getStorageSync('userphone')
                }) 
            } 
          })

    }       
 
  },
 

  getlocation:function(){
    var me = this;
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function (res) {
        console.log(res);
        if (res && res.latitude && res.longitude) {
          var longitude = res.longitude, latitude = res.latitude;
          me.loadCity(longitude, latitude);
        } else {
          me.setData({
            city: "获取失败"

          })
        }

      }
    })
  },

  loadCity: function (longitude, latitude) {
    var me = this;
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=KdNr09TMV7jBgdMmWG9aBkbFXN4PfkF4&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res && res.data) {
          var city = res.data.result.addressComponent.city;
          var province = res.data.result.addressComponent.province;
          var district = res.data.result.addressComponent.district;
          console.log(res);
          me.setData({
            province: province.indexOf('省') > -1 ? province.substr(0, province.indexOf('省')) : province,
            city: city.indexOf('市') > -1 ? city.substr(0, city.indexOf('市')) : city,
            district: district.indexOf('区') > -1 ? district.substr(0, district.indexOf('区')) : district
          });

        } else {
          me.setData({
            city: '获取失败'
          })


        }
      }

    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "发布"

    });

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (wx.getStorageSync("username") && wx.getStorageSync("userid") && wx.getStorageSync("address")) {
      this.setData({
        myaddr: wx.getStorageSync("username") + "," + wx.getStorageSync("userid") + "," + wx.getStorageSync("address")
      })

    }
   

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