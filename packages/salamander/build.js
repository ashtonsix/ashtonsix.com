process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

process.on('unhandledRejection', err => {
  throw err
})

require('react-scripts/config/env')

const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const bfj = require('bfj')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')
const {checkBrowsers} = require('react-dev-utils/browsersHelper')

const {rewireEmotion} = require('react-app-rewire-emotion')
const {injectBabelPlugin} = require('react-app-rewired')

const chaining = '@babel/plugin-proposal-optional-chaining'
let appConfig = require('react-scripts/config/webpack.config.prod')
let ssrConfig = require('./webpack.config.ssr')
appConfig = injectBabelPlugin(chaining, appConfig)
appConfig = rewireEmotion(appConfig, 'production', {inline: true})
ssrConfig = injectBabelPlugin(chaining, ssrConfig)
ssrConfig = rewireEmotion(ssrConfig, 'production', {inline: true})

const paths = require('react-scripts/config/paths')
paths.ssrBuild = path.resolve(__dirname, './build-ssr')

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

const isInteractive = process.stdout.isTTY

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

const argv = process.argv.slice(2)
const writeStatsJson = argv.indexOf('--stats') !== -1

const main = async () => {
  try {
    await checkBrowsers(paths.appPath, isInteractive)
    fs.emptyDirSync(paths.appBuild)
    fs.copySync(paths.appPublic, paths.appBuild, {
      dereference: true,
      filter: file => file !== paths.appHtml
    })

    await buildAndReport(appConfig)
  } catch (err) {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  }
}

main()

async function buildAndReport(config) {
  const outputPath = config.output.path
  const previousFileSizes = await measureFileSizesBeforeBuild(outputPath)

  let stats, warnings
  try {
    const buildResult = await build({previousFileSizes, config})
    stats = buildResult.stats
    warnings = buildResult.warnings
  } catch (err) {
    console.log(chalk.red('Failed to compile.\n'))
    printBuildError(err)
    process.exit(1)
  }

  if (warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.\n'))
    console.log(warnings.join('\n\n'))
    console.log(
      '\nSearch for the ' +
        chalk.underline(chalk.yellow('keywords')) +
        ' to learn more about each warning.'
    )
    console.log(
      'To ignore, add ' +
        chalk.cyan('// eslint-disable-next-line') +
        ' to the line before.\n'
    )
  } else {
    console.log(chalk.green('Compiled successfully.\n'))
  }

  console.log('File sizes after gzip:\n')
  printFileSizesAfterBuild(
    stats,
    previousFileSizes,
    paths.appBuild,
    WARN_AFTER_BUNDLE_GZIP_SIZE,
    WARN_AFTER_CHUNK_GZIP_SIZE
  )
  console.log()
}

async function build({previousFileSizes, config}) {
  console.log('Creating an optimized production build...')

  let compiler = webpack(config)
  return await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages
      if (err) {
        if (!err.message) {
          return reject(err)
        }
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: []
        })
      } else {
        messages = formatWebpackMessages(
          stats.toJson({all: false, warnings: true, errors: true})
        )
      }
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }

      const resolveArgs = {
        stats,
        previousFileSizes,
        warnings: messages.warnings
      }
      if (writeStatsJson) {
        return bfj
          .write(paths.appBuild + '/bundle-stats.json', stats.toJson())
          .then(() => resolve(resolveArgs))
          .catch(error => reject(new Error(error)))
      }

      return resolve(resolveArgs)
    })
  })
}
