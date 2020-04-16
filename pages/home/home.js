// pages/home/home.js
import request from '../../service/newwork.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 原生方式发送网络请求
    // this.get_data_origin()
    // 2.使用封装的request发送网络请求
    request({
      url: 'http://114.55.90.2:9001/api/finance/product',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  get_data_origin() {
    // 1.发送最简单的get请求
    wx.request({
      url: 'http://114.55.90.2:9001/api/finance/product',
      success: function (res) {
        console.log(res);
      }
    })
    // 2.get请求，但是携带参数
    wx.request({
      url: 'http://114.55.90.2:9001/api/finance/product',
      data: {
        province: '江苏省',
        city: '宿迁市'
      },
      success: function (res) {
        console.log(res);
      }
    })
    // 3.post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'coderwhy',
        age: 18
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err);
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

  }
})