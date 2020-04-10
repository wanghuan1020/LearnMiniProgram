// pages/home/home.js
Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [{
        id: 0,
        name: 'kobe',
        age: 30
      },
      {
        id: 1,
        name: 'james',
        age: 28
      },
      {
        id: 2,
        name: 'curry',
        age: 32
      },
      {
        id: 3,
        name: 'why',
        age: 18
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法: 界面无法刷新
    // this.data.counter += 1
    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})