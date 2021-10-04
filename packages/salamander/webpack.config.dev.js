const {rewireEmotion} = require('react-app-rewire-emotion')
const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env) {
  config = injectBabelPlugin('@babel/plugin-proposal-optional-chaining', config)
  config = rewireEmotion(config, env, {inline: true})
  return config
}
