Component({
  properties: {
    type: String,
    icon: String,
    title: String,
    scroll: {
      type: Boolean,
      value: false
    },
    list: {
      type: Array,
      value: []
    },
    selectedId: {
      type: [String, Number],
      value: ''
    }
  },
  data: {
    navigationStyle: {},
    system: '',
    scrollLeft: 0
  },
  methods: {
    getSystemInfo () {
      const SYSTEM_INFO = wx.getSystemInfoSync()
      // 判断系统类型
      const _system = SYSTEM_INFO.system.toLowerCase()
      const IS_ANDROID = !!(_system.indexOf('android') > -1)
      let _s
      if (IS_ANDROID) {
        _s = 'android'
      } else {
        _s = 'ios'
      }
      const SYSTEM = _s
      // 状态栏高度
      const STATUS_BAR_HEIGHT = SYSTEM_INFO.statusBarHeight
      let _v
      if (IS_ANDROID) {
        _v = 48
      } else {
        _v = 44
      }
      // 导航栏高度
      const NAVIGATION_HEIGHT = _v + STATUS_BAR_HEIGHT
      let navigationStyle = {
        paddingTop: `${STATUS_BAR_HEIGHT}px`,
        height: `${NAVIGATION_HEIGHT}px`,
        tabHeight: `${_v}px`
      }
      this.setData({
        navigationStyle: navigationStyle,
        system: SYSTEM
      })
      console.info(['zui:navigation'], this.data.navigationStyle)
      console.info(['zui:system'], this.data.system)
    },
    handleIcon () {
      this.triggerEvent('tap')
    },
    _handleScroll (selectedId) {
      const query = wx.createSelectorQuery().in(this)
      query.select(`#item-${selectedId}`).boundingClientRect()
      query.select('#scroll-view').boundingClientRect()
      query.select('#scroll-view').scrollOffset()
      query.exec(res => {
        this.setData({
          scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
        })
      })
    },
    _handleTabChange (e) {
      const selectedId = e.currentTarget.dataset.itemId

      if (this.data.scroll) {
        this._handleScroll(selectedId)
      }

      this.setData({
        selectedId
      })

      console.info('[zui:tab:change] selectedId:', selectedId)
      this.triggerEvent('tabchange', selectedId)
    }
  },
  behaviors: {},
  created () {},
  attached () {
    this.getSystemInfo()
  },
  ready () {},
  moved () {},
  detached () {},
  relations: {},
  externalClasses: ['class-name'],
  options: {}
})
