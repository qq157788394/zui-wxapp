Component({
  properties: {
    value: String,
    label: String,
    disabled: Boolean,
    checked: Boolean,
    type: {
      type: String,
      value: 'primary'
    },
    color: String,
    mode: {
      type: String,
      value: 'flex'
    }
  },
  data: {},
  methods: {},
  behaviors: [],
  relations: {
    '../z-radio-group/index': {
      type: 'parent'
    }
  },
  externalClasses: [],
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
