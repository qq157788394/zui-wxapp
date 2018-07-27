Component({
  properties: {
    size: String,
    type: String,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    formType: String,
    openType: String,
    hoverClass: {
      type: String,
      value: 'active'
    },
    hoverStopPropagation: Boolean,
    hoverStartTime: Number,
    hoverStayTime: Number,
    lang: {
      type: String,
      value: 'zh_CN'
    },
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: Boolean
  },
  data: {},
  methods: {
    bindTap () {
      this.triggerEvent('bind:tap')
      this.triggerEvent('bindtap')
    },
    catchTap () {
      this.triggerEvent('catch:tap')
      this.triggerEvent('catchtap')
    },
    longtap () {
      this.triggerEvent('longtap')
    },
    bindgetuserinfo (e) {
      const detail = e.detail || {}
      this.triggerEvent('getuserinfo', detail)
    },
    bindcontact (e) {
      const detail = e.detail || {}
      this.triggerEvent('contact', detail)
    },
    bindgetphonenumber (e) {
      const detail = e.detail || {}
      this.triggerEvent('getphonenumber', detail)
    },
    binderror (e) {
      const detail = e.detail || {}
      this.triggerEvent('error', detail)
    }
  },
  behaviors: {},
  created () {},
  attached () {},
  ready () {},
  moved () {},
  detached () {},
  relations: {},
  externalClasses: {},
  options: {}
})
