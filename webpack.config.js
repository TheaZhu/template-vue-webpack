const path = require('path')
const webpack = require('webpack')
const prefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf')

const BUILD_PATH = path.join(__dirname, 'dist')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'eval',
  module: {
    rules: [
      {
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
        exclude: /node_modules/,
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
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        postcss: [
          prefixer()
        ]
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.css', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  }
}
