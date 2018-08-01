/**
 * z-button
 * @desc button组件
 *
 * @param { String } - form-type，同微信小程序原生 button
 * @param { String } - open-type，同微信小程序原生 button
 * @param { String } - hover-class，同微信小程序原生 button，默认值 .active
 * @param { Boolean } - hover-stop-propagation，同微信小程序原生 button
 * @param { Number } - hover-start-time，同微信小程序原生 button
 * @param { Number } - hover-stay-time，同微信小程序原生 button
 * @param { String } - lang，同微信小程序原生 button，默认值'zh_CN'
 * @param { String } - session-from，同微信小程序原生 button
 * @param { String } - send-message-title，同微信小程序原生 button
 * @param { String } - send-message-path，同微信小程序原生 button
 * @param { String } - send-message-img，同微信小程序原生 button
 * @param { Boolean } - show-message-card，同微信小程序原生 button
 * @param { Boolean } - app-parameter，同微信小程序原生 button
 * @param { String } - mode，button的模式，可选值 raised / flat / plain，默认值 raised
 * @param { String } - type，button的样式类型，可选值 primary / success / warning / danger / info / default，默认值 default
 * @param { String } - size，button的尺寸，可选值 mini / small / medium / large / x-large，默认值 medium
 * @param { Boolean } - loading，同微信小程序原生 button
 * @param { Boolean } - disabled，同微信小程序原生 button
 * @param { String } - border-radius，button的边角，可选值 base / circle / pill / none，默认值 base
 * @param { Boolean } - inline，行内button。mini / small默认为行内元素，medium / large / x-large默认为块元素
 * @param { String } - box-shadow，button的阴影，可选值 none，raised默认为有阴影，其他默认没有阴影
 * @param { Boolean } - fab，material design的 fab button，当 fab 时，size 仅可传 medium 和 large
 * @param { String } - element-style，自定义样式
 * @param { slot } - button的内容插槽
 */

Component({
  properties: {
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
    appParameter: Boolean,
    mode: {
      type: String,
      value: 'raised'
    },
    type: String,
    size: String,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    borderRadius: {
      type: String,
      value: 'base'
    },
    boxShadow: String,
    fab: Boolean,
    elementStyle: String
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
