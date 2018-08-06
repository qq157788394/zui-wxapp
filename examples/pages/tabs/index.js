Page({
  data: {
    list: [
      {
        id: 'tab1',
        title: '标签1'
      },
      {
        id: 'tab2',
        title: '标签2'
      },
      {
        id: 'tab3',
        title: '标签3'
      },
      {
        id: 'tab4',
        title: '标签4'
      },
      {
        id: 'tab5',
        title: '标签5'
      },
      {
        id: 'tab6',
        title: '标签6'
      },
      {
        id: 'tab7',
        title: '标签7'
      }
    ],
    selectedId: 'tab2',
    scroll: true,
    fixed: false,
    height: 48
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
  onTabsChange (e) {
    this.setData({
      selectedId: e.detail
    })
  }
})
