// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,  // 视频详情
    otherList: [],  // 推荐视频
  },

  /**
   * 根据id获取视频信息
   */
  getCurrentVideo(id) {
    let that = this
    wx.request({
      url: 'https://mock-api.com/mnEe4VnJ.mock/videoDetail?id=' + id,
      success(res) {
        const { data } = res
        if (data.code === 0) {
          that.setData({
            videoInfo: data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频
   */
  getOthersList(id) {
    let that = this
    wx.request({
      url: 'https://mock-api.com/mnEe4VnJ.mock/otherList?id=' + id,
      success(res) {
        const { data } = res
        if (data.code === 0) {
          that.setData({
            otherList: data.data.otherList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id: videoId } = options
    this.getCurrentVideo(videoId)
    this.getOthersList(videoId)
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