const path = require('path');
const webpack = require('webpack');

const {
  HotModuleReplacementPlugin,
  DefinePlugin,
} = webpack;

require('dotenv').config({
  path: path.join(process.cwd(), '.env.dev'),
});

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
    /**
     * use DefinePlugin instead of dotenv-webpack because
     * dotenv-webpack doesn't replace process.env on server-side
     * it replaces only client-side
     */
    new DefinePlugin({
      'process.env': {
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
        GRAPHQL_URL: JSON.stringify(process.env.GRAPHQL_URL),
      },
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
