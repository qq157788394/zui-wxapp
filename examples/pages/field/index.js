Page({
  data: {
    value: '已输入内容',
    placeholder: '请输入内容'
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
  handleinput (e) {
    this.setData({
      value: e.detail.value
    })
  }
})
