const path = require('path')

module.exports = (config, context) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@design': path.resolve(__dirname, '../../libs/ui-kit/src/lib/__design')
      }
    }
  }
}
