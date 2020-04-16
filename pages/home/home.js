// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      // image: "图片路径"
      success: function () {
        console.log('展示弹窗成功');
      },
      fail: function () {
        console.log('展示弹窗失败');
      },
      complete: function () {
        console.log('展示弹窗完成');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        console.log(res);
        if(res.cancel) {
          console.log('用户点击了取消按钮');
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing', 
      mask: true
    })
    setTimeout(()=>{
      wx.hideLoading()
    }, 2000)
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res); // tapIndex
      }
    })
  },
  onShareAppMessage(options) {
    console.log(options);
    return {
      title: '你好啊，你银河',
      path: '/pages/about/about',
      imageUrl: 'http://attach.bbs.miui.com/forum/201401/22/134002dhye9qe2g2nq2geu.jpg'
    }
  }
})