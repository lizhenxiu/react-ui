import path from 'path'
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
  'react-hot-loader/patch',
  'webpack-dev-server/client',
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, './app/app.js')
]

/**
 * 服务配置
 */
const devServer = {
  hot: true,
  host: '0.0.0.0',
  port: 8082,
  contentBase: path.resolve(__dirname, 'www'),
  historyApiFallback: true,
  disableHostCheck: true,
  publicPath: '/',
  proxy: {
    '/api': 'http://localhost:3000/'
  }
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
]


/**
 * 整体配置
 */
const config = {
  context,
  entry,
  devServer,
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

export default config
