const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, '/client/app.jsx'),
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'client/'),
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    }],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
  watch: true,
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
};
