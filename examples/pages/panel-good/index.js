Page({
  data: {
    number: 0
  },
  onLoad () {},
  onReady () {},
  onShow () {},
  onHide () {},
  onUnload () {},
  onPullDownRefresh () {},
  onReachBottom () {},
  onShareAppMessage () {},
  onPageScroll () {},
  onTabItemTap () {},
  _handleNumber (e) {
    const val = e.detail
    this.setData({
      number: val
    })
  }
})
