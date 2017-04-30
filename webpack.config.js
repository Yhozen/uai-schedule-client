var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: { path: __dirname, filename: './build/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
               test: /\.css$/,
               loaders: ['style-loader', 'css-loader']
      },
    ]
  },
};
