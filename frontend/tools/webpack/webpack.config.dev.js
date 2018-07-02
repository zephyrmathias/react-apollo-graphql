const path = require('path');
const webpack = require('webpack');

const { HotModuleReplacementPlugin } = webpack;

const config = {
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/client/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: false,
          babelrc: false,
          presets: [
            'react',
            ['env', { modules: false }],
          ],
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
