const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "postcss-loader"]
      })
    }]
  },
  
  plugins: [
    // 每次打包前自动清理下dist文件。
    new CleanWebpackPlugin(['dist/*.*']),
    // 压缩生成的文件。
    new UglifyJSPlugin(),
    // 我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量：
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'HOST': '""',
        'API':'"/npm"'
      }
    }),
    // 单独生成css文件。
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    })
  ]

};

module.exports = merge(commonConfig, publicConfig);