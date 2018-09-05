/**
 * z-row
 * @desc 栅格布局的row
 *
 * @prop { String } - element-style，style声明
 * @prop { String } - class-name，组件class
 */

Component({
  properties: {
    elementStyle: String
  },
  data: {},
  methods: {},
  behaviors: [],
  relations: {
    '../z-col/index': {
      type: 'child'
    }
  },
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
