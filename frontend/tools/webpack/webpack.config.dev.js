const path = require('path');
const webpack = require('webpack');
const DotEnvPlugin = require('dotenv-webpack');

const { HotModuleReplacementPlugin } = webpack;

const config = {
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/client/index.jsx',
  ],
  output: {
    filename: '[name].js',
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
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DotEnvPlugin({
      path: path.join(process.cwd(), '.env.dev'),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
