// pages/details/details.js
var log = require('../template/template.js')
var app = getApp(); 
Page({
  data: {
    bookname:[],    //做个空列表接收缓存   
    title:'',             //书名
    desc:'',
    cname:'',
    no1:'',
    zhangjie:6,
    cen1:true,
    cen2:false,
    xiang:'',
    xuan:'',
    top:'',
    wid:'',
    // img: 'http://img-tailor.11222.cn/bcv/big/1160957830403.jpg',
    img:'http://img.zcool.cn/community/014c8d554441400000019ae9de6b6a.jpg',
    ico:3,
    huo:'http://m.qpic.cn/psb?/V12y28vb18judp/MP196SSVRl6A65t5qhnqZhVYLTY5hzCP88bHaIKmWBw!/b/dLgAAAAAAAAA&bo=QABAAAAAAAADByI!&rf=viewer_4'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    wx.request({
      url: "https://www.apiopen.top/novelInfoApi?name=" + options.bookname,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        var pos = res.data.data.aladdin
        that.setData({
          title: pos.title,
          desc:pos.desc,
          img: pos.cover,
          cname: pos.latest_chapter.cname,
          no1: pos.first_chapter.cname,

        })
      }
    })     
       
        // 检测用户手机屏幕宽度
        wx.getSystemInfo({
          success: function (res) {
            console.log('款式：', res)
            that.setData({
              wid: res.screenWidth /2,
              top: res.windowHeight -60
            })
          }
        })
      
  }, 
  // 点击观看后，缓存数据，在画架里显示
  bao:function(){
    let title = this.data.title      //书名
    console.log(title)
    // 获取画架的缓存数组（没有数据，则赋予一个空数组）
    var arr = wx.getStorageSync('book') || [];    
    if (arr.indexOf(title) ==-1 ){
      console.log('不在，保存')
      console.log('arr是',arr)
      arr.unshift(title)
      wx.setStorageSync('book', arr)
    }else{
      console.log('在呢，放首位')
      arr.unshift(title)
    }
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
  xiangqing:function(){
    this.setData({
      cen1: true,
      cen2:false,
      xiang:3,
      xuan:0
    })
  },
  xuanji:function(){
    this.setData({
      cen1: false,
      cen2:true,
      xiang: 0,
      xuan: 3
    })
  }

})