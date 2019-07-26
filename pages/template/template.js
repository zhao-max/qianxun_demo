// 加载
function loading(){
  wx.showLoading({
    title: '加载中',
  })
}

// 加载完毕
function  hideloading(){
  wx.hideLoading()
}


function storage(title){
  let name =[]
  if (name.indexOf(title) == -1) {    //如果该本书不在列表里，
    name.unshift(title)
    wx.setStorage({
      key: "bookname",
      data: name
    })

  } else {
    name.unshift(title)
  }
}





function removestorage(){  // 搜索历史缓存
  wx.removeStorage({
    key: 'History',
  })
}
function huaRemove() {   //画架缓存
  wx.removeStorage({
    key: 'book',
  })
}


// 暴露接口，
module.exports={
  loading: loading,
  hideloading: hideloading,
  storage: storage,
  removestorage: removestorage,
  huaRemove: huaRemove
}

