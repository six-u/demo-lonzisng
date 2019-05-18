// pages/order/order.js
const app= getApp().globalData;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        order:[],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        room: app.room_type
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let temp=[];
        for(let i=0;i<app.order.length;i++){
            if (options.id == app.order[i].userId){
                temp.push(app.order[i]);
            }
        }
        this.setData({
            order:temp
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
    onShow: function (e) {
        if (app.userInfo) {
            this.setData({
                userInfo: app.userInfo,
                hasUserInfo: true
            })
        } else {
            wx.navigateTo({
                url: "/pages/login/login",
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
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})