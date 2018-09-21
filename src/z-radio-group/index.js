/**
 * z-radio-group
 * @desc 单选组
 *
 * @prop { Array } list - 选项数组[{label: label, value: value, disabled: true, checked: true}]格式
 * @prop { String } selected - 已选中的value
 * @prop { Boolean } color - 自定义选中icon的颜色
 * @prop { String } fontSize - 自定义lable的字号
 * @prop { String } type - 颜色类型，可选值primary/success/warning/danger/info，默认primary
 * @prop { Boolean } inline - 是否行内
 */
Component({
  properties: {
    list: Array,
    selected: String,
    disabled: Boolean,
    color: String,
    fontSize: String,
    type: {
      type: String,
      value: 'primary'
    },
    inline: Boolean
  },
  data: {},
  methods: {
    _bindchange (e) {
      const val = e.detail
      this.triggerEvent('change', val)
    }
  },
  behaviors: ['wx://form-field'],
  relations: {},
  externalClasses: ['class-name', 'label-class', 'cell-class'],
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
