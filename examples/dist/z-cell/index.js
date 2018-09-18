/**
 * z-cell 单元格
 * @desc 单元格
 *
 * @prop { String } size - 尺寸，可选值medium, small, 默认值medium
 * @prop { Boolean } hd - 是否有左侧内容
 * @prop { Boolean } bd - 是否有中间内容
 * @prop { Boolean } ft - 是否有右面的内容
 * @prop { String } hdText - 左侧内容文字
 * @prop { String } bdText - 中间内容文字
 * @prop { String } ftText - 右侧内容文字
 * @prop { Boolean } isLink - 是否有点击效果
 * @prop { Boolean } chevronRight - 是否有右侧箭头icon
 * @prop { Boolean } divider - 是否有底部分隔线
 * @prop { slot } hd - hd插槽
 * @prop { slot } bd - bd插槽
 * @prop { slot } ft - ft插槽
 */

Component({
  properties: {
    size: {
      type: String,
      value: 'small'
    },
    divider: Boolean,
    hd: Boolean,
    bd: Boolean,
    ft: Boolean,
    hdText: String,
    bdText: String,
    ftText: String,
    isLink: Boolean,
    chevronRight: Boolean
  },
  data: {},
  methods: {},
  behaviors: [],
  relations: {},
  externalClasses: ['class-name', 'hd-class', 'bd-class', 'ft-class'],
  options: {
    multipleSlots: true
  },
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
