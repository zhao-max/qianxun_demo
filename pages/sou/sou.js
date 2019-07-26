// pages/sou/sou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    succ:[
      {click:'shaonv',
        name:'少女',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562738669552&di=ac00ec409b685e33d74fbd08a228bfcd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F09%2F20150809140542_K3ZrB.jpeg'
      },
      {
        click: 'wuxia',
        name: '武侠',
        img: 'http://k2.jsqq.net/uploads/allimg/1708/17_170822164203_1.jpg'
      },
      {
        click: 'kongbu',
        name: '恐怖',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737400007&di=1e8405134bc9c97b81fda46b925af837&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2016%2F12%2F04%2F83adc951fcf3433219322e3bf8c165aa.jpg'
      },
      {
        click: 'rexue',
        name: '热血',
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2217464559,1853590784&fm=26&gp=0.jpg'
      },
      {
        click: 'gaoxiao',
        name: '搞笑',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562738950020&di=fd526f57537a6067b2d89e78938b5702&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201502%2F21%2F20150221003316_ZVBh8.thumb.700_0.jpeg'
      },
      {
        click: 'danmei',
        name: "耽美",
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737912911&di=2a5567c7aea9fbc8eb7753490dc9dda5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F12%2F20170812193511_eXTJs.jpeg'
      },
      {
        click: 'kehuan',
        name: '科幻',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562738078189&di=48d8a4973e0deb533c6164a81e2202a3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018ad95644988c6ac7259e0f6bfe23.jpg%40900w_1l_2o_100sh.jpg'
      },
      {
        click: 'zhentan',
        name: '侦探',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=125334059,1865213511&fm=26&gp=0.jpg'
      },
      {
        click: 'jingji',
        name: '竞技',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562738281103&di=12f102c1025a12d72bd83c2efbb9b36f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160821%2F1b610f91db4e4fee8a82294cbc8ae8e2_th.jpg'
      }
    ]
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
  suo: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  renqi:function(){
    wx.navigateTo({
      url: '../ranking/ranking?name='+'人气榜'
    })
  },
  gengxin:function(){
    wx.navigateTo({
      url: '../ranking/ranking?name='+'更新榜'
    })
  },

  // 9个分类框
  shaonv:function(){
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  wuxia: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  kongbu: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  rexue: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  gaoxiao: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  danmei: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  kehuan: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  zhentan: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
  jingji: function () {
    wx.showToast({
      title: '接口未配置',
      icon: 'loading',
      duration: 2000
    })
  },
})