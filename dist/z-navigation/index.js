/**
 * @name z-navigation
 * @author huangzhuo
 * @description 自定义导航组件
 * @param { String } - navigationBarColor，自定义导航颜色设置，statusBarColor: 顶部状态栏文字颜色，可选#000000和#ffffff，默认值#000000；frontColor: 导航栏文字颜色，默认值#000000；backgroundColor：导航栏背景颜色，默认值#ffffff
 * @param { String } - icon显示内容，可选值home，back
 * @param { String } - 导航栏文字
 * @param { Boolean } - 是否可以滑动，导航栏为tab时有效
 * @param { Array } - tab导航的导航选项数组对象，包含id和title
 * @param { String, Number } - 选中的导航id
 * @param { slot } - 自定义显示内容
 * @example <z-navigation navigationBarColor="{{ navigationBarColor }}" title="{{ title }}"></z-navigation>
 */
Component({
  properties: {
    navigationBarColor: {
      type: Object,
      value: {
        statusBarColor: '#000000',
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      }
    },
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
    _getSystemInfo () {
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
    },
    _handleIcon () {
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
    },
    _setNavigationBarColor () {
      wx.setNavigationBarColor({
        frontColor: this.data.navigationBarColor.statusBarColor,
        backgroundColor: this.data.navigationBarColor.backgroundColor
      })
    }
  },
  behaviors: [],
  created () {},
  attached () {
    this._getSystemInfo()
    this._setNavigationBarColor()
  },
  ready () {},
  moved () {},
  detached () {},
  relations: {},
  externalClasses: ['class-name'],
  options: {}
})
