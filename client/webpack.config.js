const path = require('path');
const webpack = require('webpack');
const htmlwebpckplugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
       path: path.join(__dirname,'./dist'),
       filename: 'bundle.js'
    },
    plugins: [
        new htmlwebpckplugin({
            template: path.join(__dirname,'./index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "windows.jQuery": "jquery"//这里是增加的
        })
    ],
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader','css-loader'],
            },
            {
              test: /\.vue$/,
              use: 'vue-loader',
            },
            {
              test: /\.scss$/,
              use: ['style-loader','css-loader','sass-loader'],
            },
            {
              test: /\.(png|jpg|gif|svg|ttf|woff)$/,
              use: 'file-loader',
            },
          { test: /\.less$/, use: ['style-loader', 'css-loader' , 'less-loader'] },
          { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
          { test: /\.swf$/, use: 'swf-loader' }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          'jquery': 'jquery'
        },
        extensions: ['*', '.js', '.vue', '.json']
      },
}

