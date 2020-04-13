// pages/home/home.js
// getApp()获取App()产生的实例对象
const app = getApp()
console.log(app.globalData);
const {name, age} = app.globalData
console.log(name, age);
// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // 2.初始化数据
  data: {
    msg: '哈哈哈'
  },
  // 3.监听wxml中相关的一些事件
  handleGetUserInfo(event) {
    console.log(event); 
  },
  // 1.监听页面的生命周期函数
  // 页面被加载出来
  onLoad() {
    console.log('onLoad');
  },
  // 页面初次渲染完成
  onReady() {
    console.log('onReady');
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow');
  },
  // 页面隐藏起来时
  onHide() {
    console.log('onHide');
  },
  onUnload() {
    console.log('onUnload');
  },
  // 4.监听其他事件
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新');
  }
})