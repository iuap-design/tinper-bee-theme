const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'react-dom']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: "//"
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
      template: path.join(__dirname, 'src/index.html')
    }),
    // HashedModuleIdsPlugin 一直缓存在用户本地的
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
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