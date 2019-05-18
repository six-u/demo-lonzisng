//index.js
//获取应用实例
const app = getApp();
function DateMinus(start, end) {
  var start_date = new Date(start.replace(/-/g, "/"));
  var end_date = new Date(end.replace(/-/g, "/"));
  var days = end_date.getTime() - start_date.getTime();
  var day = parseInt(days / (1000 * 60 * 60 * 24));
  return day;
}
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    num: 1,
    hasUserInfo: false,
    start_date: '',
    end_date: '',
    banner: [
        "https://dimg11.c-ctrip.com/images/20070t000000iz4f52688_R_550_412.jpg",
        "https://dimg13.c-ctrip.com/images/200g0h0000008pjxrA1F0_R_550_412.jpg",
        "https://dimg13.c-ctrip.com/images/2004070000002mjkp72ED_R_550_412.jpg",
        "https://dimg12.c-ctrip.com/images/200r0t000000iguzgA711_R_550_412.jpg",
        "https://dimg11.c-ctrip.com/images/20010t000000ivd3h6099_R_550_412.jpg",
        "https://dimg11.c-ctrip.com/images/200r0w000000k9jf0C694_R_550_412.jpg",
        "https://dimg10.c-ctrip.com/images/200i0w000000k9xpbC6F3_R_550_412.jpg"
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    app:app.globalData
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    var date = new Date();
    var FullYear = date.getFullYear();
    var day = date.getDate();
    var Month = (date.getMonth() + 1);
    var day_1 = day;
    var day_2 = (parseInt(day) + 1);
    if (Month < 10) {
      Month = '0' + Month
    }
    var start_date = FullYear + '-' + Month + '-' + day_1;
    var end_date = FullYear + '-' + Month + '-' + day_2
    this.setData({
      data: date,
      start_date: start_date,
      end_date: end_date
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      wx.navigateTo({
        url:"/pages/login/login",
      });
    }
      app.globalData.num = "1";
      app.globalData.start_date = start_date;
      app.globalData.end_date = end_date;
  },
  order: function (e) {
    if (this.data.num >0) {
      wx.navigateTo({
        url: '../book/book',
      })
    } else {
      wx.showToast({
        image: '/image/false.png',
        title: '日期有误',
      })
    }
    this.num_data()
  },
  // 日期结算
  num_data: function (e) {
    var start_date = new Date(this.data.start_date.replace(/-/g, "/"));
    console.log(start_date)
    var end_date = new Date(this.data.end_date.replace(/-/g, "/"));
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if (day>0) {
      this.setData({
        num: day
      })
      app.globalData.num=day
    } else {
      wx.showToast({
        image: '/image/false.png',
        title: '日期有误',
      })
      this.onShow()
    }
  },
  // 入驻日期
  start_date: function (e) {
    this.setData({
        start_date: e.detail.value
    })
    app.globalData.start_date=e.detail.value
  },
  // 离店日期
  end_date: function (e) {
    this.setData({
      end_date: e.detail.value
    })
    app.globalData.end_date= e.detail.value
    this.num_data()
  },
  onLoad: function () {
  
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 转发
  onShareAppMessage: function () {

  },
  // 打开位置
  location: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  // 打电话
  callNum: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.num,
      success: function () {
        console.log("success");
      }
    })
  },
  //客服
  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  }
})
