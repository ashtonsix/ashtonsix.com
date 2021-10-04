const path = require('path')
const webpack = require('webpack')
const env = require('react-scripts/config/env')()
const paths = require('react-scripts/config/paths')
paths.ssrSrc = path.resolve(__dirname, './src')
paths.ssrIndex = path.resolve(__dirname, './src/index-ssr.js')
paths.ssrBuild = path.resolve(__dirname, '../salamander-apollo/generated')

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'source-map',
  bail: true,
  entry: [paths.ssrIndex],
  output: {
    path: paths.ssrBuild,
    filename: 'ReactApp.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    modules: ['node_modules', paths.ssrSrc],
    extensions: ['.js']
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.ssrSrc,
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
          babelrc: false,
          configFile: false,
          presets: [require.resolve('babel-preset-react-app')],
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                  }
                }
              }
            ]
          ],
          cacheDirectory: true
        }
      },
      {
        test: /\.(css|sass)$/,
        include: paths.ssrSrc,
        loader: require.resolve('ignore-loader')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}
