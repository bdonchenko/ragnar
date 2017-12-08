const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('build/dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [],

  devServer: {
    contentBase: './src',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true,
    compress: true,
    quiet: false,
    inline: true,
    hot: false,
    stats: 'minimal',
    port: 3000,
    overlay: {
      errors: true
    },
    clientLogLevel: 'none',
    watchOptions: {
      aggregateTimeout: 50,
      ignored: /node_modules/
    }
  }
});
