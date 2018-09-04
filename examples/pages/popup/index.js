Page({
  data: {
    visible: false
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
  handleVisible (e) {
    this.setData({
      visible: e.detail
    })
  }
})
