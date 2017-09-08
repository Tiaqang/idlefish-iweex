import App from './App.vue'
import VueRouter from 'vue-router'
import Vuei18n from 'vue-i18n'
import routes from './routes'
import orouter from './plugin/ORouter'

Vue.use(VueRouter)
Vue.use(Vuei18n)
Vue.use(orouter)

var router = new VueRouter({
  routes
})
var i18n = new Vuei18n({
  locale: 'zh'
})

VueRouter.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}

// 与weex.html页面交换ip
var _origin = window && window.location ? window.location.origin : 'http://localhost:8080'

// 与weex.html页面交换ip
window.addEventListener('message', function (e) {
  const { origin, data, source } = e
  console.log(source)
  if (data === 'requestIP' && origin === _origin) {
    const path = vm.$router.currentRoute.path
    const currentPath = path === '/' ? '/index' : path
    let address

    if (origin === 'http://localhost:8080') { // 本地开发
      address = `http://${process.env.IP}:8080/dist/weex/js${currentPath}.js`
    } else {  // 外网地址
      address = `${origin}/dist/weex/js/${currentPath}.js`
    }
    source.postMessage({ address }, '*')
  }
})
/* eslint-disable no-new */
const vm = new Vue({
  i18n,
  el: '#root',
  router,
  render: h => h(App)
})
