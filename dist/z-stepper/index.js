/**
 * z-stepper
 * @desc 步进器
 *
 * @prop { Number } value - 数据值
 * @prop { Number } max - 最大值，默认Infinity
 * @prop { Number } min - 最小值，默认0
 * @prop { Number } step - 步长，默认1
 * @prop { Boolean } disabled - 禁用
 * @prop { String } iconColor - icon颜色
 * @prop { String } type - 类型，默认primary，可选值primary, success, warning, danger, info
 * @prop { Boolean } transition - 动画选项，启用后，为0的时候会隐藏减号，跟外卖平台添加商品一样，该模式min值必须设置为0
 */
Component({
  properties: {
    value: Number,
    max: {
      type: Number,
      value: Infinity
    },
    min: {
      type: Number,
      value: 0
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: Boolean,
    iconColor: String,
    type: {
      type: String,
      value: 'primary'
    },
    transition: Boolean
  },
  data: {},
  methods: {
    handleChange (e) {
      const { step, value, disabled } = this.data
      const { dataset = {} } = e.currentTarget
      const type = dataset.type
      const disabledMinus = dataset.disabledMinus
      const disabledPlus = dataset.disabledPlus
      let val
      if (!disabled) {
        if (disabledMinus || disabledPlus) {
          console.info(`overlimit: ${type}`)
          this.triggerEvent('overlimit', type)
        } else {
          switch (type) {
            case 'minus':
              val = value - step
              break
            case 'plus':
              val = value + step
              break
          }
          this.triggerEvent('change', this.correctValue(val))
        }
      }
    },
    correctValue (val) {
      const { min, max } = this.data
      let _value = val
      if (val <= min) {
        _value = min
      } else if (val >= max) {
        _value = max
      }
      return _value
    }
  },
  behaviors: [],
  created () {},
  attached () {},
  ready () {},
  moved () {},
  detached () {},
  relations: {},
  externalClasses: ['class-name'],
  options: {}
})
