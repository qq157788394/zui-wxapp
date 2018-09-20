Page({
  data: {
    list: [
      {
        value: 'value1',
        label: 'label1'
      },
      {
        value: 'value2',
        label: 'label2'
      },
      {
        value: 'value3',
        label: 'label3'
      },
      {
        value: 'value4',
        label: 'label4'
      }
    ],
    selected: 'value1'
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
  bindchange (e) {
    const val = e.detail.value
    this.setData({
      selected: val
    })
  }
})
