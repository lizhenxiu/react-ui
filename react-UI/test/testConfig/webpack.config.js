import path from 'path'
import { toString } from 'app-root-path'


/**
 * 相对于此目录解析
 */
const context = path.resolve(toString())

/**
 * 入口
 */
const entry = {
  app: path.resolve(toString(), 'src'),
}

/**
 * 中间件配置
 */
const rules = [{
  test: /\.js?$/,
  use: ['babel-loader'],
  exclude: /node_modules/
}, {
  test: /\.css$/,
  use: ['style-loader', 'css-loader?modules'],
}, {
  test: /\.json$/,
  use: 'json-loader'
}]


/**
 * 整体配置
 */
const config = {
  context,
  entry,
  module: { rules },
  stats: {
    assets: false,
    colors: true,
    errors: false,
    errorDetails: false,
    chunkModules: false,
    chunkOrigins: false,
    chunks: false,
    hash: false,
    children: false,
    warnings: false,
  },
  resolve: {
    extensions: ['.js', '.md', '.txt'],
    alias: {
      'robot-ui': path.resolve(toString(), 'src'),
    }
  },
}


config.externals = {
  cheerio: 'window',
  'react/addons': 'react',
  'react/lib/ExecutionEnvironment': 'react',
  'react/lib/ReactContext': 'react',
}

export default config
