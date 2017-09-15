import App from '../src/views/recommenditem.vue'
import Vuei18n from 'vue-i18n'
import orouter from '../src/plugin/ORouter.js'

Vue.use(Vuei18n)
Vue.use(orouter)

const locale = weex.config.language || 'zh'
var i18n = new Vuei18n({
  locale
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#root',
  render: h => h(App)
})
