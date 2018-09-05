/**
 * z-tag 标记
 * @desc 标记
 *
 * @prop { String } size - 尺寸，默认medium，可选值medium，small，mini
 * @prop { String } color - 颜色类型，默认值primary，可选值primary, success, warning, danger, info
 * @prop { Boolean } hit - 是否有边框描边
 * @prop { Boolean } cricle - 是否圆角
 * @prop { Boolean } mark - 是否标记用，左下角直角
 */

Component({
  properties: {
    size: {
      type: String,
      value: 'medium'
    },
    color: {
      type: String,
      value: 'primary'
    },
    hit: Boolean,
    cricle: Boolean,
    mark: Boolean
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
