/**
 *  create by wubinbin on 2019/8/8
 **/
const base = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[name]_[hash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});