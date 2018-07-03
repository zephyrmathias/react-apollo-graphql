import React from 'react';
import {
  ApolloProvider,
  renderToStringWithData,
} from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
// import client from './apollo';
import App from '../../client/components/App';
import Html from './html/template';

const renderHtml = async (req) => {
  // need to implement try catch
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  });
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache,
  });
  const context = {};
  const Application = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );
  const content = await renderToStringWithData(Application);
  const html = Html(content, client);
  return html;
};

export default renderHtml;
