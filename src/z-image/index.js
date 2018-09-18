/**
 * z-image 图片
 * @desc 图片
 *
 * @prop { String } src - 图片资源地址
 * @prop { String } mode - 图片裁剪、缩放的模式，默认aspectFill
 * @prop { Boolean } lazyLoad - 图片懒加载
 * @prop { String } size - 图片尺寸，默认值200px
 * @prop { String } width - 宽度
 * @prop { String } height - 高度
 * @prop { String } borderRadius - border-radius
 * @prop { Boolean } border - 是否有边框
 * @prop { Boolean } inline - 是否行内元素
 * @prop { String } elementStyle - 自定义style
 * @prop { String } className - 自定义class
 */

Component({
  properties: {
    src: String,
    mode: {
      type: String,
      value: 'aspectFill'
    },
    lazyLoad: Boolean,
    size: {
      type: String,
      value: '200px'
    },
    width: String,
    height: String,
    borderRadius: String,
    border: Boolean,
    inline: Boolean,
    elementStyle: String
  },
  data: {
    error: false
  },
  methods: {
    _binderror (e) {
      this.setData({
        error: true
      })
      this.triggerEvent('error', e.detail)
    },
    _bindload (e) {
      this.triggerEvent('load', e.detail)
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
