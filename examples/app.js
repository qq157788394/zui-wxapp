App({
  globalData: {
    test: 'text-desc'
  },
  onLaunch () {
    this.wxPage()
  },
  // 扩展 Page 页面对象，在 Page 里面可以通过 this.$app 访问 App 的数据和方法
  wxPage () {
    const originalPage = Page //保存原来的Page
    Page = function (config) { // 覆盖Page变量
      config.$app = getApp()
      return originalPage(config)
    }
  }
})
