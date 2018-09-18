Component({
  properties: {
    divider: String,
    elementStyle: String,
    title: String,
    label: String,
    desc: String,
    titleStyle: String,
    labelStyle: String,
    descStyle: String
  },
  data: {},
  methods: {},
  behaviors: [],
  relations: {},
  externalClasses: ['class-name', 'title-class', 'label-class', 'desc-class'],
  options: {
    multipleSlots: true
  },
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
