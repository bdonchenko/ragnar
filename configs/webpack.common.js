const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

const ENV = process.env.npm_lifecycle_event
  ? process.env.npm_lifecycle_event
  : '';

console.log(`You are in ${ENV} mode`);

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
    extensions: ['.ts', '.js', '.json', '.html', '.sass', '.svg']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader?'
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
        use: ['css-to-string-loader','style-loader', ...cssRules]
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
