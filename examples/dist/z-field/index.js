/**
 * z-field 输入框
 * @desc 输入框
 *
 * @prop { String } mode - 类型，可选值input、textarea，默认input
 * @prop { String } label - label的文字
 * @prop { String } labelWidth - label的自定义宽度，默认6em
 * @prop { Boolean } labelDivider - label右面的边框
 * @prop { Boolean } divider - 是否有底部边框
 * @prop { String } size - 尺寸，默认是medium，可选值small，small的文字大小是14px，medium是16px
 * @prop { String } value - 值内容
 * @prop { Boolean } counter - 字数统计，仅textarea下可用
 * @prop { String } className
 * @prop { String } labelClass
 * @prop { String } inputClass
 * @prop { String } textareaClass
 * @prop { String } placeholderClass
 * @prop { other } other - 其余字段，跟微信小程序的一样
 */
Component({
  properties: {
    mode: {
      type: String,
      value: 'input'
    },
    label: String,
    labelWidth: String,
    labelDivider: Boolean,
    divider: Boolean,
    size: String,
    value: String,
    type: {
      type: String,
      value: 'text'
    },
    password: Boolean,
    placeholder: String,
    placeholderStyle: String,
    disabled: Boolean,
    maxlength: {
      type: Number,
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    focus: Boolean,
    confirmType: {
      type: String,
      value: 'done'
    },
    confirmHold: String,
    cursor: Number,
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    // 以下是textarea的特有属性
    autoHeight: Boolean,
    fixed: Boolean,
    showConfirmBar: {
      type: Boolean,
      value: true
    },
    counter: Boolean
  },
  data: {},
  methods: {
    _bindinput (e) {
      this.triggerEvent('input', e.detail)
    },
    _bindfocus (e) {
      this.triggerEvent('focus', e.detail)
    },
    _bindblur (e) {
      this.triggerEvent('blur', e.detail)
    },
    _bindconfirm (e) {
      this.triggerEvent('confirm', e.detail)
    },
    _bindlinechange (e) {
      this.triggerEvent('change', e.detail)
    }
  },
  behaviors: ['wx://form-field'],
  relations: {},
  externalClasses: ['class-name', 'label-class', 'input-class', 'textarea-class', 'placeholder-class'],
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
