const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const npmScript = process.env.npm_lifecycle_event
  ? process.env.npm_lifecycle_event
  : '';
console.log(`You are in ${npmScript} mode`);

const env = process.env.NODE_ENV || 'local';

const cssRules = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: 'inline',
      config: {
        path: './configs/postcss.config.js'
      }
    }
  },
  { loader: 'resolve-url-loader' },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  }
];

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.html', '.sass', '.svg'],
    modules: [helpers.root('./src'), helpers.root('./node_modules')],
    alias: {
      environment: helpers.root(`environments/${env}.js`)
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('tsconfig.json') }
          },
          {
            loader: 'angular2-template-loader'
          },
          {
            loader: 'angular-router-loader'
          }
        ],
        exclude: [/\.(spec|e2e|d)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.(scss|sass|css)$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: ['css-to-string-loader', 'style-loader', ...cssRules]
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#20357
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('./src')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'manual',
      chunks: ['polyfills', 'vendor', 'app'],
    }),
    new TsConfigPathsPlugin()
  ]
};
