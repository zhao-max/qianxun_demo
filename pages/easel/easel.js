// pages/search/search.
var tem = require('../template/template.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    font:'' ,
    height:''           //做个空列表，接收缓存的具体信息
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
    var list=[]
    let that = this
    var arr = wx.getStorageSync('book')
    console.log('这是书架获取的',arr)
    if(arr){                  // 如果获取到数据   显示书籍
      for( var i in arr){       //遍历列表数据
        var j = arr[i]
        console.log('这是遍历出来的数据',j)
        wx.request({
          url: "https://www.apiopen.top/novelInfoApi?name=" + j,
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            var resData = res.data.data.aladdin
            console.log(resData)
            list.unshift(resData)
            
              that.setData({
                height: list,
              font: true
            })
            console.log('这是要显示的数据呀', that.data.height)
          }
        })
      }
     
    }else{                    //如果没有数据   显示空白页
    console.log('没缓存，没数据')
      that.setData({
        font:''
      })
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

  },
  shanchu: function () {
    tem.huaRemove()
    this.setData({
      font: ''
    })
  },
  click:function(e){
    console.log( '这是在书架点击跳转的书籍',e)
    wx.navigateTo({
      url: '../details/details?bookname=' + e.currentTarget.dataset.name
    })
  }

})




