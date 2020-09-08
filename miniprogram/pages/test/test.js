// pages/test/test.js
var time = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     time:'1990-01-01',
     currentTab:0

  },
  bindTimeChange:function(e){
      this.setData({
           time:e.detail.value
      })

  },

  switchNav:function(e){
      var page=this;
      if(this.data.currentTab==e.target.dataset.current){
           return false;
      }else{
           page.setData({
                currentTab:e.target.dataset.current
           })
      }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var d="2018-12-17 11:49:15";
        console.log(time.timestampToTime(d));
        var time1 = time.timestampToTime(d);
        console.log(time.timeToTimestamp(time1));

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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