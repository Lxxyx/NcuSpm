var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'webpack_js');

module.exports = {
    entry: {
        index: './app/index.js',
        about: './app/about.js'
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
}
