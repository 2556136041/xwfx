// pages/search/search.js
// var jumpFlag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    activeColor: "#fff",
    opacity: 0,
    flag: false,
    proid: "",
    search: [
      "../../images/tubiao1.png",
      "../../images/search.png"
    ],
    searchinput: '物品关键字',


  },
  focus: function () {
    this.setData({
      searchinput: '',
      data: [],
    });
  },
  blur: function () {
    this.setData({
      searchinput: '物品关键字',
    });
  },
  lookuser: function (e) {
    // console.log(e.target.id);
    wx.navigateTo({
      url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
    })

  },
  detail: function (e) {
    var self = this;
    // if (jumpFlag) {
    //   jumpFlag = false;

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

    // }
  },
  search: function (e) {
    var formData = e.detail.value.keyword;
    if (formData.length == 0) {
      wx.showToast({
        title: '不能为空！',
        icon: 'none',
        duration: 2000

      })

    } else {
        var self = this;
        console.log(formData);
        wx.request({
          url: 'https://www.51mfgs.com/findpro/keyword/' + formData,
          data: {

          },
          header: { 
            'Content-Type': 'application/json' 
          },
          success: function (res) {
            var data = res.data;
            console.log(data);
            var list = self.data.data.concat(data);
            self.setData({
              data: list || "",
              flag: true,
              // pronum:list.length
              // loadingmore: false
            });
            // wx.showToast({
            //   title: '已提交',
            //   icon: 'success',
            //   duration: 1000
            // })
          }
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/findpro/keyword/' + e.keyword,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        var list = self.data.data.concat(data);
        self.setData({
          data: list || "",
          flag: true,
          // pronum:list.length
          // loadingmore: false
        });
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "搜索"

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
          title: '闲置物品免费分享领取，你没用的也许正是别人需要的',
          imageUrl: ''
        }
  }
})