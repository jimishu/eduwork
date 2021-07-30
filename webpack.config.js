const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackEncodingPlugin = require('webpack-encoding-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  /* 1、入口文件，默认src/index.js以这个文件开始 */
  // 单入口，如果只有一个入口，使用字符串，指定一个入口文件，打包一个chunk,输出bundle
  entry: './src/index.js',

  // Array，多入口，写多个入口文件，所有入口文件形成一个chunk,名称是默认的，输出只有一个bundle
  // entry: ['./src/index.js', './src/main.js'],

  // Object,多入口，有几个入口文件就会生成几个chunk,并输出几个bundle,chunk的名称是key
  // entry: {
  //   one: './src/index.js',
  //   two: './src/main.js'
  // },

  // 特殊用法，多入口
  // entry: {
  //   onea: ['./src/index.js', './src/main.js'],
  //   twob: './src/index.js'
  // },
  // entry: {
  //   vendor: ['./src/js/common.js', './src/js/jquery.js'],
  //   cart: './src/js/cart.js',
  //   index: './src/js/index.js'
  // },
  // 2、输出
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  // 3、loader 让webpack能够去处理那些非Javascript资源css,img等，将他们处理成webpack能够识别的资源，可以理解成一个翻译过程
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }, //遵循从右往左
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  // 4、plugins插件
  plugins: [
    // 默认创建一个空的，目的就是自动引入打包的资源（js,css）
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 指定输出名称
      filename: 'index.html',
      // chunks: ['vendor', 'index'],
      // 压缩
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/cart.html',
    //   // 指定输出名称
    //   filename: 'cart.html',
    //   chunks: ['cart', 'vendor'],
    //   // 压缩
    //   minify: {
    //     // 移除空格
    //     collapseWhitespace: true,
    //     // 移除注释
    //     removeComments: true
    //   }
    // }),
    new WebpackEncodingPlugin({
      encoding: 'UTF-8'
    }),
    new MiniCssExtractPlugin({
      filename: 'demo.css'
    })
  ],
  // 5、mode模式，development 开发模式, production 生产模式
  mode: 'development'
}