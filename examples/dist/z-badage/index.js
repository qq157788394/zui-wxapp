/**
 * z-badge 徽章
 */
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
