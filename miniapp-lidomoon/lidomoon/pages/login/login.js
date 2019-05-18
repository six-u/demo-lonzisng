// pages/login/login.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:[
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558182735109&di=32bd598a3c2a4f4a050a223de2d1ade2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F25%2F20151025082451_jVWtc.thumb.700_0.jpeg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2185321393,2477042958&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558182640930&di=bb0522aa5912e2a927ce8ca87e32973f&imgtype=0&src=http%3A%2F%2Flxmgc.scdzr.com%2FResource%2FUploadFiles%2F2017%2F9%2F26%2F22%2F52%2FB201709262252482061%25E8%25AF%25BA%25E5%25A4%259A%25E5%2590%2589111.jpg"
        ],
        userInfo:{},
        hasUserInfo:false
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
       wx.getUserInfo({
            success: res => {
                app.globalData.userInfo = res.userInfo
                wx.navigateBack({
                    delta: 1
                })
            }
        })
    },
})