//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {}
      }
    })
  },
  globalData: {
    userInfo: null,
    room_type: [{
        "room_type": "高级大床房",
        "room_price": "128",
        "room_description": "宽敞的藏族客房俯瞰着风景秀丽的天河天际。所有客房都配有40英寸的平面电视、DVD播放机、ipod基座和笔记本电脑大小的保险箱。浴室设有花洒和嵌入镜中的电视。",
        "room_person": "标准入住: 2",
        "img": [
            "https://dimg10.c-ctrip.com/images/200r0w000000k9jd26472_R_550_412.jpg",
            "https://dimg11.c-ctrip.com/images/20020w000000ki72i3C1A_R_550_412.jpg",
            "https://dimg10.c-ctrip.com/images/2007050000000imlq3F6F_R_550_412.jpg"
        ]
      },
      {
        "room_type": "高级双床房",
        "room_price": "138",
        "room_description": "宽敞的藏族客房俯瞰着风景秀丽的天河天际。所有客房都配有40英寸的平面电视、DVD播放机、ipod基座和笔记本电脑大小的保险箱。浴室设有花洒和嵌入镜中的电视。",
        "room_person": "标准入住: 2",
          "img": [
            "https://dimg12.c-ctrip.com/images/200q0w000000kce298B6B_R_550_412.jpg",
            "https://dimg12.c-ctrip.com/images/200q0w000000kce298B6B_R_550_412.jpg",
            "https://dimg12.c-ctrip.com/images/200e0a0000004zcxj806E_R_550_412.jpg"
        ]
      },
      {
        "room_type": "豪华大床房",
        "room_price": "188",
          "room_description": "可供2位客人入住的宽敞客房。包括私人登记入住/退房服务以及俱乐部的使用。所有客房都配有40英寸的平面电视、DVD播放机、ipod基座和笔记本电脑大小的保险箱。浴室设有花洒和嵌入镜中的电视",
        "room_person": "标准入住: 2",
        "img":[
            "https://dimg10.c-ctrip.com/images/200j050000000imlw3832_R_550_412.jpg",
            "https://images4.c-ctrip.com/target/fd/hotel/g3/M0A/21/75/CggYGVXBnZ6ANIiwAB99_Q8GQ3k808_550_412.jpg",
            "https://images4.c-ctrip.com/target/fd/hotel/g4/M03/21/B6/CggYHlXBnbGALFw2AD6tmrvPQ5U251_550_412.jpg"
        ]
      },
      {
        "room_type": "豪华双床客房",
        "room_price": "228",
        "room_description": "享有行政楼层优待，包括私人登记入住/退房服务以及俱乐部的使用。 客人可使用Millesime俱乐部： - 免费早餐 - 下午茶 - 晚间品酒 - 每天使用一小时会议室。",
        "room_person": "最多成人人数： 2最多儿童人数： 1 (12岁以下)",
        "img":[
            "https://dimg11.c-ctrip.com/images/200b090000004bpxh4F5A_R_550_412.jpg",
            "https://dimg11.c-ctrip.com/images/2004050000000imll4512_R_550_412.jpg",
            "https://dimg12.c-ctrip.com/images/fd/hotel/g4/M08/BD/C8/CggYHVXziTKANzQUAAJnffd2th8826_R_550_412.jpg",
            "https://dimg11.c-ctrip.com/images/200t0a0000004m4xc8A45_R_550_412.jpg",
            "https://dimg10.c-ctrip.com/images/fd/hotel/g3/M04/B3/15/CggYGlXziTiAPX_MAANdIVmi-ts919_R_550_412.jpg"
        ]
      },   
    ],
    facility: {
      pet: [
        "不允许携带宠物入住。"
      ],
      internet: [
        "免费！ 住宿方于各处提供WiFi。"
      ],
      parking: [
        "免费！ 无需预订：住宿场所可提供私人停车设施。"
      ],
      reception: [
        "办理私人登记入住/退房手续",
        "行李寄存",
        "旅游咨询",
        "快速办理入住/退房手续",
        "24小时前台"
      ],
      cleaning : [
        "每日清洁服务",
        "熨衣服务",
        "干洗",
        "洗衣"
      ],
      "综合设施": [
        "机场班车（额外收费）",
        "空调",
        "禁烟客房",
        "客房服务"
      ],
    },
    end_date:"",
    start_date:"",
    num:"",
    checkin: " 14:00时之后 ",
    checkout: " 12:00时之前 ",
    hotelcontact:{
      adress:"康定 新都桥镇下柏桑二村318国道旁",
      tel:"0836-8908833",
      phone:"13699041101"
    },
    order:[
        {
            create_date:"2019-5-18",
            room_type:"3",
            checkInTime:"2019-5-20",
            checkOutTime:"2019-5-21",
            userId:"1",
            userName:"wwwe",
            userTel:"18628309512",
            invoice:"1",
            num:"1",
            price:188,
            totalPrice:188,
            state:0
        },
        {
            create_date: "2019-5-18",
            carte_type: [
                "干煸肠头",
                "千叶豆腐",
                "鱼香茄子",
                "素三鲜汤"
            ],
            date: "2019-5-19",
            type:"晚餐",
            userId: "1",
            userName: "wwwe",
            userTel: "18628309512",
            invoice: "1",
            price: 108,
            totalPrice: 108,
            state: 1
        },
        {
            create_date: "2018-6-02",
            room_type: "0",
            checkInTime: "2018-6-21",
            checkOutTime: "2018-6-22",
            userId: "1",
            userName: "wwwe",
            userTel: "18628309512",
            invoice: "1",
            num: "2",
            price: 128,
            totalPrice: 256,
            state: 1
        },
    ]
  }
})