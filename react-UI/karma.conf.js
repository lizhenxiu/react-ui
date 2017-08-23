import karma from 'karma'
import webpackConfig from './test/testConfig/webpack.config'
const app = karma.Server // karma服务

const config = {
  basePath: '',
  frameworks: ['jasmine'],
  files: ['test/**/*.js'],
  preprocessors: {
    'src/**/*.js': ['webpack', 'sourcemap'],
    'test/**/*.js': ['webpack', 'sourcemap']
  },
  webpack: webpackConfig,
  webpackServer: { noInfo: true, stats: 'errors-only' },
  plugins: [
    'karma-webpack',
    'karma-jasmine',
    'karma-sourcemap-loader',
    'karma-chrome-launcher',
    'karma-phantomjs-launcher'
  ],
  babelPreprocessor: { options: { presets: ['airbnb'] } },
  reporters: ['progress'],
  port: 9876,
  colors: true,
  logLevel: 'INFO',
  terminal: true,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
}

const server = new app(config, (exitCode) => {
  console.log(`Karma has exited with ${exitCode}`)
  process.exit(exitCode)
})
server.start()


// export default (config) => {
//   config.set()
// }
