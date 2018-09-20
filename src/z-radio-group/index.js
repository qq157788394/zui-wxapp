Component({
  properties: {
    list: Array,
    selected: String,
    disabled: Boolean,
    color: String,
    type: {
      type: String,
      value: 'primary'
    },
    mode: {
      type: String,
      value: 'flex'
    }
  },
  data: {},
  methods: {
    _bindchange (e) {
      const val = e.detail
      this.triggerEvent('change', val)
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
