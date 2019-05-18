// pages/detail/detail.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner: [
        "http://dimg12.c-ctrip.com/images/200s0w000000ki0ar204C_R_550_412.jpg",
        "http://dimg11.c-ctrip.com/images/200g0w000000kbtkkB7EB_R_550_412.jpg",
        "http://dimg12.c-ctrip.com/images/fd/hotel/g3/M08/20/02/CggYG1XBjR2AaqO6ACn9s7l7_zo777_R_550_412.jpg"
        ],
        facility:app.globalData.facility,
        checkin:app.globalData.checkin,
        checkout:app.globalData.checkout,
        app:app.globalData
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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

    },
    callNum:function(e){
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.num,
            success: function () {
              console.log("success");
            }
        })
    }
})