/**
 * z-button
 * @desc button组件
 *
 * @prop { String } - form-type，同微信小程序原生 button
 * @prop { String } - open-type，同微信小程序原生 button
 * @prop { String } - hover-class，同微信小程序原生 button，默认值 .active
 * @prop { Boolean } - hover-stop-propagation，同微信小程序原生 button
 * @prop { Number } - hover-start-time，同微信小程序原生 button
 * @prop { Number } - hover-stay-time，同微信小程序原生 button
 * @prop { String } - lang，同微信小程序原生 button，默认值'zh_CN'
 * @prop { String } - session-from，同微信小程序原生 button
 * @prop { String } - send-message-title，同微信小程序原生 button
 * @prop { String } - send-message-path，同微信小程序原生 button
 * @prop { String } - send-message-img，同微信小程序原生 button
 * @prop { Boolean } - show-message-card，同微信小程序原生 button
 * @prop { Boolean } - app-propeter，同微信小程序原生 button
 * @prop { String } - mode，button的模式，可选值 raised / flat / plain，默认值 raised
 * @prop { String } - type，button的样式类型，可选值 primary / success / warning / danger / info / default，默认值 default
 * @prop { String } - size，button的尺寸，可选值 mini / small / medium / large / x-large，默认值 medium
 * @prop { Boolean } - loading，同微信小程序原生 button
 * @prop { Boolean } - disabled，同微信小程序原生 button
 * @prop { String } - border-radius，button的边角，可选值 base / circle / pill / none，默认值 base
 * @prop { Boolean } - inline，行内button。mini / small默认为行内元素，medium / large / x-large默认为块元素
 * @prop { String } - box-shadow，button的阴影，可选值 none，raised默认为有阴影，其他默认没有阴影
 * @prop { Boolean } - fab，material design的 fab button，当 fab 时，size 仅可传 medium 和 large
 * @prop { String } - element-style，自定义style
 * @prop { String } - class-name，自定义class
 * @prop { slot } - button的内容插槽
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
    bindTap: function bindTap() {
      this.triggerEvent('bind:tap');
      this.triggerEvent('bindtap');
    },
    catchTap: function catchTap() {
      this.triggerEvent('catch:tap');
      this.triggerEvent('catchtap');
    },
    longtap: function longtap() {
      this.triggerEvent('longtap');
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      var detail = e.detail || {};
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact: function bindcontact(e) {
      var detail = e.detail || {};
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      var detail = e.detail || {};
      this.triggerEvent('getphonenumber', detail);
    },
    binderror: function binderror(e) {
      var detail = e.detail || {};
      this.triggerEvent('error', detail);
    }
  },
  behaviors: {},
  created: function created() {},
  attached: function attached() {},
  ready: function ready() {},
  moved: function moved() {},
  detached: function detached() {},

  relations: {},
  externalClasses: ['class-name'],
  options: {}
});