// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      nickName:"", 
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      nomes:false,
      getmes:true,
      jf:'',
      fansnum: "",
      friends: "",
      flag:wx.getStorageSync('userphoto'),
      btninfo:'点击获取头像昵称',
      disflag:false,
      bg:'',
      btnflag:false
      

  },
  rule:function(){
        wx.navigateTo({
          url: '/pages/rule/rule',
        })
  },
  invitecode:function(){
        wx.navigateTo({
          url: '/pages/invitecode/invitecode',
        })

  },
  advise:function(){
          wx.navigateTo({
            url: '/pages/advise/advise',
          })
  },
  givepro: function () {
        wx.navigateTo({
          url: '/pages/give/give',
        })
  },
  getpro: function () {
        wx.navigateTo({
          url: '/pages/get/get',
        })
  },
  searchpro: function () {
    wx.navigateTo({
      url: '/pages/searchpro/searchpro',
    })
  },

  bindGetUserInfo: function (e) {
     console.log(e.detail.userInfo);
    if(e.detail.userInfo){
          var self = this;
          wx.request({
            url: 'https://www.51mfgs.com/saveuserinfo',
            data: {
              phone: wx.getStorageSync('userphone'),
              nickname: e.detail.userInfo.nickName,
              addr: e.detail.userInfo.country + e.detail.userInfo.province + e.detail.userInfo.city,
              sex: e.detail.userInfo.gender,
              photo: e.detail.userInfo.avatarUrl
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function (res) {
              console.log(res.data);
              wx.setStorageSync('userphoto', res.data);
              self.setData({
                   btninfo:"",
                   disflag:true,
                   bg:'#F47050',
                   btnflag:true
              })
              wx.showToast({
                title: '下次登陆时将会正常显示',
                icon:"none",
                duration:1500
              })
              // setTimeout(function(){
              //       wx.reLaunch({
              //           url: '/pages/my/my',
              //       })
              // },1500)
              
            },
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
        this.getuserinfo();
    
  },
  getuserinfo:function(){
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/getuserinfo/userphone/' + wx.getStorageSync('userphone'),
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        self.setData({
              jf: res.data.jf,
              fansnum: res.data.fansnum,
              friends: res.data.friends
        })

      },

    })   

  },
  myfriends:function(){
       wx.navigateTo({
         url: '/pages/myfriends/myfriends?phone='+wx.getStorageSync('userphone'),
       })

  },
  myfans: function () {
      wx.navigateTo({
        url: '/pages/myfans/myfans?phone=' + wx.getStorageSync('userphone'),
      })

  },

  myinfo:function(){
     wx.navigateTo({
       url: '/pages/myinfo/myinfo',
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "我的空间"

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