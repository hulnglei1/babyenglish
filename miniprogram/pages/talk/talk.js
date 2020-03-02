var array_import = require("../../pages/data/data.js")
const app = getApp()
Page({

  data: {
    array: [],

    avatarUrl: '../../images/user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    nickname: "<--字母页面头像获取称号",


  },

  onLoad: function () {
    this.setData({
      array: array_import.songs_array
    })
  },



  onShow: function () {
    this.setData({
      nickname: app.globalData.globalNickname,
      avatarUrl: app.globalData.globalAvatarUrl,
    })
  },

  videoErrorCallback: function(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  vieoStart: function(res) {
    var id = res.currentTarget.id;
    this.videoContext = wx.createVideoContext(id)
    this.videoContext.requestFullScreen()
  },

  videoEnd: function(res) {  // 视频播放结束后执行的方法
    var id = res.currentTarget.id;
    this.videoContext = wx.createVideoContext(id)
    this.videoContext.exitFullScreen()
    if (id == this.data.array.length - 1) {
      wx.showToast({
        title: '已播放完成',
        icon: 'loading',
        duration: 2500,
        mask: true,
      })
    } else {
      wx.showToast({
        title: '播放下一个',
        icon: 'loading',
        duration: 2500,
        mask: true,
      })
      setTimeout(function() {
        var idNext = String(Number(id) + 1);
        this.videoContext = wx.createVideoContext(idNext)
        this.videoContext.play()
        this.videoContext.requestFullScreen()
      }, 2500)
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: '我家宝宝特喜欢这些视频，你们试试看？',
    }
  }
})