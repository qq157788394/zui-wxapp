/**
 * z-col
 * @desc 栅格布局的col
 *
 * @prop { Number } - span，1-24栅格，默认24
 * @prop { Number } - offset，栅格偏移，1-23
 * @prop { String } - element-style，style声明
 * @prop { String } - class-name，组件class
 */
Component({
  properties: {
    span: {
      type: Number,
      value: 24
    },
    offset: Number,
    elementStyle: String
  },
  data: {},
  methods: {},
  behaviors: {},
  created () {},
  attached () {},
  ready () {},
  moved () {},
  detached () {},
  relations: {
    '../z-row/index': {
      type: 'parent'
    }
  },
  externalClasses: ['class-name'],
  options: {}
})
