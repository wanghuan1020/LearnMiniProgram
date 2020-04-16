export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'GET',
//       data: options.data || {},
//       success: (result) => {
//         resolve(result)
//       },
//       fail: (res) => {
//         reject(res)
//       }
//     })
//   })
// }