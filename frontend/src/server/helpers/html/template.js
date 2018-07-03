/**
 *
 * @param {*} content
 * @param {*} styles
 * @param {*} client
 */

const Html = (content, styles, client) => {
  const initialState = client.extract();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
      ${styles}
    </head>
    <body>
      <div id="app">${content}</div>
      <script async src="/vendors.js"></script>
      <script async src="/main.js"></script>
      <script>window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')}</script>
    </body>
    </html>
  `;
};

export default Html;
