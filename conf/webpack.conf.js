const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WriteFilesPlugin = require('write-file-webpack-plugin');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          'ts'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      conf.paths.src
    ),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery",
    }),
    //copy patternfly assets for demo app
    new CopyWebpackPlugin([
      {
        from: { glob:'./src/html/*.html'},
        to: './',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/img/*.*'},
        to: './img',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/fonts/*.*'},
        to: './fonts',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/css/*.*'},
        to: './css',
        flatten: true
      }
    ]),

    //creates distribution css file rather than inlining styles
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: false }),

    //writes files on changes to src
    new WriteFilesPlugin()
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ],
    alias: {
      'jquery': require.resolve('jquery/dist/jquery'),
      'c3': require.resolve('c3'),
      'd3': require.resolve('d3')
    }
  },
  entry: `./${conf.path.src('index')}`,
  ts: {
    configFileName: 'tsconfig.json'
  },
  tslint: {
    configuration: require('../tslint.json')
  }
};
