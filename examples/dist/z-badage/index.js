Component({
  properties: {
    value: {
      type: [Number, String]
    },
    isDot: Boolean,
    max: Number,
    hidden: Boolean
  },
  data: {},
  methods: {},
  behaviors: [],
  created () {},
  attached () {},
  ready () {
    console.log(this.properties)
  },
  moved () {},
  detached () {},
  relations: {},
  externalClasses: ['class-name'],
  options: {}
})
