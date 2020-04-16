// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event);
  },
  handleIncrementCpn() {
    // 修改my-sel中的counter
    console.log('-----');
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel);
    // 2.通过setData修改组件中的数据（不推荐）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
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

  }
})