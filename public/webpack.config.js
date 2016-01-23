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
    publicPath: 'webpack_js/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10,
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
};
