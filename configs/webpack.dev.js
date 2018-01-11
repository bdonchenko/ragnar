const webpackMerge = require('webpack-merge');
const SassLintPlugin = require('sasslint-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const HappyPack = require('happypack');
const helpers = require('./helpers');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: 'happypack/loader?id=tslint'
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('build/dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new SassLintPlugin({
      configFile: '.sasslintrc',
      failOnError: false,
      failOnWarning: false
    }),
    new HappyPack({
      id: 'tslint',
      threads: 5,
      loaders: [
        {
          path: 'tslint-loader',
          query: {
            failOnHint: false,
            emitErrors: true,
            fix: true,
            configFile: './tslint.json'
          }
        }
      ]
    }),
    new Visualizer({ filename: './statistics.html' }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ],

  devServer: {
    contentBase: './build/dist',
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
