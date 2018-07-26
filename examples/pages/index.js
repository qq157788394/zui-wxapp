Page({
  data: {},
  onLoad () {
    this.getAppData()
  },
  getAppData () {
    const t = this.$app.globalData
    console.log(t)
  }
})
