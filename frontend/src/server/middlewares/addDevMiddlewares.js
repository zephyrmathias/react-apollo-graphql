import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddlewares from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddlewares from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackConfig from '../../../tools/webpack/webpack.config.dev';

const addDevMiddlewares = (app) => {
  const compiler = webpack(webpackConfig);
  const devMiddlewares = webpackDevMiddlewares(compiler, {
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(devMiddlewares);
  app.use(webpackHotMiddlewares(compiler));
};

export default addDevMiddlewares;
