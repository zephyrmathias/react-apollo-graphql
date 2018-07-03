import 'babel-polyfill';
import express from 'express';
import setUpMiddlewares from './middlewares';
import renderHtml from './helpers/renderHtml';

const app = express();

setUpMiddlewares(app);

app.get('*', async (req, res) => {
  // need to implement try catch
  const html = await renderHtml(req);
  res.send(html);
});

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
