import 'babel-polyfill';
import express from 'express';
import proxy from 'http-proxy-middleware';
import setUpMiddlewares from './middlewares';
import renderHtml from './helpers/renderHtml';

const app = express();

setUpMiddlewares(app);

/**
 * use http-proxy to change origin
 * to stop getting status code 204 (empty response)
 */
const apiProxy = proxy({
  target: process.env.GRAPHQL_URL,
  changeOrigin: true,
});

app.use('/graphql', apiProxy);

app.get('*', async (req, res) => {
  // need to implement try catch
  const html = await renderHtml(req);
  res.send(html);
});

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
