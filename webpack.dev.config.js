const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

var target = "http://localhost:3001";

const devConfig = {
    devtool: 'inline-source-map',// devtool优化
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch', // 模块热替换
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js',
        publicPath: "/"
    },
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //         "style-loader",
    //         "css-loader",
    //         ]
    //     },
    //     {
    //         test: /\.less$/,
    //         use: ['style-loader','css-loader', 'less-loader']
    //     }, 
    //     {
    //         test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
    //         exclude: /favicon\.png$/,
    //         use: [{
    //             loader: "url-loader",
    //             options: {
    //             limit: 8196,
    //             name: "images/[name].[hash:8].[ext]"
    //             }
    //         }]
    //         }, {
    //         test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
    //         use: [{
    //             loader: "file-loader",
    //             options: {
    //             name: "images/[name].[hash:8].[ext]"
    //             }
    //         }]
    //     }]
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'HOST': '""',
                'API':'"/api"'
            }
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target,
                pathRewrite: { "^/api": "/server" },
                changeOrigin: true
            }
        }
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);