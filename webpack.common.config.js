const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

commonConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
    home: [
      "babel-polyfill",
      path.join(__dirname, 'src/pages/Home/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'react-dom']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      exclude: /favicon\.png$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8196,
          outputPath: 'images/',
          name: "[name].[hash:8].[ext]"
        }
      }]
    }, {
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
          }
        }
      ]
    }, {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader']
    }, {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
    }, {
        test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
            loader: "file-loader",
            options: {
            name: "images/[name].[hash:8].[ext]"
            }
        }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      // minify: { //打包后压缩
      //   removeComments: true, // 打包后删除注释
      //   collapseWhitespace: true // 打包后删除空格
      // }, 
      // chunks: ['app']
    }),
    // HashedModuleIdsPlugin 一直缓存在用户本地的
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],

  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      containers: path.join(__dirname, 'src/containers'),
      router: path.join(__dirname, 'src/router'),
      public: path.join(__dirname, 'src/public'),
      static: path.join(__dirname, 'src/static'),
    }
  }
};

module.exports = commonConfig;