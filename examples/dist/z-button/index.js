Component({
  properties: {
    size: String,
    type: String,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    formType: String,
    openType: String,
    hoverClass: {
      type: String,
      value: 'active'
    },
    hoverStopPropagation: Boolean,
    hoverStartTime: Number,
    hoverStayTime: Number,
    lang: {
      type: String,
      value: 'zh_CN'
    },
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: Boolean
  },
  data: {},
  methods: {
    bindTap: function bindTap() {
      this.triggerEvent('bind:tap');
      this.triggerEvent('bindtap');
    },
    catchTap: function catchTap() {
      this.triggerEvent('catch:tap');
      this.triggerEvent('catchtap');
    },
    longtap: function longtap() {
      this.triggerEvent('longtap');
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      var detail = e.detail || {};
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact: function bindcontact(e) {
      var detail = e.detail || {};
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      var detail = e.detail || {};
      this.triggerEvent('getphonenumber', detail);
    },
    binderror: function binderror(e) {
      var detail = e.detail || {};
      this.triggerEvent('error', detail);
    }
  },
  behaviors: {},
  created: function created() {},
  attached: function attached() {},
  ready: function ready() {},
  moved: function moved() {},
  detached: function detached() {},

  relations: {},
  externalClasses: {},
  options: {}
});