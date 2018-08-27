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
    getSystemInfo: function getSystemInfo() {
      var SYSTEM_INFO = wx.getSystemInfoSync();
      // 判断系统类型
      var _system = SYSTEM_INFO.system.toLowerCase();
      var IS_ANDROID = !!(_system.indexOf('android') > -1);
      var _s = void 0;
      if (IS_ANDROID) {
        _s = 'android';
      } else {
        _s = 'ios';
      }
      var SYSTEM = _s;
      // 状态栏高度
      var STATUS_BAR_HEIGHT = SYSTEM_INFO.statusBarHeight;
      var _v = void 0;
      if (IS_ANDROID) {
        _v = 48;
      } else {
        _v = 44;
      }
      // 导航栏高度
      var NAVIGATION_HEIGHT = _v + STATUS_BAR_HEIGHT;
      var navigationStyle = {
        paddingTop: STATUS_BAR_HEIGHT + 'px',
        height: NAVIGATION_HEIGHT + 'px',
        tabHeight: _v + 'px'
      };
      this.setData({
        navigationStyle: navigationStyle,
        system: SYSTEM
      });
      console.info(['zui:navigation'], this.data.navigationStyle);
      console.info(['zui:system'], this.data.system);
    },
    handleIcon: function handleIcon() {
      this.triggerEvent('tap');
    },
    _handleScroll: function _handleScroll(selectedId) {
      var _this = this;

      var query = wx.createSelectorQuery().in(this);
      query.select('#item-' + selectedId).boundingClientRect();
      query.select('#scroll-view').boundingClientRect();
      query.select('#scroll-view').scrollOffset();
      query.exec(function (res) {
        _this.setData({
          scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
        });
      });
    },
    _handleTabChange: function _handleTabChange(e) {
      var selectedId = e.currentTarget.dataset.itemId;

      if (this.data.scroll) {
        this._handleScroll(selectedId);
      }

      this.setData({
        selectedId: selectedId
      });

      console.info('[zui:tab:change] selectedId:', selectedId);
      this.triggerEvent('tabchange', selectedId);
    }
  },
  behaviors: {},
  created: function created() {},
  attached: function attached() {
    this.getSystemInfo();
  },
  ready: function ready() {},
  moved: function moved() {},
  detached: function detached() {},

  relations: {},
  externalClasses: ['class-name'],
  options: {}
});