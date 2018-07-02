import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/components/App';

const renderHtml = () => {
  const Application = (
    <App />
  );

  const content = renderToString(Application);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script async src="/bundle.js"></script>
    </body>
    </html>
  `;
};

export default renderHtml;
