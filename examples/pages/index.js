Page({
  data: {},
  onLoad () {
  },
  bindTap (e) {
    console.log('bind', e)
  },
  catchTap (e) {
    console.log('catch', e)
  },
  longTap (e) {
    console.log('long', e)
  },
  bindgetuserinfo (e) {
    console.log(e)
  }
})
