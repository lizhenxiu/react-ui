import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from './node_modules/webpack'

/**
 * 相对于此目录解析
 */
const context = path.resolve(__dirname, '../')

/**
 * 入口
 */
const entry = [
  'babel-polyfill',
  path.resolve(__dirname, './app/app.js')
]
/**
 * 输出
 */
const output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/',
  filename: 'bundle.js',
}


/**
 * 中间件配置
 */
const rules = [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    options: {
      configFile: path.resolve(__dirname, '.eslintrc'),
    },
    loader: 'eslint-loader'
  },
  {
    test: /\.jsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'url-loader?limit=80000&name=imgs/[hash].[ext]'
  },
  {
    test: /\.(woff|woff2|eot|ttf)$/i,
    loader: 'url-loader?limit=80000&name=fonts/[hash].[ext]'
  }
]


/**
 * 插件配置
 */
const plugins = [ // 插件
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin()
]


/**
 * 整体配置
 */
const config = {
  context,
  entry,
  output,
  plugins,
  module: { rules },
  resolve: {
    extensions: ['.js', '.md', '.txt'],
    alias: {
      'robot-ui': path.resolve(__dirname, '../src'),
    },
  },
  devtool: 'source-map'
}


config.externals = {
  cheerio: 'window',
  'react/addons': 'react',
  'react/lib/ExecutionEnvironment': 'react',
  'react/lib/ReactContext': 'react',
}

module.exports = config
