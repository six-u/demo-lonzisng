// pages/carte/carte.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:[
            "https://dimg12.c-ctrip.com/images/200i0w000000k9xv12F05_R_550_412.jpg",
            "https://dimg11.c-ctrip.com/images/200v0h0000008pl2g7412_R_550_412.jpg",
            "https://dimg11.c-ctrip.com/images/200q0w000000kcespB2D7_R_550_412.jpg",
            "https://dimg10.c-ctrip.com/images/200r0w000000k9jkx7F56_R_550_412.jpg",
            "https://dimg13.c-ctrip.com/images/200i0w000000k9y5y0B7A_R_550_412.jpg",
            "https://dimg10.c-ctrip.com/images/200t0w000000kb6f50025_R_550_412.jpg"
        ],
        totalPrice:0,
        repastLb:[
            "店家推荐",
            "特色炒菜",
            "素小炒",
            "汤",
            "早餐"
        ],
        repast: [   
            [
              {name:"水煮鱼片",price:55,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076433634&di=a0f024cfde4f10f21af1ea333c9a8586&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F0%2Fb%2Fc%2Fyuan_0ba5a06cc7c39473c6f864b65b96b8dc.jpg"},
              {name:"水煮肉片",price:40,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076522185&di=fc1b86a7b707a36ac683770b602cd13d&imgtype=0&src=http%3A%2F%2Ffile3.foodmate.net%2Fattachment%2Fforum%2F201904%2F03%2F111232aarwaj2r6yi2pp51.png"},
              {name:"香辣仔鸡",price:48,img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2619576846,439919175&fm=26&gp=0.jpg"},
              {name:"干煸肠头",price:50,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076706738&di=109d34d4e9595c27468c2c8c751cf383&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9213b07eca8065385b7c975a9cdda144ac3482e0.jpg"},
              {name:"清蒸武昌鱼",price:60,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558671453&di=ea7129f99e382ce9eecfb7143ce2bdca&imgtype=jpg&er=1&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2F5b366d5cc4e0180ec17f3783dd459b95.jpeg"},
              {name:"腊肉拼盘",price:60,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076783008&di=5f592520770ae44b2c659934e91c05b8&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170117%2F7e2c41c5b1e942b7adc8ac13d44cc2e9_th.jpeg"}
            ],
            [
                {name:"千叶豆腐",price:30,img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3234189713,1705005284&fm=26&gp=0.jpg"},
                {name:"白油肚条",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558075813780&di=03d18ef2632059b7488aa8dd3cbe4d1a&imgtype=0&src=http%3A%2F%2Fzp1.douguo.net%2Fupload%2Fdish%2F0%2Fe%2F7%2F280_0e659a40e993e063e6e5119670b72397.jpg"},
                {name:"肝腰合炒",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558075839756&di=1fc65308e3d277e3b738d8db4aaaa90b&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160708%2F61369328ab6247fcb5e7156d1cb7e416_th.jpg"},
                {name:"爆炒猪肝",price:30,img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2928926130,2497335211&fm=26&gp=0.jpg"},
                {name:"木须肉",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558075887891&di=c3ab3d377013d4c2adb658db90319aa6&imgtype=0&src=http%3A%2F%2Fimg.univs.cn%2F20151213%2F2%2F201512131913455316686203.jpg"},
                {name:"蚂蚁上树",price:23,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558075920864&di=7359fd1de5db8c7f42ff43146bad2436&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fjzpt%2F201704%2F149190702881267.jpg"},
                {name:"韭黄肉丝",price:28,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558075953369&di=c8aa58ffd323eefae2a0dd2b3b16382e&imgtype=0&src=http%3A%2F%2Fwww.qnong.com.cn%2Fuploadfile%2F2017%2F0323%2F20170323075623782.jpg"},
                {name:"鱼香肉丝",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076188150&di=8b0ca4d69bd7158ef4f9645a9f974571&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201705%2F05%2F092043nyqi8rnaz230z8yl.jpg"},
                {name:"凉拌白肉",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076237831&di=d4839379876f412311941ad58c350dea&imgtype=0&src=http%3A%2F%2Fimg.cnys.com%2Fupload%2Fpicture%2F2017%2F06-16%2FlWaW6W.png"},
                {name:"回锅肉",price:28,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076263526&di=eddf69bda26a949003497f62cd11245a&imgtype=0&src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F170921%2F6-1F921113938.jpg"},
                {name:"盐煎肉",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076312719&di=0f578b03b25cbf67e524a326a30f5bf8&imgtype=0&src=http%3A%2F%2Fstatic.chinacaipu.com%2Fd%2Ffile%2Fmenu%2Fsichuanfengwei%2F2014-09-29%2F871de5b5d3bc988b5742d9dfab9969e8.jpg"},
                {name:"蒜薹肉丝",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076367754&di=3f959b59a2a2e13988c725f4682c6c4a&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fwww_nh_e_cn%2F635201571f9137e714b911a3ccdc32b3.png"},
                {name:"青椒肉丝",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076391056&di=456621487d6fb407f4ba9246ab0e18bb&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2Fjokv6QKmCAU1Pr5j8yNRHEcRSG02PeVxV9Yc6uKR4pX9X1543049358371.jpg"},
                {name:"红椒肉丝",price:30,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558076413159&di=ea0c2c7201968ae9ad5b28e03486e463&imgtype=0&src=http%3A%2F%2F14126528.s21i.faiusr.com%2F2%2FABUIABACGAAgqZH9zgUogJ-ugwcwsAk4nQY.jpg"}
            ],
            [
                {name:"麻婆豆腐",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074366622&di=5aeede327d6145b91772d8a477277a06&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F25%2F20151125232036_Ezue2.jpeg"},
                {name:"苦瓜炒蛋",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074394595&di=77328889a2d3c646755791f18274ab9b&imgtype=0&src=http%3A%2F%2Fi2.chuimg.com%2F23b82abea47311e5af38b82a72e00100.jpg%3FimageView2%2F2%2Fw%2F600%2Finterlace%2F1%2Fq%2F90"},
                {name:"韭黄炒蛋",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074414290&di=06ea5a2ab14e4f47a302b3f0fa8e962a&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F5%2Fa%2F3%2Fyuan_5a2389844be86fce34b1b6a20036a9c3.jpg"},
                {name:"虎皮青椒",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074436427&di=11bff6838dd74358fcc367cf8cc851c3&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F8%2F5%2F7%2F600x400_8586bee7711276e5bb2a542e19106747.jpg"},
                {name:"西红柿炒蛋",price:22,img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1373577531,1207718576&fm=26&gp=0.jpg"},
                {name:"爆炒藕片",price:22,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558669208&di=77face51f3ab909ec2ccd764ac68cea5&imgtype=jpg&er=1&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FFzQH3RbWi57%3DQxpNjIkvBdOl0SaFdQ2kq5sZMJfZbKOoK1538632554523compressflag.jpg"},
                {name:"炝炒土豆丝",price:16,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074546431&di=642fdf2d306f497610dc607af7eafde2&imgtype=0&src=http%3A%2F%2Fimg2.tuohuangzu.com%2Fthz%2Fcomment%2F0%2F10%2F201809191112110546304.jpg"},
                {name:"鱼香茄子",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074562898&di=2c8579bad42b7985d251394a24939e49&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FPkZSGi9XvAB%3Dgs3aPBMOpRtFwqu%3DEiWMx3w9JYVvjwIWE1534618745327.jpg"},
                {name:"炒时蔬",price:18,img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4198536294,280245831&fm=26&gp=0.jpg"}
            ],
            [
                {name:"小菜豆腐汤",price:12,img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2260476330,2477138149&fm=26&gp=0.jpg"},
                {name:"番茄鸡蛋汤",price:12,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558668891&di=913597e549e0184248d79a8650516d36&imgtype=jpg&er=1&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fcaiku%2F6%2F4%2F6%2Fyuan_6482fae1de268a3c4fe720400f03b846.jpg"},
                {name:"紫菜蛋花汤",price:12,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558668915&di=96f96b103a9679e9e1dda0006a099f4a&imgtype=jpg&er=1&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2F0c98231c5c06bd484d45c4d7b371dc48.jpeg"},
                {name:"酸菜粉丝汤",price:12,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074223376&di=5ca6852baaeeb74ce5977b841ff2b395&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FUwdpoAl8IKtwE7SAtdU%3DeHcY1Vv7EGlMxZlFJWzYt5QS91543771839682.jpeg"},
                {name:"素三鲜汤",price:10,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074252242&di=11c0b882b7a2fcf6975dc33d0a45fd6b&imgtype=0&src=http%3A%2F%2Fupload.df.cnhubei.com%2F2017%2F1225%2F1514165383393.png"},
                {name:"圆子汤",price:15,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074280102&di=c8e5e658ec045f965f4fea75b300001d&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fcaiku%2Fe%2F3%2Fb%2Fyuan_e3dfb4d09b90a85f85e8642f48c837cb.jpg"},
                {name:"滑肉汤",price:18,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074341713&di=9cdb9f76b62b847b1f867b8e82a4c1c6&imgtype=0&src=http%3A%2F%2Fcp1.douguo.com%2Fupload%2Fcaiku%2F1%2F9%2Fd%2Fyuan_194b3e0b4c51547fca58b90c3272846d.jpg"}
            ],
            [
                {name:"豆浆",price:3,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558073350562&di=7a2785219e4cbce263ee20dc02658d78&imgtype=0&src=http%3A%2F%2Fi1.douguo.com%2Fupload%2Fdiet%2F6%2Ff%2F2%2F6fb006169100df84cceb8a20ac69ba92.jpg"},
                {name:"白粥",price:2,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558073581363&di=7659c0306642bb12f2e83a89689e67ec&imgtype=0&src=http%3A%2F%2Fsh.eastday.com%2Fimages%2Fthumbnailimg%2Fmonth_1810%2F79737a3ee15c4c7986d38e3a455293c5.jpg"},
                {name:"油条",price:2,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558073857396&di=81423e220b127b15c5b6a50b9577a079&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fsh%2Fpics%2Fhv1%2F211%2F219%2F2215%2F144086431.jpg"},
                {name:"皮蛋瘦肉粥",price:4,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558074057663&di=835da69a94ff577c664811725a3c996b&imgtype=0&src=http%3A%2F%2Fbmp.skxox.com%2F201802%2F01%2Fhongyecanyin.115035.jpg"},
                {name:"鲜肉小笼包",price:15,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558073999125&di=7a29cb70eded49cbd0d17302e29790f6&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FOGaelA4yWSedWscOzdGnt52EfADZKjH23a5ibCL8O2ZzAAibQcKzpqC1lpDBxW7A1bRyicNGzxyibDVUPib03TbjrEA%2F0%3Fwx_fmt%3Djpeg"},
                {name:"荞面馒头",price:2,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558073948700&di=545d73362077c0a7b1ed2708c8419e90&imgtype=0&src=http%3A%2F%2Fwww.tjlihao.com%2FimageRepository%2Fa7a36dec-0cfa-4116-915a-76be9d7a536c.jpg"}
            ]
        ]
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

    }
})