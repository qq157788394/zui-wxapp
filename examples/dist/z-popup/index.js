/**
 * z-popup
 * @desc 弹出层
 *
 * @prop { Boolean } visible - 显示隐藏
 * @prop { Slot } slot - 内容插槽
 */
Component({
  properties: {
    visible: Boolean
  },
  data: {},
  methods: {
    handleVisible () {
      const { visible } = this.data
      const val = !visible
      let event
      switch (val) {
        case true:
          event = 'open'
          break
        case false:
          event = 'close'
          break
      }
      this.triggerEvent(event)
      this.triggerEvent('change', val)
    }
  },
  behaviors: [],
  created () {},
  attached () {},
  ready () {},
  moved () {},
  detached () {},
  relations: {},
  externalClasses: ['class-name', 'mask-class'],
  options: {}
})
