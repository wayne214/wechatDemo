//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    categories1: [
      { key: 'filter_book_fiction_hot', name: '小说' },
      { key: 'filter_book_history_hot', name: '历史' },
      { key: 'filter_book_youth_hot', name: '青春' },
      { key: 'filter_book_essay_hot', name: '随笔' },
      { key: 'filter_book_detective_hot', name: '推理' },
      { key: 'filter_book_fantasy_hot', name: '奇幻' },
    ],
    categories2: [
      { key: 'filter_book_love_hot', name: '爱情' },
      { key: 'filter_book_foreign_hot', name: '外国文学' },
      { key: 'filter_book_inspiration_hot', name: '励志' },
      { key: 'filter_book_biography_hot', name: '传记' },
      { key: 'filter_book_travel_hot', name: '旅行' },
      { key: 'filter_book_economic_hot', name: '经营' },
    ]
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
