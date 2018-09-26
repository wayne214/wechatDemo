// function getRandomColor() {
//   let rgb = []
//   for(let i = 0; i< 3; i++) {
//     let color = Math.floor(Math.random() * 256).toString(16)
//     color = color.length == 1 ? '0' + color : color
//     rgb.push(color)
//   }

//   return '#' = rgb.join('')
// }


Page({
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmulist: [
      {
        text: '完美， 双击666',
        color: '#ff0000',
        time: 2
      },
      {
        text: '老铁稳',
        color: '#ff00ff',
        time: 5
      }
    ]
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#0ff0ff'
    })
  }, 
//   getRandomColor: function() {
//   let rgb = []
//   for(let i = 0; i< 3; i++) {
//     let color = Math.floor(Math.random() * 256).toString(16)
//     color = color.length == 1 ? '0' + color : color
//     rgb.push(color)
//   }

//   return '#' = rgb.join('')
// },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('传参',options.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
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
    
  }
})