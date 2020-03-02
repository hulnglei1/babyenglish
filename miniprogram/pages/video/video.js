
Page({

  data: {
    info: { id: 1, title: "标题", img: "../../images/1.png", cTime: "20000", content: "内容fdsfdafd范德萨范德萨分范德萨范德萨啊范德萨放大范德萨范德萨佛挡杀范德萨范德萨范德萨范德萨范德萨范德萨发撒法" ,
    id: 0
    },
    src: 'eee',
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },

  onLoad: function (options) {
    let that = this;
    that.setData({
      id : options.id

    });
    console.log(options.id);//{newsId: 指定的data-news-id的值}
    console.log(id);//{newsId: 指定的data-news-id的值}

  },


  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  inputValue: '',


  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
