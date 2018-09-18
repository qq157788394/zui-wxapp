/**
 * z-card 卡片
 * @desc 卡片
 *
 * @prop { Boolean } isLink - 是否有点击效果
 * @prop { Boolean } border - 是否有边框
 * @prop { Boolean } boxShadow - 是否有阴影
 * @prop { String } marginY - 左右的margin
 * @prop { String } elementStyle - 自定义style
 * @prop { String } className - 自定义class
 */

Component({
  properties: {
    isLink: Boolean,
    border: Boolean,
    boxShadow: Boolean,
    marginY: String,
    elementStyle: String
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
