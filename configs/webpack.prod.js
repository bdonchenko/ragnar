const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const SassLintPlugin = require('sasslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('build/dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new SassLintPlugin({
      configFile: '.sasslintrc',
      failOnError: true,
      failOnWarning: true
    }),
    new CopyWebpackPlugin([
      //{ from: 'src/assets', to: 'assets' },
      { from: 'src/favicon.ico' }
    ])
  ],
  stats: 'normal',

  devServer: {
    contentBase: './build/dist',
    historyApiFallback: true,
    port: 3000,
    stats: 'normal'
  }
});
