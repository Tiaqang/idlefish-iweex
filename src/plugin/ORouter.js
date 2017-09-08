/* eslint-disable */
var qs = require('qs')
var MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  const TYPE = process.env.COMPILE_ENV
  const platform = WXEnvironment.platform
  // 3. 注入组件
  Vue.mixin({
    methods: {
      jump (path, query) {
        console.log('will jump ' + TYPE)

        if (TYPE === 'vue') {
          if (this.$router) {
            this.$router.push({
              query: query,
              path: path
            })
          }
        }
        if (TYPE === 'weex') {
          var queryString = query ? '?' + qs.stringify(query) : ''
          var url = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + path + '.js' + queryString

          console.log('will jump ' + url)
          navigator.push({
            url,
            animated: 'true'
          })
        }
      },
      jumpout (path) {
        console.log('will jump out')
        if (TYPE === 'vue') {
          if (this.$router) {
            this.$router.go(-1)
          }
        }
        if (TYPE === 'weex') {
          navigator.pop()
        }
      }
    }
  })
}
export default MyPlugin
