// pages/search/search.
var tem = require('../template/template.js')

Page({

  data: {
    txtlist: [], //做列表存储历史
    kong: true, //显示  or  隐藏 热门搜索
    cha: false, //显示  or  隐藏 所有搜索内容
    aladdin: false, //显示  or  隐藏 主要搜索的内容
    ico: 3,
    inputValue: '', //输入的值
    ind: '', //遍历相似的10本书
    img: '', //查询出的图片
    title: '', //查询出的书名
    category: '', //查询出书的类型
    author: '', //查询出书的作者
    cname: '', //查询出书的章节
    mei: false //查不到数据时显示

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow: function() {
    let that = this
    wx.getStorage({
      key: 'History',
      success(res) {
        console.log('这是获取的输入历史', res.data)
        that.setData({
          txtlist: res.data
        })
      }
    })
  },

  input: function(e) {
    var value = e.detail.value
    this.setData({
      inputValue: value
    })
    if (e.detail.value) {
      this.setData({
        kong: false
      })
    } else {
      this.setData({
        kong: true,
        cha: false
      })
    }
  },

  sou: function() {
    var that = this
    var name = that.data.inputValue //input输入的值
    tem.loading()

    //做历史查询设置
    if (name) { //判断是否输入，
      let hos = that.data.txtlist //历史记录
      if (hos.indexOf(name) == -1) { //indexOf遍历列表  如果输入的值在列表中返回所在下标  如果不在列表中则返回-1
        hos.unshift(name) //放在列表首位
        wx.setStorage({
          key: "History",
          data: hos
        })
      } else {
        hos.unshift(name) //放在列表首位
      }
      wx.getStorage({
        key: 'History',
        success(res) {
          console.log('这是获取的输入历史', res.data)
          that.setData({
            txtlist: res.data
          })
        }
      })
    } else {
      console.log('没有输入')
    }

    //做搜索设置
    wx.request({

      url: 'https://www.apiopen.top/novelInfoApi?name=' + name,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('获取数据', res.data)
        console.log('空的', res.data.code)
        tem.hideloading()
        var code = res.data.code

        if (res.data.code == 200) { //如果获取数据为200，表示成功
          console.log('获取成功，等于200')
          if (res.data.data.aladdin && res.data.data.aladdin.first_chapter) { //获取数据成功，且搜索的书名为真的话显示
            var title = res.data.data.aladdin
            var duo = res.data.data.data
            console.log('等于200，书名为真')
            that.setData({
              img: title.cover,
              title: title.title,
              category: title.category,
              author: title.author,
              cname: title.first_chapter.cname,
              ind: res.data.data.data,
              cha: true,
              aladdin: true,
              mei: false

            })

          } else { //获取成功，但是没有要搜索的书名 data:null
            console.log('等于200，没找到搜索书名')
            that.setData({
              ind: res.data.data.data,
              cha: true,
              mei: false
            })
          }
        } else { //否则查询不到则显示
          console.log('没获取到，不等于200')
          that.setData({
            mei: true,
            kong: false
          })
        }
      }
    })
  },

  shanchu:function(){
    tem.removestorage()
    this.setData({
      txtlist:[]
    })
  },

  // 点击书名跳转详情页
  book:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../details/details?bookname=' + e.currentTarget.dataset.title
    })
  },

  classbook: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../details/details?bookname=' + e.currentTarget.dataset.title
    })
  }

})