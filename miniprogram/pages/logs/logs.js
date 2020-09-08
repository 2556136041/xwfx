
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: {
      swiperImg: [
        "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15661/268/2124802213/139114/716ef95e/5a937d71N18b99fae.jpg!q70.jpg",
        "https://m.360buyimg.com/mobilecms/s1280x624_jfs/t14851/107/2203976015/87295/11d515fd/5a94b521Nc1730740.jpg!q70.jpg.webp",
        "https://img1.360buyimg.com/da/jfs/t19630/67/462885481/70476/bf447c7/5a7a97c4N8bf4c1d1.jpg",
        "https://img1.360buyimg.com/da/s1280x624_jfs/t16231/304/2128993154/301620/2d64072b/5a8fc4e0N02381464.jpg.webp",
        "https://m.360buyimg.com/mobilecms/s1280x624_jfs/t19570/186/481108309/153303/c8cdbdff/5a90de04N1bcc4e10.jpg!q70.jpg.webp"
      ],

      gridImg: [
        'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
        'https://m.360buyimg.com/mobilecms/jfs/t11425/73/2288282326/13451/e11c7697/5a14d167Ne5414496.png',
        'https://m.360buyimg.com/mobilecms/jfs/t17845/159/515473608/17969/e0532ed1/5a90d78bNa4e52c4c.png',
        'https://m.360buyimg.com/mobilecms/jfs/t5707/83/1407890143/14681/29321e2c/59263c71Nc7d16503.png',
        'https://m.360buyimg.com/mobilecms/jfs/t9511/185/243002105/6399/cfe6874b/59ca07dcN9b1c275e.png',
        'https://m.360buyimg.com/mobilecms/jfs/t12511/281/1452079175/21296/781a499e/5a1fdc7cN6aad5b38.png',
        'https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png',
        'https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png',
        'https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png',
        'https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png'

      ],

      gridTitle: [

        '京东超市',
        '全球购',
        '京东服饰',
        '京东生鲜',
        '排行榜',
        '充值缴费',
        '领京豆',
        '领券',
        '赚钱到家',
        '物流查询'

      ]

    },

    interval: 3000,
    duration: 1500,
    activeColor: "#fff",

    search: [
      "../../img/jd.png",
      "../../img/search.png"
    ],

    contentImg: "https://m.360buyimg.com/mobilecms/jfs/t19615/365/373374172/60028/e3517eb1/5a6f0c94Nf100693c.jpg!q70.jpg",

    opacity: 0,
    height: 0,
    winHeight: 0,

  },

  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          winHeight: res.windowHeight
        });
      },
    })
  },

  scroll: function (e) {
    console.log(e);
    var height = e.detail.scrollTop;
    if (height > 300) {
      return;
    }

    var opacityNum = height / 300;

    this.setData({
      opacity: opacityNum,
    });
  }


})