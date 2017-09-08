const utils = require('./utils')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: true
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}
