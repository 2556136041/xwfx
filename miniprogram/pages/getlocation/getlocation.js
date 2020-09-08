// pages/getlocation/getlocation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    province:"",
    district:"",
    ak: 'BmxXjpTEytHO3qDM2QlCvUAYsQv8pai9'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var me=this;       
       wx.chooseLocation({
            type: 'gcj02',
            altitude: true,
            success: function(res) {
                console.log(res);
                if(res && res.latitude && res.longitude){
                      var longitude=res.longitude,latitude=res.latitude;
                      me.loadCity(longitude,latitude);
                }else{
                      me.setData({
                          city:"获取失败"
                          
                      })
                }

            }
       })

  },

  loadCity:function(longitude,latitude){
        var me=this;
        wx.request({
          url:'https://api.map.baidu.com/geocoder/v2/?ak=BmxXjpTEytHO3qDM2QlCvUAYsQv8pai9&location=' + latitude + ',' + longitude + '&output=json',
                data:{},
                header:{
                   'Content-Type':'application/json'
                },
                success:function(res){
                     if(res && res.data){
                           var city=res.data.result.addressComponent.city;
                           var province = res.data.result.addressComponent.province;
                           var district = res.data.result.addressComponent.district;
                           console.log(res);
                           me.setData({                                
                                province: province.indexOf('省') > -1 ? province.substr(0, province.indexOf('省')) : province,
                             city: city.indexOf('市') > -1 ? city.substr(0, city.indexOf('市')) : city,
                                district: district.indexOf('区') > -1 ? district.substr(0, district.indexOf('区')) : district
                           });

                     }else{
                          me.setData({
                               city:'获取失败'
                          })


                     }
                }
                
        })
      

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