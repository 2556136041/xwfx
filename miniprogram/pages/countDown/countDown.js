
var allMil = 100000;

function format(mil) {
  var allSecond = Math.floor(mil / 1000);
  var h = Math.floor(allSecond / 3600);
  var m = Math.floor((allSecond - h*3600) / 60);
  var s = Math.floor(allSecond - h * 3600 - m*60);

  return h+":"+m+":"+s;
}

Page({


  data: {
    time: ''
  },

  begin: function() {
    
    this.setData({
      time: format(allMil)
    });

    if (allMil < 0) {
      this.setData({
        time: '本次活动以结束',
      });

      return;
    }


    setTimeout(() => {
      allMil -= 1000;
      this.begin();
    },1000);



  },

  
})