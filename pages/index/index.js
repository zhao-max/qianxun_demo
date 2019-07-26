//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    wid: '',
     like:4,
    Recommend:3,
    new:3,
    img:"http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg",
    likes:{
      img: '../image/xin.png',
      titleTxt: '猜你喜欢',
      titleSmail: '原来你也好这口'
    },
    item:{
      img:'../image/huo.png',
      titleTxt:'20考研考虫暑期面授集训营',
      titleSmail:'自制力'
    },
    ico:{
      img: '../image/huo.png',
      titleTxt:'热门推荐',
      titleSmail: '帅的人已经在看'
    },
    news: {
      img: '../image/tree.png',
      titleTxt: '最新上架',
      titleSmail: '速速抢先看'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/novelApi',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        that.setData({
          like: res.data.data
        })
      }
    }),
    that.window()

  },

  window:function(){
    var that = this;
    // 检测用户手机屏幕宽度
    wx.getSystemInfo({
      success: function (res) {
        var tarenaWindth = res.screenWidth;
        that.setData({
          wid: res.screenWidth - 40
        })
      }
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
  suo:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  }, 
  clickFen:function(){
    wx.switchTab({
      url: '../sou/sou'
    })
  },
  renqi: function () {
    wx.navigateTo({
      url: '../ranking/ranking?name=' + '人气榜'
    })
  },
  gengxin: function () {
    wx.navigateTo({
      url: '../ranking/ranking?name=' + '更新榜'
    })
  },
  
  // 猜你喜欢-跳转详情页
  clickLike:function(e){
    wx.navigateTo({
      url: '../details/details?bookname=' + e.currentTarget.dataset.bookname
    })
  }
})