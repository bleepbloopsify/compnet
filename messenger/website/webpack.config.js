const webpack = require('webpack');
const path = require('path');

const SOURCE_DIR = "components";
const DIST_DIR = "static/dist";

module.exports = {
  cache: true,
  entry: {
      'messages': path.resolve(SOURCE_DIR, 'messages.jsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(DIST_DIR, 'js'),
  },
  plugins:[
    new webpack.DefinePlugin({
      API_URL: "'" + (process.env.API_URL || 'http://poolniggas.com') + "'",
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(SOURCE_DIR, 'manifest.json'), // ok maybe this is ok
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false, // lets keep that shit small
    //   comments: false, // lmao no
    //   compress: {
    //     warnings: false, // goddammit this is awful
    //   },
    //   debug: true, // for now TODO
    //   sourceMap: true, // for dev TODO
    // }),
    // new webpack.optimize.DedupePlugin() // don't use except in prod
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(SOURCE_DIR),
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /.(sass|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ]
  }
};