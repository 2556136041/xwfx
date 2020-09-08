
var app = getApp();
Page({
  data: {
    phoneNum: '',
    psd: '',
    userCode: '',
    key: '获取',
    trueCode: '',
    showToast: false,
    gainFlag: false,
    regFlag: true
  },

  showToast: function () {
    this.setData({
      showToast: true
    });

    setTimeout(() => {
        this.setData({
          showToast: false
        });
    }, 1500);
  },

  phoneBlur: function (e) {
    console.log(e);
    var phoneNum = e.detail.value;
    var len = phoneNum.length;
    if (len != 11 || phoneNum.charAt(0) != '1') {

      this.setData({
        toastText: '号码格式不正确'
      });
      this.showToast();
      return;
    }

    this.setData({
        phoneNum: phoneNum
    });
    // console.log(this.data.phoneNum);
  },

  // psdBlur: function (e) {
  //   var psd = e.detail.value;

  //   this.setData({
  //     psd: psd
  //   });
  // },

  gain: function () {
    var phoneNum = this.data.phoneNum;
    if (phoneNum == '') {
        this.setData({
          toastText: '确认号码无误后再获取'
        });

        this.showToast();
        return;
    }

    var second = 60;
    this.countDown(second);

    var ran = Math.random() * 8999 + 1000;
    var num = Math.floor(ran);
    wx.setStorageSync('yzm', num);
    this.setData({
      // trueCode: num
       trueCode: wx.getStorageSync('yzm')
    });

    wx.request({
      url: 'https://v.juhe.cn/sms/send',
      data: {
          mobile: phoneNum,
          tpl_id: 105908,
          tpl_value: encodeURI('#code#=') + num,
          key: "e02ff088d77893adeb3e26f0e7070c2c"
      },
      success: function (e) {
          console.log(e);
      },
    })


  },

  countDown: function (num) {
    this.setData({
      gainFlag: true,
      key: num
    });

    if (num < 0) {
      this.setData({
        key: '获取',
        gainFlag: false
      });

      return;
    }

    setTimeout(() => {
      this.countDown(num - 1);
    }, 1000);

  },

  code: function (e) {
    // this.setData({
    //     regFlag: false
    // });
    var userCode = e.detail.value;
    if (userCode.length != 4) {
        this.setData({
          toastText: '验证码不足4位'
        });

        this.showToast();
        return;
    }
    this.setData({
       userCode: userCode,
       regFlag: false
    });
  },
  register: function () {
    var { userCode, trueCode } = this.data;
    // var yzm=wx.getStorageSync('yzm');
    if (userCode != trueCode) {
    // if (userCode != yzm) {
      this.setData({
        toastText: '验证码不相等'
      });
      this.showToast();
      return;
    } else {
      wx.request({
        url: 'https://www.51mfgs.com/wxlogin',
        data: {
           user_phone: this.data.phoneNum
        },
        header: {
           'Content-Type': 'application/json'
        },
        success: result => {
          var res = result.data;
          console.log(res);
          if (res.sendsure == 1) {
            app.globalData.user_phone = this.data.phoneNum;
            wx.setStorageSync('userphone', app.globalData.user_phone);
            wx.reLaunch({
                url: '/pages/loading/loading',
            })
          }
        }
      })

    }

    // wx.switchTab({
    //   url: '../index/index',
    // })

  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: "注册登陆"

    });

  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    // this.request_all();

  },


})