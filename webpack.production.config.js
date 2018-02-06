const path = require('path') // 为了得到项目根路径
const webpack = require('webpack') // webpack核心
const prefixer = require('autoprefixer')  // 自动添加css前缀
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf')

const APP_PATH = path.join(__dirname, 'src')
const APP_FILE = path.join(APP_PATH, 'index')
const BUILD_PATH = path.join(__dirname, 'dist')

module.exports = {
  entry: {
    vendor: ['babel-polyfill'],
    app: APP_FILE
  },
  output: {
    path: BUILD_PATH,
    publicPath: '',
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  devtool: false, // 'source-map',  // 与UglifyJsPlugin冲突
  module: {
    loaders: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        formatter: require('eslint-friendly-formatter')
      },
      include: path.join(__dirname, 'src')
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!scss-loader'
    }, {
      test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|mp3)(\?|$)/,
      exclude: /node_modules/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.(png|jpg|gif)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        postcss: [
          prefixer()
        ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false, // 不输出警告信息
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images/dynamic',
      to: './assets/images/dynamic'
    }]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js'
    }),// 将依赖提取到一个js
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunksSortMode: 'dependency'
    })
    // new webpack.optimize.OccurenceOrderPlugin()  // 配置给最常用的id分配最简短的id, webpack 1.x 需要
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.css', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  }
}
