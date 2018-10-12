Component({
  properties: {
    image: String,
    title: String,
    desc: String,
    capsuleTitle: String,
    capsuleDesc: String,
    capsuleType: {
      type: String,
      value: 'danger'
    },
    price: Number,
    priceRise: Boolean
    // number: Number,
    // stepperType: {
    //   type: String,
    //   value: 'primary'
    // },
    // stepperMax: {
    //   type: Number,
    //   value: Infinity
    // },
    // stepperStep: {
    //   type: Number,
    //   value: 1
    // }
  },
  data: {},
  methods: {
    // _bindchange (e) {
    //   const val = e.detail
    //   this.triggerEvent('change', val)
    // }
  },
  behaviors: [],
  relations: {},
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
