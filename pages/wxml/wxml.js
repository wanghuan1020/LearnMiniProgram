// pages/wxml/wxml.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: '你好小程序',
    firstName: 'kobe',
    lastName: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [10, 14, 11, 18],
      [20, 24, 31, 48],
      [110, 124, 211, 318]
    ],
    letters: ['a', 'b', 'c']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },
  handleSwicthColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 5
    })
  },
  numberToFixed(value) {
    return value.toFixed(2)
  }
})