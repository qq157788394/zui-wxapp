/**
 * z-badge 徽章
 * @desc 右上角显示数字
 *
 * @prop { Number, String } value - 数值
 * @prop { Boolean } isDot - 是否只有红点
 * @prop { Number } max - 最大值，超出会显示xx+
 * @prop { Boolean } hidden - 是否隐藏
 */
Component({
  properties: {
    value: {
      type: [Number, String]
    },
    isDot: Boolean,
    max: Number,
    hidden: Boolean
  },
  data: {},
  methods: {},
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
