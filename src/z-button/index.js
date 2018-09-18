/**
 * z-button
 * @desc button组件
 *
 * @prop { String } formType - 同微信小程序原生 button
 * @prop { String } openType - 同微信小程序原生 button
 * @prop { String } hoverClass - 同微信小程序原生 button，默认值 .active
 * @prop { Boolean } hoverStopPropagation - 同微信小程序原生 button
 * @prop { Number } hoverStartTime - 同微信小程序原生 button
 * @prop { Number } hoverStayTime - 同微信小程序原生 button
 * @prop { String } lang - 同微信小程序原生 button，默认值'zh_CN'
 * @prop { String } sessionFrom - 同微信小程序原生 button
 * @prop { String } sendMessageTitle - 同微信小程序原生 button
 * @prop { String } sendMessagePath - 同微信小程序原生 button
 * @prop { String } sendMessageImg - 同微信小程序原生 button
 * @prop { Boolean } showMessageCard - 同微信小程序原生 button
 * @prop { Boolean } appPropeter - 同微信小程序原生 button
 * @prop { String } mode - button的模式，可选值 raised / flat / plain，默认值 raised
 * @prop { String } type - button的样式类型，可选值 primary / success / warning / danger / info / default，默认值 default
 * @prop { String } size - button的尺寸，可选值 mini / small / medium / large / x-large，默认值 medium
 * @prop { Boolean } loading - 同微信小程序原生 button
 * @prop { Boolean } disabled - 同微信小程序原生 button
 * @prop { String } borderRadius - button的边角，可选值 base / circle / pill / none，默认值 base
 * @prop { Boolean } inline - 行内button。mini / small默认为行内元素，medium / large / x-large默认为块元素
 * @prop { String } boxShadow - button的阴影，可选值 none，raised默认为有阴影，其他默认没有阴影
 * @prop { Boolean } fab - material design的 fab button，当 fab 时，size 仅可传 medium 和 large
 * @prop { String } elementStyle - 自定义style
 * @prop { String } className - 自定义class
 * @prop { slot } button - 的内容插槽
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
    apppropeter: Boolean,
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
  behaviors: [],
  relations: {},
  externalClasses: ['class-name'],
  options: {},
  lifetimes: {
    created () {},
    attached () {},
    ready () {},
    moved () {},
    detached () {}
  },
  pageLifetimes: {},
  definitionFilter () {}
})
