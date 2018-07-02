import express from 'express';
import setUpMiddlewares from './middlewares';
import renderHtml from './helpers/renderHtml';

const app = express();

setUpMiddlewares(app);

app.get('*', (req, res) => {
  const html = renderHtml(req);
  res.send(html);
});

app.listen(3000, () => {
  console.log('3000');
});
