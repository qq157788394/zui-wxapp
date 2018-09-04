Page({
  data: {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    disabled: true
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
  bindChange (e) {
    const val = e.detail
    this.setData({
      value: val
    })
  }
})
