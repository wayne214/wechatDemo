//index.js
//获取应用实例
const app = getApp()
const douban = require('../../lib/douban.js')

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies: [],
    books:[],
    loading: true,
    //发现好书
    finds: [
      {
        id: '10519369',
        name: "万物生光辉"
      },
      {
        id: '4826530',
        name: "我亲爱的甜橙树"
      },
      {
        id: '25762009',
        name: "教父"
      },
      {
        id: '6789605',
        name: "树上的男爵"
      },
      {
        id: '25976544',
        name: "故事"
      },
      {
        id: '2215160',
        name: "神秘岛（全三册）"
      },
      {
        id: '7064370',
        name: "罗马人的故事2"
      }
    ],
    colorArr: ["#40a851", "#000", "#ca3547", "#2b86e5", "#fdab3e", "#fc4359", "#2b86e5", "#000", "#40a851"],
    // 随机颜色数组
    randomColor: [],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  },
  //事件处理函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 初始化
    var that = this;
    // 必须经过第三方变量接收才能使用
    var len = this.data.colorArr.length;
    var arr = this.data.colorArr;
    var newArr = [];
    // 不能只执行一次，要在数据数组循环遍历的时候执行多次(arr.length次)
    while (len > 0) {
      // 获取随机颜色
      var random = arr[Math.floor(Math.random() * len)];
      newArr.push(random);
      len--;
    }
    // 将随机颜色数组赋值给randomColor
    that.setData({ randomColor: newArr });



    douban.find('book_fiction', 'jsonp1', 1, 5)
      .then(d => 
      {
        console.log('数据',d);
        this.setData({ books: d.subject_collection_items, loading: false })
      }
      )
      .catch(e => {
        console.error(e)
        this.setData({ books: [], loading: false })
      })
  },

  // 定义方法（获取数组中的随机元素）
  randomColor: function (arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
    return arr[Math.floor(Math.random() * arr.length)];
  },
  
})
