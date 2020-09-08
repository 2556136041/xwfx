// pages/pro/pro.js
var jumpFlag = true;
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000,
    duration: 1500,
    activeColor: "#fff",
    opacity: 0,
    winHeight: 0,
    flag: false,
    data_all: [],
    data_jj: [],
    data_sp: [],
    data_yw: [],
    data_sj: [],
    data_cw: [],
    data_user: [],
    data_userhot:[],
    story_photo: "",
    story_tit:"",
    storytype:"",
    storyid:"",
    active_photo: "",
    active_tit:"",
    activetype:"",
    activeid:"",
    report_photo: "",
    report_tit: "",
    reporttype: "",
    reportid: "",
    notice_photo: "",
    notice_tit: "",
    noticetype: "",
    noticeid: "",
    loadingmore: false,
    loadingend: false,
    winHeight:"",
    search: [
      "../../images/tubiao1.png",
      // "../../images/tubiao2.png",
      "../../images/search.png"
    ],
    userphotodefault:'../../images/ms.png',
    usernamedefault: '匿名',
    animationData: {},
    topNum: 0,
    all: true,
    proid:"",
    pageNum: 1,
    sjpageNum: 1,
    jjpageNum: 1,
    sppageNum: 1,
    ywpageNum: 1,
    cwpageNum: 1,
    pages:1,
    sjpages: 1,
    cwpages: 1,
    ywpages: 1,
    sppages: 1,
    jjpages: 1,
    counts:1,
    selected1: true,
    selected2: false,
    selected3: false,
    selected4: false,
    selected5: false,
    selected6: false,
    searchinput: '物品关键字',

  }, 
  focus: function () {
    this.setData({
        searchinput: '',
    });
  },
  blur: function () {
    this.setData({
      searchinput: '物品关键字',
    });
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
      selected5: false,
      selected6: false
    })
  },
  selected4: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
      selected5: false,
      selected6: false
    })
  },
  selected5: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: true,
      selected6: false
    })
  },
  selected6: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: true
    })
  },

  jumptostory:function(e){
    console.log(e.target.id);
    wx.request({
      url: 'https://www.51mfgs.com/storyaddhits/id/' + e.target.id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '/pages/storydetail/storydetail?id=' + e.target.id,
        })
      }
    })     
  },
  jumptonoticecon: function (e) {
    console.log(e.target.id);    
    wx.navigateTo({
      url: '/pages/noticedetail/noticedetail?id=' + e.target.id,
    })
  },
  jumptonotice:function(){
      wx.navigateTo({
        url: '/pages/notice/notice',
      })
  },
  jumptoactive: function (e) {
    console.log(e.target.id);
    wx.request({
      url: 'https://www.51mfgs.com/activeaddhits/id/' + e.target.id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '/pages/activedetail/activedetail?id=' + e.target.id,
        })
      }
    })     
  },
  jumptoreport: function (e) {
    console.log(e.target.id);
    wx.request({
      url: 'https://www.51mfgs.com/reportaddhits/id/' + e.target.id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '/pages/reportdetail/reportdetail?id=' + e.target.id,
        })
      }
    })
  },

  jj: function (e) {  
      wx.navigateTo({
        url: '/pages/jj/jj',
      })
      
  },
  
  sp: function (e) {
    wx.navigateTo({
        url: '/pages/sp/sp',
    })    
  },
  
  yw: function (e) {
    wx.navigateTo({
      url: '/pages/yw/yw',
    })
    
  },
  
  sj: function (e) {
    wx.navigateTo({
      url: '/pages/sj/sj',
    })
    
  },
  
  cw: function (e) {
    wx.navigateTo({
      url: '/pages/cw/cw',
    })
    
  },
  
  notice:function(){
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },
  sendword: function () {
    wx.navigateTo({
      url: '/pages/sendword/sendword',
    })
  },
  
  active: function () {
    wx.navigateTo({
      url: '/pages/active/active',
    })
  },
  story: function () {
    wx.navigateTo({
      url: '/pages/story/story',
    })
  },
  jumptorule:function(){
       wx.navigateTo({
         url: '/pages/rule/rule',
       })
  },
  returnTop: function () {        
      this.setData({
           topNum: this.data.topNum = 0
      });
  },
  findmes:function(){
      wx.navigateTo({
        url: '/pages/pubmyfindpro/pubmyfindpro',
      })
  },
  business:function(){
     wx.navigateTo({
       url: '/pages/bussiness/bussiness',
     })
  },
  lookuser:function(e){
    console.log(e.target.id);
      wx.navigateTo({
        url: '/pages/mypubinfo/mypubinfo?id=' + e.target.id,
      })

  },
  search:function(e){
    var formData = e.detail.value.keyword;
    if(formData.length==0){
       wx.showToast({
         title: '不能为空！',
         icon: 'loading',
         duration: 2000

       })
         
    }else{
      wx.navigateTo({
        url: '/pages/search/search?keyword=' + formData,
      })
    }  

  },
  pub: function () {
        if (wx.getStorageSync('userphone') == '') {
          wx.navigateTo({
            url: '/pages/loading/loading',
          })

        } else {
          this.setData({
            userphone: wx.getStorageSync('userphone')
          })

        }  
        wx.switchTab({
          url: '/pages/pub/pub',
        })
  },
  
  detail: function (e) {
    var self=this;
    if (jumpFlag) {
      jumpFlag = false;
     
      var id = e.currentTarget.id;
      // console.log(id);
      this.setData({
           proid:id
      })
      // var con = JSON.stringify(this.data.data[id]);
      var proid=id;
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
      
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.removeStorageSync('yzm');
      wx.removeStorageSync("username");
      wx.removeStorageSync("userid");
      wx.removeStorageSync("address");
      wx.showLoading({
          title: '正在加载',
      });
      this.request_all(); 
      this.request_hot();
      
    
  },
  request_cw: function (options) {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/allcw2/page/' + this.data.cwpageNum,
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.cwpages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);
        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }
        var list = self.data.data_cw.concat(data);
        self.setData({
          data_cw: list || "",
          // data: wx.getStorageSync('cw') || "",
          flag: true,
          loadingmore: false,
          cwpages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },

  request_sj: function (options) {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/allsj2/page/' + this.data.sjpageNum,
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.sjpages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);

        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }

        var list = self.data.data_sj.concat(data);
        self.setData({
          // data: wx.getStorageSync('sj') || "",
          data_sj: list || "",
          flag: true,
          loadingmore: false,
          sjpages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },
  request_yw: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/allyw2/page/' + this.data.ywpageNum,
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.ywpages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);

        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }

        var list = self.data.data_yw.concat(data);
        self.setData({
          data_yw: list || "",
          // data: wx.getStorageSync('yw') || "",
          flag: true,
          loadingmore: false,
          ywpages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },
  request_sp: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/allsp2/page/' + this.data.sppageNum,
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.sppages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);

        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }

        var list = self.data.data_sp.concat(data);
        self.setData({
          data_sp: list || "",
          // data: wx.getStorageSync('sp') || "",
          flag: true,
          loadingmore: false,
          sppages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },

  request_jj: function (options) {
    var self = this;
    wx.request({
      // url: 'https://www.szfyxhm.com/getprosList', //真实的接口地址
      url: 'https://www.51mfgs.com/alljj2/page/' + this.data.jjpageNum,
      data: {
        // page: this.data.pageNum,
        // maxResult: 20
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data.res_all;
        var pages = res.data.jjpages;
        var counts = res.data.counts;
        console.log(pages);
        console.log(data);

        var len = data.length;
        if (len == 0) {
          self.setData({
            loadingmore: false,
            loadingend: true,
          });
          return;
        }

        var list = self.data.data_jj.concat(data);
        self.setData({
          data_jj: list || "",
          // data: wx.getStorageSync('sp') || "",
          flag: true,
          loadingmore: false,
          jjpages: pages,
          counts: counts
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

    })

  },
  request_user: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/showuser',
      data: {
        
      },
      header: {
          'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;  
        console.log(data);
        var list = self.data.data_user.concat(data);
        self.setData({
          // data: wx.getStorageSync('pros') || "",
          data_user: list || "",
 
        });

      },

    })
  },
  request_active: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/activefm',
      data: {
        // page: this.data.pageNum,
        // limit: this.data.pageNum
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
            var photo = res.data[0].activephoto;
            var active_tit = res.data[0].title;
            var activetype = res.data[0].type;
            var activeid = res.data[0].id;
            console.log(res);
            self.setData({
              active_photo: photo,
              active_tit: active_tit,
              activetype: activetype,
              activeid: activeid
            });
        
      },

    })
  },
  request_story: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/storyfm',
      data: {
        // page: this.data.pageNum,
        // limit: this.data.pageNum
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
             var photo=res.data[0].storyphoto;
             var story_tit = res.data[0].title;
             var storytype = res.data[0].type;
             var storyid = res.data[0].id;
              console.log(res);
              self.setData({                
                story_photo: photo,
                story_tit: story_tit,
                storytype: storytype,
                storyid: storyid
              });
      },

    })
  },
  request_report: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/reportfm',
      data: {
        // page: this.data.pageNum,
        // limit: this.data.pageNum
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var photo = res.data[0].reportphoto;
        var report_tit = res.data[0].title;
        var reporttype = res.data[0].type;
        var reportid = res.data[0].id;
        console.log(res);
        self.setData({
          report_photo: photo,
          report_tit: report_tit,
          reporttype: reporttype,
          reportid: reportid
        });

      },

    })
  },
  request_notice: function () {
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/noticefm',
      data: {
        // page: this.data.pageNum,
        // limit: this.data.pageNum
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var photo = res.data[0].photo;
        var notice_tit = res.data[0].title;
        var noticetype = res.data[0].type;
        var noticeid = res.data[0].id;
        console.log(res);
        self.setData({
            notice_photo: photo,
            notice_tit: notice_tit,
            noticetype: noticetype,
            noticeid: noticeid
        });

      },

    })
  },

  request_all:function(){
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/allpro3/page/' + this.data.pageNum,
      data: {
        // page: this.data.pageNum,
        // limit: this.data.pageNum
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
            var data = res.data.res_all;
            var pages=res.data.pages;
            var counts=res.data.counts;
            // console.log(pages);
            console.log(data);
            // wx.setStorageSync('pros', res.data);
            var len = data.length;
            if (len == 0) {
              // wx.stopPullDownRefresh();
              self.setData({
                  loadingmore: false,
                  loadingend: true,
              });
              return;              
        }

        var list = self.data.data_all.concat(data);

        self.setData({
          // data: wx.getStorageSync('pros') || "",
          data_all: list || "",
          flag: true,
          loadingmore: false,
          pages:pages,
          counts: counts
        });
        // console.log(self.data.pages);
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },

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
        this.request_jj();
        this.request_sp();
        this.request_yw();
        this.request_sj();
        this.request_cw();
        this.request_active();
        this.request_story();
        this.request_report();
        this.request_notice();
        this.request_user();
        
        // wx.showLoading({
        //   title: '正在加载',
        //   duration:1000
        // });
        //加载产品数据，每次10条
        // this.request_all();
        jumpFlag = true;
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        this.animation = animation
        var next = true;
        //连续动画关键步骤
        setInterval(function () {
          if (next) {
            this.animation.opacity(0).rotate(0).scale(0.9).step()
            next = !next;
          } else {
            this.animation.opacity(1).rotate(0).scale(1).step()
            next = !next;
          }
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 1000)

  },

  request_hot:function(){
    var self = this;
    wx.request({
      url: 'https://www.51mfgs.com/getuserhot',
      data: {
       
      },
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        var data = res.data;
        console.log(data);
        var list = self.data.data_userhot.concat(data);
        self.setData({
          data_userhot: list || "",

        });

      },

    })
       
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
          // this.request_all();

  },

  upper: function () {
      wx.startPullDownRefresh({
          
      })
  },
  lower: function () {
      console.log("lower");
      this.setData({
            loadingmore: true,
            loadingend: false,
            pageNum: this.data.pageNum + 1,
            sjpageNum:this.data.sjpageNum+1,
            jjpageNum: this.data.jjpageNum + 1,
            sppageNum: this.data.sppageNum + 1,
            cwpageNum: this.data.cwpageNum + 1,
            ywpageNum: this.data.ywpageNum + 1,
      });
      if(this.data.pageNum<=this.data.pages){
           this.request_all();
      }else{
           this.setData({               
              loadingmore: false,
              loadingend:true
            });
      }      
      if (this.data.sjpageNum <= this.data.sjpages) {
            this.request_sj();
      } else {
        this.setData({
            loadingmore: false,
            loadingend: true
        });
      }   
      if (this.data.jjpageNum <= this.data.jjpages) {
        this.request_jj();
      } else {
        this.setData({
          loadingmore: false,
          loadingend: true
        });
      }  
      if (this.data.sppageNum <= this.data.sppages) {
        this.request_sp();
      } else {
        this.setData({
          loadingmore: false,
          loadingend: true
        });
      } 
      if (this.data.ywpageNum <= this.data.ywpages) {
        this.request_yw();
      } else {
        this.setData({
          loadingmore: false,
          loadingend: true
        });
      } 
      if (this.data.cwpageNum <= this.data.cwpages) {
        this.request_cw();
      } else {
        this.setData({
          loadingmore: false,
          loadingend: true
        });
      } 
      
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // this.setData({
    //         loadingmore: true,
    //         loadingend: false,
    //         pageNum: this.data.pageNum + 1
    //       });
    //   this.request_all();

    

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