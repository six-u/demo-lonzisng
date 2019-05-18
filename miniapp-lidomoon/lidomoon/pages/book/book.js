// pages/book/book.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      room: {
          "room_type": "高级大床房",
          "room_price": "128",
          "room_description": "宽敞的藏族客房俯瞰着风景秀丽的天河天际。所有客房都配有40英寸的平面电视、DVD播放机、ipod基座和笔记本电脑大小的保险箱。浴室设有花洒和嵌入镜中的电视。",
          "room_person": "标准入住: 2",
          "img": [
              "https://dimg11.c-ctrip.com/images/20020w000000ki72i3C1A_R_550_412.jpg",
              "https://dimg10.c-ctrip.com/images/200r0w000000k9jd26472_R_550_412.jpg",
              "https://dimg10.c-ctrip.com/images/2007050000000imlq3F6F_R_550_412.jpg"
          ]
      },
      start_date: "",
      end_date: "",
      num:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        room:app.globalData.room_type[options.id],
        start_date: app.globalData.start_date,
        end_date: app.globalData.end_date,
        num: app.globalData.num
    })
  },
  btn:function(e){
    wx.showToast({
      title: '预约成功',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  calcPrice:function(e){
      this.setData({
          num:e.detail.value
      })
      app.globalData.num = e.detail.value;
  }
})