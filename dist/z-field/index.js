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
